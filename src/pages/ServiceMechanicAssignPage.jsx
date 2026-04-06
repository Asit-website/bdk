import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download } from 'lucide-react';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServiceMechanicAssignPage.css';
import AssignMechanicModal from '../components/AssignMechanicModal';
import MechanicAssignUpdateModal from '../components/MechanicAssignUpdateModal';
import MechanicTaskPopup from '../components/MechanicTaskPopup';
import MechanicTaskDetailModal from '../components/MechanicTaskDetailModal';

const ServiceMechanicAssignPage = () => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openActionId, setOpenActionId] = useState(null);
    const [openCategoryId, setOpenCategoryId] = useState(null);
    const [openAreaId, setOpenAreaId] = useState(null);
    const [openTotalId, setOpenTotalId] = useState(null);
    const [openPendingId, setOpenPendingId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [categoryAnchor, setCategoryAnchor] = useState(null);
    const [areaAnchor, setAreaAnchor] = useState(null);
    const [totalAnchor, setTotalAnchor] = useState(null);
    const [pendingAnchor, setPendingAnchor] = useState(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);
    const [taskPopupAnchor, setTaskPopupAnchor] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);

    const columns = [
        'Sl No',
        'Assign Date',
        'Service Category',
        'Machanic Name',
        'Area',
        'Total Task',
        'Pending Task',
        'Action',
    ];

    const rows = [
        {
            id: 1,
            assignDate: '20/03/2025',
            categories: ['Demo', 'Service', 'Installation'],
            mechanic: 'VADU SAREN',
            areas: ['DHADIKA', 'AMLAGORA', 'GARHBETA'],
            totalTasks: [
                { name: 'ASIT SAHU', village: 'MAYTA', count: 1 },
                { name: 'BIKASH DE', village: 'CHADIKA', count: 2 },
                { name: 'RAM MANDI', village: 'DHADIKA', count: 3 },
                { name: 'AKSHI MAITY', village: 'NEREALDI', count: 4 },
            ],
            pendingTasks: [
                { name: 'ASIT SAHU', village: 'MAYTA', count: 1 },
                { name: 'BIKASH DE', village: 'CHADIKA', count: 2 },
                { name: 'RAM MANDI', village: 'DHADIKA', count: 3 },
            ],
        },
        {
            id: 2,
            assignDate: '20/03/2025',
            categories: ['Service', 'Installation'],
            mechanic: 'CHANDI PATRA',
            areas: ['DHADIKA', 'AMLAGORA'],
            totalTasks: [
                { name: 'ASIT SAHU', village: 'MAYTA', count: 1 },
                { name: 'BIKASH DE', village: 'CHADIKA', count: 2 },
            ],
            pendingTasks: [
                { name: 'ASIT SAHU', village: 'MAYTA', count: 1 },
            ],
        },
        {
            id: 3,
            assignDate: '20/03/2025',
            categories: ['Service'],
            mechanic: 'UTPAL MAKUR',
            areas: ['GARHBETA'],
            totalTasks: [
                { name: 'RAM MANDI', village: 'DHADIKA', count: 3 },
            ],
            pendingTasks: [
                { name: 'RAM MANDI', village: 'DHADIKA', count: 3 },
            ],
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
            if (event.target.closest('.ma-popup')) return;
            setOpenActionId(null);
            setOpenCategoryId(null);
            setOpenAreaId(null);
            setOpenTotalId(null);
            setOpenPendingId(null);
        };

        const handleScroll = () => {
            setOpenActionId(null);
            setOpenCategoryId(null);
            setOpenAreaId(null);
            setOpenTotalId(null);
            setOpenPendingId(null);
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
                        <h2>Machanic Assign</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>

                    <div className="filter-row-right">
                        <button className="btn btn-primary btn-assign-mechanic" onClick={() => setIsAssignModalOpen(true)}>Assign Machanic</button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="ma-summary-card">
                <div className="service-stat-card tone-green ma-summary-card-inner">
                    <span className="service-stat-title">Total Machanic Assigned</span>
                    <span className="service-stat-divider" />
                    <span className="service-stat-value">5</span>
                </div>
            </div>

            <div className="table-container service-dashboard-table">
                <div className="table-header service-table-header">
                    <h3 className="table-title">Task</h3>
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
                                    <td>{row.assignDate}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="ma-view"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setOpenCategoryId(openCategoryId === row.id ? null : row.id);
                                                setCategoryAnchor(event.currentTarget.getBoundingClientRect());
                                                setOpenAreaId(null);
                                                setOpenTotalId(null);
                                                setOpenPendingId(null);
                                            }}
                                        >
                                            view
                                        </button>
                                    </td>
                                    <td className="ma-bold">{row.mechanic}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="ma-view"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setOpenAreaId(openAreaId === row.id ? null : row.id);
                                                setAreaAnchor(event.currentTarget.getBoundingClientRect());
                                                setOpenCategoryId(null);
                                                setOpenTotalId(null);
                                                setOpenPendingId(null);
                                            }}
                                        >
                                            view
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="ma-count"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setOpenTotalId(openTotalId === row.id ? null : row.id);
                                                setTotalAnchor(event.currentTarget.getBoundingClientRect());
                                                setOpenCategoryId(null);
                                                setOpenAreaId(null);
                                                setOpenPendingId(null);
                                            }}
                                        >
                                            {row.totalTasks.reduce((sum, item) => sum + item.count, 0)}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="ma-count"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setOpenPendingId(openPendingId === row.id ? null : row.id);
                                                setPendingAnchor(event.currentTarget.getBoundingClientRect());
                                                setOpenCategoryId(null);
                                                setOpenAreaId(null);
                                                setOpenTotalId(null);
                                            }}
                                        >
                                            {row.pendingTasks.reduce((sum, item) => sum + item.count, 0)}
                                        </button>
                                    </td>
                                    <td className="action-cell">
                                        <div className="service-action-wrap">
                                            <button
                                                type="button"
                                                className={`action-dots ${openActionId === row.id ? 'active' : ''}`}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setOpenActionId(openActionId === row.id ? null : row.id);
                                                    setActionAnchor(event.currentTarget.getBoundingClientRect());
                                                    setOpenCategoryId(null);
                                                    setOpenAreaId(null);
                                                    setOpenTotalId(null);
                                                    setOpenPendingId(null);
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

            {openCategoryId && categoryAnchor && createPortal(
                <div
                    className="ma-popup"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(categoryAnchor, 140, 160, 'left') || {}),
                    }}
                >
                    <div className="ma-popup-header">Category</div>
                    {rows.find((row) => row.id === openCategoryId)?.categories.map((item, idx) => (
                        <div key={`cat-${idx}`} className="ma-popup-row">
                            <span>{item}</span>
                            <span>{idx + 1}</span>
                        </div>
                    ))}
                </div>,
                document.body
            )}

            {openAreaId && areaAnchor && createPortal(
                <div
                    className="ma-popup"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(areaAnchor, 120, 160, 'left') || {}),
                    }}
                >
                    <div className="ma-popup-header">Area</div>
                    {rows.find((row) => row.id === openAreaId)?.areas.map((item, idx) => (
                        <div key={`area-${idx}`} className="ma-popup-row">
                            <span>{idx + 1}. {item}</span>
                        </div>
                    ))}
                </div>,
                document.body
            )}

            {openTotalId && totalAnchor && createPortal(
                <div
                    className="ma-popup wide"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(totalAnchor, 200, 220, 'left') || {}),
                    }}
                >
                    <div className="ma-popup-header-grid">
                        <span>Sl</span>
                        <span>Name</span>
                        <span>Village</span>
                    </div>
                    {rows.find((row) => row.id === openTotalId)?.totalTasks.map((item, idx) => (
                        <div 
                            key={`total-${idx}`} 
                            className="ma-popup-row-grid clickable"
                            onClick={() => {
                                setSelectedTask(item);
                                setIsDetailModalOpen(true);
                                setOpenTotalId(null);
                            }}
                        >
                            <span>{idx + 1}</span>
                            <span className="ma-popup-name">{item.name}</span>
                            <span>{item.village}</span>
                        </div>
                    ))}
                </div>,
                document.body
            )}

            {openPendingId && pendingAnchor && createPortal(
                <div
                    className="ma-popup wide"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(pendingAnchor, 200, 220, 'left') || {}),
                    }}
                >
                    <div className="ma-popup-header-grid">
                        <span>Sl</span>
                        <span>Name</span>
                        <span>Village</span>
                    </div>
                    {rows.find((row) => row.id === openPendingId)?.pendingTasks.map((item, idx) => (
                        <div key={`pending-${idx}`} className="ma-popup-row-grid">
                            <span>{idx + 1}</span>
                            <span>{item.name}</span>
                            <span>{item.village}</span>
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
                        ...(getMenuPosition(actionAnchor, 240, 190, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">Assign New Task</button>
                    <button 
                        type="button" 
                        className="service-action-item"
                        onClick={() => {
                            const row = rows.find(r => r.id === openActionId);
                            setSelectedRow(row);
                            setTaskPopupAnchor(actionAnchor);
                            setIsTaskPopupOpen(true);
                            setOpenActionId(null);
                        }}
                    >
                        Update
                    </button>
                    <button type="button" className="service-action-item">View / Edit Task</button>
                    <button type="button" className="service-action-item">History</button>
                    <button type="button" className="service-action-item">Share</button>
                    <button type="button" className="service-action-item danger">Delete</button>
                </div>,
                document.body
            )}
            <AssignMechanicModal isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} />
            <MechanicAssignUpdateModal 
                isOpen={isUpdateModalOpen} 
                onClose={() => setIsUpdateModalOpen(false)} 
                rowData={selectedRow}
            />

            <MechanicTaskPopup 
                isOpen={isTaskPopupOpen}
                anchorRect={taskPopupAnchor}
                onClose={() => setIsTaskPopupOpen(false)}
                onSelect={(task) => {
                    setIsUpdateModalOpen(true);
                    // Optionally update selectedRow with specific task data
                }}
            />

            <MechanicTaskDetailModal 
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                taskData={selectedTask}
            />
        </div>
    );
};

export default ServiceMechanicAssignPage;
