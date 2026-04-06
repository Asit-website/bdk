import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download } from 'lucide-react';
import AddServiceModal from '../components/AddServiceModal';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServicePendingPage.css';

const ServicePendingPage = () => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openActionId, setOpenActionId] = useState(null);
    const [openProblemId, setOpenProblemId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [problemAnchor, setProblemAnchor] = useState(null);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

    const columns = [
        'Sl No',
        'Booking Date',
        'Service Category',
        'Customer Name',
        'Mobile No',
        'Village',
        'Area',
        'Block',
        'Problem',
        'Service Type',
        'Working Date',
        'Status',
        'Machanic',
    ];

    const rows = [
        {
            id: 1,
            bookingDate: '20/03/2025',
            category: 'Demo',
            customer: 'SERMA HEMBRAM',
            mobile: '9632547852',
            village: 'METALA',
            area: 'GOALTORE',
            block: 'TALDANGRA',
            problem: 'view',
            serviceType: 'FREE',
            Machanic: 'VADU SAREN',
            workingDate: '24/03/2025',
            status: 'PENDING',
            problems: ['Starting Problem', 'Fuel Filter', 'Gear Oil Leakage', 'Crank Pin Bearing', 'Steering Handle', 'Clutch Not Working'],
        },
        {
            id: 2,
            bookingDate: '20/03/2025',
            category: 'Service',
            customer: 'SERMA HEMBRAM',
            mobile: '9632547852',
            village: 'METALA',
            area: 'AMLASULI',
            block: 'TALDANGRA',
            problem: 'view',
            serviceType: 'PAID',
            Machanic: 'VADU SAREN',
            workingDate: '24/03/2025',
            status: 'PENDING',
            problems: ['Starting Problem', 'Fuel Filter', 'Gear Oil Leakage', 'Crank Pin Bearing', 'Steering Handle', 'Clutch Not Working'],
        },
        {
            id: 3,
            bookingDate: '20/03/2025',
            category: 'Service',
            customer: 'SERMA HEMBRAM',
            mobile: '9632547852',
            village: 'METALA',
            area: 'TALDANGRA',
            block: 'TALDANGRA',
            problem: 'view',
            serviceType: 'FREE',
            Machanic: 'VADU SAREN',
            workingDate: '24/03/2025',
            status: 'PENDING',
            problems: ['Starting Problem', 'Fuel Filter', 'Gear Oil Leakage', 'Crank Pin Bearing', 'Steering Handle', 'Clutch Not Working'],
        },
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
            if (event.target.closest('.service-problem-wrap')) return;
            if (event.target.closest('.service-action-menu')) return;
            if (event.target.closest('.service-problem-menu')) return;
            setOpenActionId(null);
            setOpenProblemId(null);
        };

        const handleScroll = () => {
            setOpenActionId(null);
            setOpenProblemId(null);
        };

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
                        <h2>Pending Service</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>

                    <div className="filter-row-right">
                        <button className="btn btn-primary btn-add-service" onClick={() => setIsServiceModalOpen(true)}>+ Add Service</button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="pending-summary-card">
                <div className="service-stat-card tone-red pending-summary-card-inner">
                    <span className="service-stat-title">Total Pending Service</span>
                    <span className="service-stat-divider" />
                    <span className="service-stat-value">9,000</span>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.bookingDate}</td>
                                    <td>{row.category}</td>
                                    <td>{row.customer}</td>
                                    <td>{row.mobile}</td>
                                    <td>{row.village}</td>
                                    <td>{row.area}</td>
                                    <td>{row.block}</td>
                                    <td className="service-problem-cell">
                                        <div className="service-problem-wrap">
                                            <button
                                                type="button"
                                                className="service-problem"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setOpenProblemId(openProblemId === row.id ? null : row.id);
                                                    setProblemAnchor(event.currentTarget.getBoundingClientRect());
                                                    setOpenActionId(null);
                                                }}
                                            >
                                                view
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`service-type ${row.serviceType === 'PAID' ? 'paid' : 'free'}`}>
                                            {row.serviceType}
                                        </span>
                                    </td>
                                    <td>{row.workingDate}</td>
                                    <td>
                                        <span className="service-status pending">PENDING</span>
                                    </td>
                                    <td>{row.Machanic}</td>
                                    <td className="action-cell">
                                        <div className="service-action-wrap">
                                            <button
                                                type="button"
                                                className={`action-dots ${openActionId === row.id ? 'active' : ''}`}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setOpenActionId(openActionId === row.id ? null : row.id);
                                                    setActionAnchor(event.currentTarget.getBoundingClientRect());
                                                    setOpenProblemId(null);
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

            {openProblemId && problemAnchor && createPortal(
                <div
                    className="service-problem-menu"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(problemAnchor, 210, 220, 'left') || {}),
                    }}
                >
                    {rows.find((row) => row.id === openProblemId)?.problems.map((problem, idx) => (
                        <div key={`problem-${idx}`} className="service-problem-item">
                            {idx + 1}. {problem}
                        </div>
                    ))}
                </div>,
                document.body
            )}

            {openActionId && actionAnchor && createPortal(
                <div
                    className="service-action-menu"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(actionAnchor, 260, 190, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">Change Machnaic</button>
                    <button type="button" className="service-action-item">Update</button>
                    <button type="button" className="service-action-item">View / Edit</button>
                    <button type="button" className="service-action-item">History</button>
                    <button type="button" className="service-action-item">Share</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                    <button type="button" className="service-action-item">Reject</button>
                </div>,
                document.body
            )}

            <AddServiceModal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} />
        </div>
    );
};

export default ServicePendingPage;
