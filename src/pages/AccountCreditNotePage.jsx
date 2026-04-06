import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download, ChevronsUpDown, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './AccountCreditNotePage.css';

const AccountCreditNotePage = () => {
    const navigate = useNavigate();
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    const rows = [
        {
            id: 1,
            date: '15/02/2026',
            refNo: '1',
            partyName: 'SOURAV KUNDU',
            categoryName: '-',
            type: 'Credit Note',
            total: '₹ 20,000.00',
            receivedPaid: '₹ 20,000.00',
            balance: '₹ 0.00',
        },
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
            <div className="filters-section service-dashboard-filters creditnote-filters">
                <div className="search-lead creditnote-search-wrap">
                    <Search size={14} className="search-icon-inline" />
                    <input type="text" placeholder="CREDIT" className="search-input creditnote-search" />
                </div>

                <div className="filter-actions">
                    <button className="btn btn-sale">+ Add Sale</button>
                    <button className="btn btn-purchase">+ Add Purchase</button>
                    <button className="btn-icon"><Plus size={18} /></button>
                    <button className="btn-icon muted"><MoreVertical size={18} /></button>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Credit Note</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                    <div className="filter-row-right">
                        <button className="btn btn-primary btn-add-credit-note" onClick={() => navigate('/account/credit-note/add')}>
                            <Plus size={16} /> Add Credit Note
                        </button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <div className="filter-selectors creditnote-filter-selectors">
                    <div className="filter-group">
                        <div className="select-wrapper">
                            <select className="select-input">
                                <option>This Month</option>
                            </select>
                            <ChevronDown size={14} className="select-icon-pointer" />
                        </div>
                    </div>

                    <div className="filter-group">
                        <span className="creditnote-between">Between</span>
                        <div className="date-wrapper payment-date-range">
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

                    <div className="filter-group">
                        <div className="select-wrapper creditnote-type-select">
                            <select className="select-input">
                                <option>Credit Note</option>
                            </select>
                            <ChevronDown size={14} className="select-icon-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table creditnote-table-wrap">
                <div className="table-header service-table-header account-table-header ss-tab">
                    <div className="creditnote-header-left">

                    </div>
                    <div className="table-actions">
                        <button className="table-action-btn"><Search size={16} color="#64748b" /></button>
                        <button className="table-action-btn"><Filter size={16} color="#64748b" /></button>
                        <button className="table-action-btn"><Printer size={16} color="#22c55e" /></button>
                        <button className="table-action-btn"><Download size={16} color="#3b82f6" /></button>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table">
                        <thead>
                            <tr>
                                {['Date', 'Ref. no.', 'Party Name', 'Category Name', 'Type', 'Total', 'Received/Paid', 'Balance'].map((col) => (
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
                                    <td>{row.partyName}</td>
                                    <td>{row.categoryName}</td>
                                    <td>{row.type}</td>
                                    <td>{row.total}</td>
                                    <td>{row.receivedPaid}</td>
                                    <td>{row.balance}</td>
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

                <div className="creditnote-footer-total">
                    <span>Total Amount: <strong>₹ 20,000.00</strong></span>
                    <span>Balance: <strong>₹ 0.00</strong></span>
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
        </div>
    );
};

export default AccountCreditNotePage;