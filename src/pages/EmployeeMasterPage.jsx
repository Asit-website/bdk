import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download } from 'lucide-react';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './EmployeeMasterPage.css';

const EmployeeMasterPage = () => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);

    const columns = [
        'Sl No',
        'Employee Name',
        'Mobile No',
        'Designation',
        'Joining Date',
        'Working Location',
        'Login Id',
        'Status',
        'Action',
    ];

    const rows = [
        { id: 1, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'ACTIVE' },
        { id: 2, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'ACTIVE' },
        { id: 3, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'ACTIVE' },
        { id: 4, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'INACTIVE' },
        { id: 5, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'ACTIVE' },
        { id: 6, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'INACTIVE' },
        { id: 7, name: 'BABURAM HEMBRAM', mobile: '555555555', designation: 'DRIVER', joiningDate: '27/12/2025', location: 'WORKSHOP', loginId: 'BABU1234', status: 'ACTIVE' },
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
            if (event.target.closest('.action-dots')) return;
            if (event.target.closest('.service-action-menu')) return;
            setOpenActionId(null);
        };

        const handleScroll = () => {
            setOpenActionId(null);
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
                        <button className="btn btn-new-service">+ Add New Service</button>
                        <button className="btn btn-sale">+ Add Sale</button>
                        <button className="btn btn-purchase">+ Add Purchase</button>
                        <button className="btn-icon"><Plus size={18} /></button>
                        <button className="btn-icon muted"><MoreVertical size={18} /></button>
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Employee Master</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>

                    <div className="filter-row-right">
                        <button className="btn btn-primary btn-add-employee">+ Add New Employee</button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table">
                <div className="table-header service-table-header">
                    <h3 className="table-title">Employee List</h3>
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
                                    <td className="ma-bold">{row.name}</td>
                                    <td>{row.mobile}</td>
                                    <td>{row.designation}</td>
                                    <td>{row.joiningDate}</td>
                                    <td>{row.location}</td>
                                    <td className="ma-bold">{row.loginId}</td>
                                    <td>
                                        <span className={`status-badge ${row.status.toLowerCase()}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="action-cell">
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
                        ...(getMenuPosition(actionAnchor, 260, 200, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">View / Edit</button>
                    <button type="button" className="service-action-item">Update</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                    <button type="button" className="service-action-item">Attendance Details</button>
                    <button type="button" className="service-action-item">Salary Details</button>
                    <button type="button" className="service-action-item">Leave & Balance Details</button>
                    <button type="button" className="service-action-item">Penalty & Overtime Details</button>
                </div>,
                document.body
            )}
        </div>
    );
};

export default EmployeeMasterPage;
