import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical, Filter, Printer, Download } from 'lucide-react';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServiceMechanicStockAssignPage.css';
import AssignStockModal from '../components/AssignStockModal';
import ReturnStockModal from '../components/ReturnStockModal';

const ServiceMechanicStockAssignPage = () => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [openStockId, setOpenStockId] = useState(null);
    const [stockAnchor, setStockAnchor] = useState(null);
    const [isAssignStockOpen, setIsAssignStockOpen] = useState(false);
    const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const columns = [
        'Sl No',
        'Assign Date',
        'Machanic Name',
        'Total Assign Stock',
        'Sale Stock',
        'Return Stock',
        'Current Stock',
        'Return Entry',
        'Action',
    ];

    const rows = [
        {
            id: 1,
            assignDate: '20/03/2025',
            mechanic: 'VADU SAREN',
            totalAssign: 7,
            saleStock: 5,
            returnStock: 2,
            currentStock: 0,
            stockItems: [
                { name: 'FULL PPE ASSY', qty: 1 },
                { name: 'SPIRAL SPRING', qty: 2 },
                { name: 'FUEL TANK CAP', qty: 3 },
                { name: 'GEAR OIL', qty: 1 },
            ],
        },
        {
            id: 2,
            assignDate: '20/03/2025',
            mechanic: 'CHANDI PATRA',
            totalAssign: 3,
            saleStock: 1,
            returnStock: 1,
            currentStock: 1,
            stockItems: [
                { name: 'FUEL TANK CAP', qty: 1 },
                { name: 'GEAR OIL', qty: 1 },
            ],
        },
        {
            id: 3,
            assignDate: '20/03/2025',
            mechanic: 'UTPAL MAKUR',
            totalAssign: 10,
            saleStock: 5,
            returnStock: 2,
            currentStock: 3,
            stockItems: [
                { name: 'FULL PPE ASSY', qty: 2 },
                { name: 'SPIRAL SPRING', qty: 1 },
                { name: 'FUEL TANK CAP', qty: 2 },
                { name: 'GEAR OIL', qty: 1 },
            ],
        },
        {
            id: 4,
            assignDate: '20/03/2025',
            mechanic: 'SANDIP SINGH',
            totalAssign: 10,
            saleStock: 10,
            returnStock: 0,
            currentStock: 0,
            stockItems: [
                { name: 'FULL PPE ASSY', qty: 2 },
                { name: 'SPIRAL SPRING', qty: 1 },
                { name: 'FUEL TANK CAP', qty: 2 },
            ],
        },
        {
            id: 5,
            assignDate: '20/03/2025',
            mechanic: 'DIPU DULEY',
            totalAssign: 10,
            saleStock: 3,
            returnStock: 0,
            currentStock: 7,
            stockItems: [
                { name: 'FULL PPE ASSY', qty: 1 },
                { name: 'SPIRAL SPRING', qty: 2 },
                { name: 'FUEL TANK CAP', qty: 3 },
                { name: 'GEAR OIL', qty: 1 },
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
            if (event.target.closest('.stock-popup')) return;
            setOpenActionId(null);
            setOpenStockId(null);
        };

        const handleScroll = () => {
            setOpenActionId(null);
            setOpenStockId(null);
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
                        <button className="btn btn-new-service">+ New Service Booking</button>
                        <button className="btn btn-sale">+ Add Sale</button>
                        <button className="btn btn-purchase">+ Add Purchase</button>
                        <button className="btn-icon"><Plus size={18} /></button>
                        <button className="btn-icon muted"><MoreVertical size={18} /></button>
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Machanic Stock Assign</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>

                    <div className="filter-row-right">
                        <button className="btn btn-primary btn-assign-stock" onClick={() => setIsAssignStockOpen(true)}>Assign Stock</button>
                        <button className="btn-settings">
                            <Settings size={18} color="#64748b" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="ms-summary-card">
                <div className="service-stat-card tone-green ms-summary-card-inner">
                    <div className="ms-summary-left">
                        <div className="ms-summary-title">Assigned Stock</div>
                        <div className="ms-summary-sub ms-summary-sub-secondary">Current Stock</div>
                    </div>
                    <span className="service-stat-divider" />
                    <div className="ms-summary-values">
                        <div className="ms-summary-value">40</div>
                        <div className="ms-summary-value ms-summary-value-secondary">25</div>
                    </div>
                </div>
            </div>

            <div className="table-container service-dashboard-table">
                <div className="table-header service-table-header">
                    <h3 className="table-title">Stocks</h3>
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
                                    <td className="ms-name">{row.mechanic}</td>
                                    <td>{row.totalAssign}</td>
                                    <td>{row.saleStock}</td>
                                    <td>{row.returnStock}</td>
                                    <td>
                                        <button
                                            className="ms-link"
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setOpenStockId(openStockId === row.id ? null : row.id);
                                                setStockAnchor(event.currentTarget.getBoundingClientRect());
                                            }}
                                        >
                                            {row.currentStock}
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="return-btn" 
                                            type="button"
                                            onClick={() => {
                                                setSelectedRow(row);
                                                setIsReturnModalOpen(true);
                                            }}
                                        >
                                            Return
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

            {openStockId && stockAnchor && createPortal(
                <div
                    className="stock-popup"
                    style={{
                        position: 'fixed',
                        ...(getMenuPosition(stockAnchor, 180, 180, 'left') || {}),
                    }}
                >
                    <div className="stock-popup-head">
                        <span>Item Name</span>
                        <span>Qty</span>
                    </div>
                    {rows.find((row) => row.id === openStockId)?.stockItems.map((item, idx) => (
                        <div key={`stock-${idx}`} className="stock-popup-row">
                            <span>{item.name}</span>
                            <span>{item.qty}</span>
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
                        ...(getMenuPosition(actionAnchor, 200, 170, 'right') || {}),
                    }}
                >
                    <button type="button" className="service-action-item">Assign New Stock</button>
                    <button type="button" className="service-action-item">Return Stock</button>
                    <button type="button" className="service-action-item">View / Edit Task</button>
                    <button type="button" className="service-action-item">History</button>
                    <button type="button" className="service-action-item">Share</button>
                </div>,
                document.body
            )}
            <AssignStockModal isOpen={isAssignStockOpen} onClose={() => setIsAssignStockOpen(false)} />
            <ReturnStockModal 
                isOpen={isReturnModalOpen} 
                onClose={() => setIsReturnModalOpen(false)} 
                mechanicName={selectedRow?.mechanic}
            />
        </div>
    );
};

export default ServiceMechanicStockAssignPage;
