import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, MoreVertical, Filter, Printer, Download, ChevronsUpDown, Share2, Settings } from 'lucide-react';
import PartyTransferModal from '../components/PartyTransferModal';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './AccountPartyTransferPage.css';

const AccountPartyTransferPage = () => {
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [openTransferModal, setOpenTransferModal] = useState(false);
    const [startDate, setStartDate] = useState('2026-03-01');
    const [endDate, setEndDate] = useState('2026-03-31');

    const rows = [
        {
            id: 1,
            slNo: '1',
            date: '22/03/2026',
            refNo: '25',
            paidBy: 'CHANDI PATRA',
            receiveBy: 'SOMNATH MURMU',
            amount: '₹ 500.00',
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
                        <h2>Party To Party Transfer</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                    <div className="filter-row-right">
                        <button className="btn btn-primary btn-add-transaction" onClick={() => setOpenTransferModal(true)}><Plus size={14} /> Add Transaction</button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <div className="filter-selectors creditnote-filter-selectors transfer-filter-row">
                    <div className="filter-group">
                        <div className="select-wrapper">
                            <select className="select-input">
                                <option>This Month</option>
                            </select>
                            <ChevronDown size={14} className="select-icon-pointer" />
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="select-wrapper transfer-type-select">
                            <select className="select-input">
                                <option>Party To Party Transfer</option>
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
                                {['Sl No', 'Date', 'Ref No', 'Paid By', 'Receive By', 'Amount'].map((col) => (
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
                            {rows.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.slNo}</td>
                                    <td>{row.date}</td>
                                    <td>{row.refNo}</td>
                                    <td>{row.paidBy}</td>
                                    <td>{row.receiveBy}</td>
                                    <td>{row.amount}</td>
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
                    <span>Total Amount: <strong>₹ 890.00</strong></span>
                    <span>Balance: <strong>₹ 890.00</strong></span>
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

            {openTransferModal && (
                <PartyTransferModal closeModal={() => setOpenTransferModal(false)} />
            )}
        </div>
    );
};

export default AccountPartyTransferPage;