import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, MoreVertical, Filter, Printer, Download, ChevronsUpDown, Target, Eye, FileText, RotateCcw, History, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomerOverdueDetailsModal from '../components/CustomerOverdueDetailsModal';
import AssignNowModal from '../components/AssignNowModal';
import UpdateCommitmentModal from '../components/UpdateCommitmentModal';
import AccountBulkAssignModal from '../components/AccountBulkAssignModal';
import '../components/Filters.css';
import '../components/LeadTable.css';
import '../components/StatsSection.css';
import './AccountOverduePartyPage.css';

const AccountOverduePartyPage = () => {
    const navigate = useNavigate();
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [openAssignModal, setOpenAssignModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [isBulkAssignOpen, setIsBulkAssignOpen] = useState(false);

    const rows = [
        { id: 1, date: '25/03/2026', customer: 'MANIK CHANDRA', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
        { id: 2, date: '22/02/2026', customer: 'GOUTAM MANNA', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
        { id: 3, date: '12/12/2025', customer: 'BIKASH MAITY', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
        { id: 4, date: '12/12/2025', customer: 'AKASH DE', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
        { id: 5, date: '12/12/2025', customer: 'SHRIMANTA DEY', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
        { id: 6, date: '12/12/2025', customer: 'PRAKASH DEY', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
        { id: 7, date: '12/12/2025', customer: 'GADADHAR DEY', mobile: '9999999999', address: 'VILLAGE, GP, BLOCK', due: '10,000.00' },
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
        <div className="page-container overdue-party-page">
            <div className="filters-section service-dashboard-filters">
                <div className="search-lead">
                    <Search size={16} className="search-icon-inline" />
                    <input type="text" placeholder="Search Transactions" className="search-input" />
                </div>

                <div className="filter-actions overdue-header-actions">
                    <button className="btn btn-sale">+ Add Sale</button>
                    <button className="btn btn-purchase">+ Add Purchase</button>
                    <button className="btn-icon"><Plus size={18} /></button>
                    <button className="btn-icon muted"><MoreVertical size={18} /></button>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Out Standing Party</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                    <div className="filter-row-right">
                        <button 
                            className="btn bulk-assign-btn"
                            onClick={() => setIsBulkAssignOpen(true)}
                        >
                            <Plus size={18} /> Bulk Assign
                        </button>
                    </div>
                </div>

                <div className="filter-selectors account-filter-selectors">
                    <div className="filter-group">
                        <label>Filter by :</label>
                        <div className="select-wrapper">
                            <select className="select-input">
                                <option>This Month</option>
                            </select>
                            <ChevronDown size={14} className="select-icon-pointer" />
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="date-wrapper payment-date-range">
                            <Calendar size={14} color="#64748b" />
                            <input type="date" className="date-input-hidden" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            <span className="date-separator">To</span>
                            <input type="date" className="date-input-hidden" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="select-wrapper">
                            <select className="select-input">
                                <option>All Firms</option>
                            </select>
                            <ChevronDown size={14} className="select-icon-pointer" />
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="select-wrapper">
                            <select className="select-input">
                                <option>All Users</option>
                            </select>
                            <ChevronDown size={14} className="select-icon-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-grid account-stats-grid">
                <div className="stat-card overdue-stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Total Outstanding Amount</span>
                        <div className="stat-value-group">
                            <span className="stat-value">₹ 3,000</span>
                            <span className="stat-percent account-green">100% ↑</span>
                        </div>
                        <span className="stat-subtext">vs last month</span>
                    </div>
                    <div className="stat-icon-wrapper account-stat-icon overdue-icon">
                        <Target size={20} />
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table overdue-table-wrap">
                <div className="table-header service-table-header account-table-header ss-tab">
                    <h3 className="table-title">Transactions</h3>
                    <div className="table-actions">
                        <button className="table-action-btn"><Search size={18} color="#64748b" /></button>
                        <button className="table-action-btn"><Filter size={18} color="#64748b" /></button>
                        <button className="table-action-btn"><Printer size={18} color="#22c55e" /></button>
                        <button className="table-action-btn"><Download size={18} color="#3b82f6" /></button>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table overdue-party-table">
                        <thead>
                            <tr>
                                <th>SI</th>
                                {['Date', 'Customer Name', 'Mobile No', 'Address', 'Total Due Amount'].map((col) => (
                                    <th key={col}>
                                        <div className="th-content">
                                            {col}
                                            <ChevronsUpDown size={12} className="sort-icon" />
                                        </div>
                                    </th>
                                ))}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.date}</td>
                                    <td 
                                        className="customer-name-blue"
                                        onClick={() => setSelectedCustomer(row)}
                                    >
                                        {row.customer}
                                    </td>
                                    <td>{row.mobile}</td>
                                    <td>{row.address}</td>
                                    <td className="due-amount-red">₹{row.due}</td>
                                    <td className="action-cell">
                                        <div className="overdue-action-group">
                                            <button 
                                                className="assign-btn"
                                                onClick={() => setOpenAssignModal(true)}
                                            >
                                                Assign
                                            </button>
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
                        ...(getMenuPosition(actionAnchor, 180, 160, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">
                        <Eye size={14} className="menu-item-icon" /> View
                    </button>
                    <button type="button" className="service-action-item">
                        <FileText size={14} className="menu-item-icon" /> Open PDF
                    </button>
                    <button type="button" className="service-action-item">
                        <Printer size={14} className="menu-item-icon" /> Print
                    </button>
                    <button 
                        type="button" 
                        className="service-action-item"
                        onClick={() => {
                            setOpenUpdateModal(true);
                            setOpenActionId(null);
                        }}
                    >
                        <RotateCcw size={14} className="menu-item-icon" /> Update
                    </button>
                    <button type="button" className="service-action-item">
                        <History size={14} className="menu-item-icon" /> View History
                    </button>
                </div>,
                document.body
            )}

            {selectedCustomer && (
                <CustomerOverdueDetailsModal 
                    customer={selectedCustomer} 
                    onClose={() => setSelectedCustomer(null)} 
                />
            )}

            <AssignNowModal 
                open={openAssignModal} 
                onClose={() => setOpenAssignModal(false)} 
            />

            <UpdateCommitmentModal 
                open={openUpdateModal} 
                onClose={() => setOpenUpdateModal(false)} 
            />

            <AccountBulkAssignModal 
                open={isBulkAssignOpen} 
                onClose={() => setIsBulkAssignOpen(false)} 
            />
        </div>
    );
};

export default AccountOverduePartyPage;
