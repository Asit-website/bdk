import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download, ChevronsUpDown, Target, Share2 } from 'lucide-react';
import PaymentOutModal from '../components/PaymentOutModal';
import '../components/Filters.css';
import '../components/LeadTable.css';
import '../components/StatsSection.css';
import './AccountPaymentOutPage.css';

const AccountPaymentOutPage = () => {
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [openPaymentOutModal, setOpenPaymentOutModal] = useState(false);
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    const rows = [
        { id: 1, date: '15/02/2026', refNo: '1', creditor: 'CHANDI PATRA', totalAmount: '₹ 500', paid: '₹ 500', paymentType: 'Cash' },
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
                <div className="search-lead">
                    <Search size={16} className="search-icon-inline" />
                    <input type="text" placeholder="Search Transactions" className="search-input" />
                </div>

                <div className="filter-actions">
                    <button className="btn btn-sale">+ Add Sale</button>
                    <button className="btn btn-purchase">+ Add Purchase</button>
                    <button className="btn-icon"><Plus size={18} /></button>
                    <button className="btn-icon muted"><MoreVertical size={18} /></button>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Payment-Out</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                    <div className="filter-row-right">
                        <button
                            className="btn btn-primary btn-add-paymentout"
                            onClick={() => setOpenPaymentOutModal(true)}
                        >
                            <Plus size={18} /> Add Payment-Out
                        </button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
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
                            <input
                                type="date"
                                className="date-input-hidden"
                                value={startDate}
                                onChange={(event) => setStartDate(event.target.value)}
                                onClick={(event) => event.target.showPicker && event.target.showPicker()}
                            />
                            <span className="date-separator">To</span>
                            <input
                                type="date"
                                className="date-input-hidden"
                                value={endDate}
                                onChange={(event) => setEndDate(event.target.value)}
                                onClick={(event) => event.target.showPicker && event.target.showPicker()}
                            />
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
                <div className="stat-card account-stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Total Amount</span>
                        <div className="stat-value-group">
                            <span className="stat-value">₹ 500</span>
                            <span className="stat-percent account-green">100% ↑</span>
                        </div>
                        <div className="stat-sub-stats account-received-row">
                            <span className="sub-stat-item">Paid: <strong>₹ 500</strong></span>
                        </div>
                        <span className="stat-subtext">vs last month</span>
                    </div>
                    <div className="stat-icon-wrapper account-stat-icon">
                        <Target size={20} />
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table">
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
                    <table className="lead-table">
                        <thead>
                            <tr>
                                {['Date', 'Ref. no.', 'Creditor Name', 'Total Amount', 'Paid', 'Payment Type'].map((col) => (
                                    <th key={col}>
                                        <div className="th-content">
                                            {col}
                                            <ChevronsUpDown size={12} className="sort-icon" />
                                        </div>
                                    </th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.date}</td>
                                    <td>{row.refNo}</td>
                                    <td>{row.creditor}</td>
                                    <td>{row.totalAmount}</td>
                                    <td>{row.paid}</td>
                                    <td>{row.paymentType}</td>
                                    <td className="action-cell">
                                        <div className="service-action-wrap">
                                            <button type="button" className="paymentout-inline-action paymentout-inline-print" title="Print">
                                                <Printer size={13} />
                                            </button>
                                            <button type="button" className="paymentout-inline-action paymentout-inline-share" title="Share">
                                                <Share2 size={13} />
                                            </button>
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
                        ...(getMenuPosition(actionAnchor, 220, 190, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">View/Edit</button>
                    <button type="button" className="service-action-item">Open PDF</button>
                    <button type="button" className="service-action-item">Print</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                    <button type="button" className="service-action-item">Block/Unblock</button>
                    <button type="button" className="service-action-item">View History</button>
                </div>,
                document.body
            )}

            {openPaymentOutModal && (
                <PaymentOutModal closeModal={() => setOpenPaymentOutModal(false)} />
            )}
        </div>
    );
};

export default AccountPaymentOutPage;