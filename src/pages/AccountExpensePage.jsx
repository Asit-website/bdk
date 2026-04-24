import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download, Eye, Share2 } from 'lucide-react';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './AccountExpensePage.css';
import ExpenseDetailsModal from '../components/ExpenseDetailsModal';

const AccountExpensePage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);

    const columns = [
        'Sl No',
        'Expence No',
        'Date',
        'Expencer Name',
        'Total Amount',
        'Remark',
        'Action',
    ];

    const rows = [
        { id: 1, expNo: '256', date: '22/02/2025', expenser: 'CHANDI PATRA', category: 'PETROL', paymentType: 'UPI', amount: '200.00', remark: 'Shipra Filing Station' },
        { id: 2, expNo: '256', date: '22/02/2025', expenser: 'CHANDI PATRA', category: 'FOOD', paymentType: 'CASH', amount: '200.00', remark: 'Amlagora' },
        { id: 3, expNo: '256', date: '22/02/2025', expenser: 'CHANDI PATRA', category: 'PETROL', paymentType: 'UPI', amount: '200.00', remark: 'Shipra Filing Station' },
    ];

    const getMenuPosition = (anchorRect, menuHeight, menuWidth, align = 'right') => {
        if (!anchorRect) return null;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const spaceBelow = viewportHeight - anchorRect.bottom;
        const openAbove = spaceBelow < menuHeight + 12;

        const top = openAbove
            ? Math.max(anchorRect.top - menuHeight - 8, 12)
            : anchorRect.bottom + 8;

        let left = align === 'right'
            ? anchorRect.right - menuWidth
            : anchorRect.left;

        left = Math.min(Math.max(left, 12), viewportWidth - menuWidth - 12);
        return { top, left };
    };

    useEffect(() => {
        const handleClose = (event) => {
            if (event.target.closest('.service-action-wrap')) return;
            if (event.target.closest('.service-action-menu')) return;
            setOpenActionId(null);
        };

        const handleScroll = () => setOpenActionId(null);

        window.addEventListener('click', handleClose);
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('click', handleClose);
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="page-container">
            <div className="filters-section service-dashboard-filters">
                <div className="service-dashboard-top">
                    <div className="service-dashboard-search">
                        <Search size={16} color="#64748b" />
                        <input type="text" placeholder="Search Transactions" />
                    </div>

                    <div className="filter-actions">
                        <button className="btn btn-sale">+ Add Sale</button>
                        <button className="btn btn-purchase">+ Add Purchase</button>
                        <button className="btn-icon"><Plus size={18} /></button>
                        <button className="btn-icon muted"><MoreVertical size={18} /></button>
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Expence</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                    <div className="filter-row-right">
                        <button
                            className="btn btn-primary btn-add-expense"
                            onClick={() => navigate('/account/expense/add')}
                        >
                            <Plus size={18} /> Add Expence
                        </button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="booking-summary-card expense-summary-wrap">
                <div className="service-stat-card tone-green expense-summary-card-inner">
                    <div className="expense-summary-left">
                        <span className="service-stat-title">Total Expence</span>
                        <span className="service-stat-value">₹5,000.00</span>
                        <div className="expense-period-toggles">
                            <span className="period-toggle active">DAY</span>
                            <span className="period-toggle">MONTH</span>
                            <span className="period-toggle">YEAR</span>
                        </div>
                    </div>
                    <Eye size={30} className="expense-eye" />
                </div>
            </div>

            <div className="table-container service-dashboard-table">
                <div className="table-header service-table-header">
                    <h3 className="table-title">Transactions</h3>
                    <div className="service-table-toolbar">
                        <div className="service-table-filters">
                            <span className="service-filter-label">Filter by :</span>
                            <div className="select-wrapper">
                                <select className="select-input">
                                    <option>This Month</option>
                                </select>
                                <ChevronDown size={14} className="select-icon-pointer" />
                            </div>
                            <div className="date-wrapper">
                                <Calendar size={14} color="#64748b" />
                                <input
                                    type="date"
                                    className="date-input-hidden"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    onClick={(e) => e.target.showPicker && e.target.showPicker()}
                                />
                                <span className="date-separator">To</span>
                                <input
                                    type="date"
                                    className="date-input-hidden"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    onClick={(e) => e.target.showPicker && e.target.showPicker()}
                                />
                            </div>
                            <div className="select-wrapper">
                                <select className="select-input">
                                    <option>All</option>
                                </select>
                                <ChevronDown size={14} className="select-icon-pointer" />
                            </div>
                            <div className="select-wrapper">
                                <select className="select-input">
                                    <option>All Users</option>
                                </select>
                                <ChevronDown size={14} className="select-icon-pointer" />
                            </div>
                        </div>
                        <div className="table-actions">
                            <button className="table-action-btn"><Search size={18} color="#64748b" /></button>
                            <button className="table-action-btn"><Filter size={18} color="#64748b" /></button>
                            <button className="table-action-btn"><Printer size={18} color="#22c55e" /></button>
                            <button className="table-action-btn"><Download size={18} color="#3b82f6" /></button>
                        </div>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table">
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th key={col}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.expNo}</td>
                                    <td>{row.date}</td>
                                    <td>
                                        <button 
                                            className="table-link-btn"
                                            onClick={() => {
                                                setSelectedExpense(row);
                                                setIsDetailsModalOpen(true);
                                            }}
                                        >
                                            {row.expenser}
                                        </button>
                                    </td>
                                    <td>{row.amount}</td>
                                    <td>{row.remark}</td>
                                    <td className="action-cell">
                                        <div className="service-action-wrap">
                                            <button
                                                type="button"
                                                className={`action-dots ${openActionId === row.id ? 'active' : ''}`}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setOpenActionId(openActionId === row.id ? null : row.id);
                                                    setActionAnchor(event.currentTarget.getBoundingClientRect());
                                                }}
                                            >
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {openActionId && actionAnchor && createPortal(
                <div
                    className="service-action-menu"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(actionAnchor, 220, 170, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">View / Edit</button>
                    <button type="button" className="service-action-item">Update</button>
                    <button type="button" className="service-action-item">Print</button>
                    <button type="button" className="service-action-item">History</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                </div>,
                document.body
            )}

            <ExpenseDetailsModal 
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                data={selectedExpense}
            />
        </div>
    );
};

export default AccountExpensePage;