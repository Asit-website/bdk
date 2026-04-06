import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download } from 'lucide-react';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServiceWarrantyPage.css';
import SettlementModal from '../components/SettlementModal';

const ServiceWarrantyPage = () => {
    const [showSettlementModal, setShowSettlementModal] = useState(false);
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);

    const columns = [
        'Sl No',
        'Claim No',
        'Date',
        'Customer Name',
        'Model No',
        'Chassis No',
        'Engine No',
        'Machanic',
        'Prepared By',
        'Status',
        'Action',
    ];

    const rows = [
        { id: 1, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D6+', chassis: 'W2505SHR1233', engine: 'E2505SHR1233', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Pending' },
        { id: 2, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D6+', chassis: 'W2505SHR1233', engine: 'E2505SHR1233', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Pending' },
        { id: 3, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D6+', chassis: 'W2505SHR1233', engine: 'E2505SHR1233', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Pending' },
        { id: 4, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D6+', chassis: 'W2505SHR1233', engine: 'E2505SHR1233', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Pending' },
        { id: 5, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D5+', chassis: 'W2505SHR1234', engine: 'E2505SHR1234', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Settled' },
        { id: 6, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D5+', chassis: 'W2505SHR1234', engine: 'E2505SHR1234', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Settled' },
        { id: 7, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D5+', chassis: 'W2505SHR1234', engine: 'E2505SHR1234', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Settled' },
        { id: 8, claimNo: '256', date: '22/02/2025', customer: 'AKSH KOLEY', model: '9D5+', chassis: 'W2505SHR1234', engine: 'E2505SHR1234', mechanic: 'CHANDI PATRA', preparedBy: 'SUJOY HANSDA', status: 'Settled' },
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
                        <button className="btn btn-new-service">+ Add New Service</button>
                        <button className="btn btn-sale">+ Add Sale</button>
                        <button className="btn btn-purchase">+ Add Purchase</button>
                        <button className="btn-icon"><Plus size={18} /></button>
                        <button className="btn-icon muted"><MoreVertical size={18} /></button>
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Warranty</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                    <div className="filter-row-right">
                        <button
                            className="btn btn-primary btn-add-material"
                            onClick={() => setShowSettlementModal(true)}
                        >
                            <Plus size={18} /> Add Settlement
                        </button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="material-summary-card">
                <div className="service-stat-card tone-green warranty-summary-card-inner">
                    <div className="warranty-stat-item">
                        <div className="material-summary-title">TOTAL CLAIM</div>
                        <div className="material-summary-value">10</div>
                    </div>
                    <span className="service-stat-divider" />
                    <div className="warranty-stat-item">
                        <div className="material-summary-title">SETTLEMENT</div>
                        <div className="material-summary-value">7</div>
                    </div>
                    <span className="service-stat-divider" />
                    <div className="warranty-stat-item">
                        <div className="material-summary-title">PENDING</div>
                        <div className="material-summary-value">3</div>
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table">
                <div className="table-header service-table-header">
                    <h3 className="table-title">Closed Bill</h3>
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
                                <input type="text" className="date-input-hidden" value="01/02/2026 To 28/02/2026" readOnly />
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
                                    <td>{row.claimNo}</td>
                                    <td>{row.date}</td>
                                    <td>{row.customer}</td>
                                    <td>{row.model}</td>
                                    <td>{row.chassis}</td>
                                    <td>{row.engine}</td>
                                    <td>{row.mechanic}</td>
                                    <td>{row.preparedBy}</td>
                                    <td className={row.status === 'Settled' ? 'warranty-status-settled' : 'warranty-status-pending'}>{row.status}</td>
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
                        ...(getMenuPosition(actionAnchor, 220, 190, 'right') || {}),
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

            {showSettlementModal && <SettlementModal closeModal={() => setShowSettlementModal(false)} />}
        </div>
    );
};

export default ServiceWarrantyPage;
