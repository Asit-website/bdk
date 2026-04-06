import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, ChevronDown, Calendar, MoreVertical, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './EmployeeAbsentPage.css';

const EmployeeAbsentPage = () => {
    const navigate = useNavigate();
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);

    const rows = [
        { id: 1, name: 'SUDHIR MURMU', inTime: '', outTime: '', comment: '' },
        { id: 2, name: 'CHANDI PATRA', inTime: '', outTime: '', comment: '' },
        { id: 3, name: 'VADU SAREN', inTime: '', outTime: '', comment: '' },
        { id: 4, name: 'KUSH PATRA', inTime: '', outTime: '', comment: '' },
        { id: 5, name: 'UTPAL MAKUR', inTime: '', outTime: '', comment: '' },
        { id: 6, name: 'SANDIP SINGH', inTime: '', outTime: '', comment: '' },
        { id: 7, name: 'CHANDAN MANDI', inTime: '', outTime: '', comment: '' },
    ];

    const getMenuPosition = (anchorRect, menuHeight, menuWidth) => {
        if (!anchorRect) return null;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const spaceBelow = viewportHeight - anchorRect.bottom;
        const openAbove = spaceBelow < menuHeight + 12;

        const top = openAbove
            ? Math.max(anchorRect.top - menuHeight - 8, 12)
            : anchorRect.bottom + 8;

        let left = anchorRect.right - menuWidth;
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
            <div className="filters-section service-dashboard-filters employee-attendance-filters">
                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Abesent</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                </div>
            </div>

            <div className="absent-card-strip">
                <div className="employee-stat-card tone-red absent-single-card">
                    <div className="employee-stat-top">
                        <span className="employee-stat-value">21</span>
                        <Eye size={16} />
                    </div>
                    <span className="employee-stat-title">Abesent</span>
                </div>
            </div>

            <div className="table-container service-dashboard-table employee-attendance-table-wrap">
                <div className="table-header service-table-header">
                    <div className="service-table-toolbar employee-toolbar">
                        <div className="service-table-filters employee-table-filters">
                            <div className="select-wrapper">
                                <select className="select-input">
                                    <option>TODAY</option>
                                </select>
                                <ChevronDown size={14} className="select-icon-pointer" />
                            </div>
                            <div className="date-wrapper employee-date-range">
                                <Calendar size={14} color="#64748b" />
                                <span>01/02/2026</span>
                                <span className="date-separator">To</span>
                                <span>28/02/2026</span>
                            </div>
                        </div>
                        <div className="employee-header-search">
                            <Search size={14} color="#94a3b8" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table employee-attendance-table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Employee Name</th>
                                <th>Punch In Time</th>
                                <th>Punch Out Time</th>
                                <th>Comment</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="employee-name-cell">
                                            <span className="employee-avatar-dot" />
                                            <button
                                                type="button"
                                                className="employee-name-btn"
                                                onClick={() => navigate('/employee/profile', { state: { employee: row, from: '/employee/attendance/absent' } })}
                                            >
                                                {row.name}
                                            </button>
                                        </div>
                                    </td>
                                    <td>{row.inTime}</td>
                                    <td>{row.outTime}</td>
                                    <td>{row.comment}</td>
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
                        ...(getMenuPosition(actionAnchor, 210, 170) || {}),
                    }}
                >
                    <button type="button" className="service-action-item">View / Edit</button>
                    <button type="button" className="service-action-item">Update</button>
                    <button type="button" className="service-action-item">History</button>
                    <button type="button" className="service-action-item">Share</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                </div>,
                document.body
            )}
        </div>
    );
};

export default EmployeeAbsentPage;