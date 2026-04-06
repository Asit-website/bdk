import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServiceMaterialIssuePage.css';

const ServiceMaterialIssuePage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);

    const columns = [
        'Sl No',
        'Issue No',
        'Job No',
        'Job Date',
        'Customer Name',
        'Chassis No',
        'Machanic Name',
        'Job Location',
        'Prepared By',
        'Action',
    ];

    const rows = [
        { id: 1, issueNo: '256', jobNo: '403', jobDate: '22/02/2025', customer: 'BIKASH MAITY', chassis: 'WZ505SHR1233', mechanic: 'CHANDI PATRA', location: 'WORKSHOP', prepared: 'SUJOY HANSDA' },
        { id: 2, issueNo: '256', jobNo: '403', jobDate: '22/02/2025', customer: 'BIKASH MAITY', chassis: 'WZ505SHR1233', mechanic: 'UTPAL MAKUR', location: 'WORKSHOP', prepared: 'SUJOY HANSDA' },
        { id: 3, issueNo: '256', jobNo: '403', jobDate: '22/02/2025', customer: 'AKSH DEY', chassis: 'WZ505SHR1233', mechanic: 'SANDIP SINGH', location: 'SHOP', prepared: 'SUJOY HANSDA' },
        { id: 4, issueNo: '256', jobNo: '403', jobDate: '22/02/2025', customer: 'NIRMAL RAY', chassis: 'WZ505SHR1233', mechanic: 'CHANDI PATRA', location: 'SHOP', prepared: 'SUJOY HANSDA' },
        { id: 5, issueNo: '256', jobNo: '403', jobDate: '22/02/2025', customer: 'RAJU MANNA', chassis: 'WZ505SHR1233', mechanic: 'VADU SAREN', location: 'WORKSHOP', prepared: 'SUJOY HANSDA' },
        { id: 6, issueNo: '256', jobNo: '403', jobDate: '22/02/2025', customer: 'BIKASH MAITY', chassis: 'WZ505SHR1233', mechanic: 'DIPU DULEY', location: 'SHOP', prepared: 'SUJOY HANSDA' },
    ];

    const getMenuPosition = (anchorRect, menuHeight, menuWidth, align = 'right') => {
        if (!anchorRect) return null;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const spaceBelow = viewportHeight - anchorRect.bottom;
        const openAbove = spaceBelow < menuHeight + 12;

        let top = openAbove
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
                        <h2>Material Issue</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>

                    <div className="filter-row-right">
                        <button
                            className="btn btn-primary btn-add-material"
                            onClick={() => navigate('/service/material-issue/add')}
                        >
                            + Add Material Issue
                        </button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="material-summary-card">
                <div className="service-stat-card tone-green material-summary-card-inner">
                    <div className="material-summary-left">
                        <div className="material-summary-title">Open Job Card</div>
                        <div className="material-summary-sub material-summary-sub-secondary">Material Issued</div>
                    </div>
                    <span className="service-stat-divider" />
                    <div className="material-summary-values">
                        <div className="material-summary-value">10</div>
                        <div className="material-summary-value material-summary-value-secondary">7</div>
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table">
                <div className="table-header service-table-header">
                    <h3 className="table-title">Job Card</h3>
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
                                    <td>{row.issueNo}</td>
                                    <td>{row.jobNo}</td>
                                    <td>{row.jobDate}</td>
                                    <td>{row.customer}</td>
                                    <td>{row.chassis}</td>
                                    <td>{row.mechanic}</td>
                                    <td>{row.location}</td>
                                    <td>{row.prepared}</td>
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
                    <button type="button" className="service-action-item">Share</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ServiceMaterialIssuePage;
