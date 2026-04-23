import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreVertical, MoreHorizontal, ChevronDown, Filter, Download, Printer, Eye, Trash2, History, FileText, Settings, Calendar, Share2, ChevronsUpDown } from 'lucide-react';
import './StockTransferOutPage.css';
import '../components/QuotationTable.css';
import '../components/QuotationStats.css';
import StockTransferActionMenu from '../components/StockTransferActionMenu';
import StockTransferDetailsModal from '../components/StockTransferDetailsModal';

const StockTransferOutPage = () => {
    const navigate = useNavigate();
    const [actionMenu, setActionMenu] = useState({ isOpen: false, anchorRect: null });
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedTransfer, setSelectedTransfer] = useState(null);

    const toggleActionMenu = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setActionMenu({
            isOpen: !actionMenu.isOpen,
            anchorRect: rect
        });
    };

    const handleTransferClick = (row) => {
        setSelectedTransfer(row);
        setIsDetailModalOpen(true);
    };

    const transactions = [
        {
            sl: 1,
            date: '23/03/2026',
            no: '255',
            from: 'WORKSHOP',
            to: 'MAIN BRANCH',
            supervisorName: 'SWARUP NAG',
            transportedBy: 'SOMANTAH MURMU',
            status: 'RECIVED'
        },
        {
            sl: 2,
            date: '12/02/2026',
            no: '212',
            from: 'SHOP',
            to: 'WORKSHOP',
            supervisorName: 'SUJOY HANSDA',
            transportedBy: 'BABURAM HEMBRAM',
            status: 'PENDING'
        }
    ];

    return (
        <div className="page-container">
            <div className="sto-container-main">
                {/* 3-Tier Unified Filter Card - Matching SS2 Exactly */}
                <div className="quotation-filters-container">
                    {/* Row 1: Search & Secondary Actions */}
                    <div className="filter-top-bar">
                        <div className="search-transactions">
                            <Search size={16} color="#64748b" />
                            <input type="text" placeholder="Search Transactions" />
                        </div>

                        <div className="filter-actions-group">
                            <button className="btn-secondary sale">+ Add Sale</button>
                            <button className="btn-secondary purchase">+ Add Purchase</button>
                            <button className="btn-icon-blue"><Plus size={18} /></button>
                            <button className="btn-icon-gray"><MoreHorizontal size={18} /></button>
                        </div>
                    </div>

                    {/* Row 2: Title & Primary Action */}
                    <div className="filter-middle-bar">
                        <div className="quotation-title-group">
                            <h1 className="quotation-title">STOCK TRANSFER OUT</h1>
                            <ChevronDown size={22} className="title-chevron" />
                        </div>
                        <div className="quotation-actions-right">
                            <button className="btn-add-quotation-red" onClick={() => navigate('/sales/stock-transfer-out/add')}>
                                 Transfer New Stock
                            </button>
                            <button className="btn-settings-gray">
                                <Settings size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Row 3: Filter Selectors Bar */}
                    <div className="filters-selectors-bar">
                        <div className="filter-group">
                            <span className="filter-label">Filter by :</span>
                            <div className="filter-dropdown">
                                <span>This Month</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                        <div className="filter-group">
                            <div className="date-wrapper">
                                <Calendar size={14} color="#64748b" />
                                <input type="date" value="2026-03-01" className="date-input-hidden" readOnly />
                                <span className="date-separator">To</span>
                                <input type="date" value="2026-03-31" className="date-input-hidden" readOnly />
                            </div>
                        </div>
                        <div className="filter-group">
                            <div className="filter-dropdown min-w-110">
                                <span>All Branch</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                        <div className="filter-group">
                            <div className="filter-dropdown min-w-120">
                                <span>All Users</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="quotation-stats-container">
                    <div className="stat-card">
                        <div className="stat-info">
                            <div className="stat-header">
                                <span className="stat-label">Total Transferred Stock</span>
                                <div className="stat-percent">
                                    <span>100%</span>
                                    <span>↗</span>
                                </div>
                            </div>
                            <div className="stat-main-box">
                                <span className="stat-value">500</span>
                                <span className="stat-subtext">vs last month</span>
                            </div>
                        </div>
                        <div className="stat-icon-wrapper">
                            <div className="stat-icon-inner" style={{width: '24px', height: '24px', backgroundColor: '#ef4444', opacity: 0.1, borderRadius: '50%'}}></div>
                        </div>
                    </div>
                </div>

                {/* Transaction Table Section - Using standardized QuotationTable styles */}
                <div className="quotation-table-section">
                    <div className="table-header-toolbar">
                        <h3 className="section-title">Transactions</h3>
                        <div className="toolbar-actions">
                            <Search size={18} className="toolbar-icon" />
                            <Filter size={18} className="toolbar-icon" />
                            <Download size={18} className="toolbar-icon" />
                            <Printer size={18} className="toolbar-icon" />
                            <Share2 size={18} className="toolbar-icon" />
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table className="quotation-data-table">
                            <thead>
                                <tr>
                                    <th><div className="th-content">sl No. <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Date <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Transfer No <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Transfer From <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Transfer To <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Supervisor Name <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Transported By <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th><div className="th-content">Status <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                                    <th style={{ width: '50px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((row, idx) => (
                                    <tr key={idx}>
                                        <td>{row.sl}.</td>
                                        <td>{row.date}</td>
                                        <td>
                                            <span 
                                                className="product-view-link"
                                                onClick={() => handleTransferClick(row)}
                                            >
                                                {row.no}
                                            </span>
                                        </td>
                                        <td>{row.from}</td>
                                        <td>{row.to}</td>
                                        <td>{row.supervisorName}</td>
                                        <td>{row.transportedBy}</td>
                                        <td>
                                            <span className={`status-badge ${row.status.toLowerCase()}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="action-cell">
                                            <button 
                                                className="action-dots"
                                                onClick={toggleActionMenu}
                                            >
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <StockTransferActionMenu
                    isOpen={actionMenu.isOpen}
                    anchorRect={actionMenu.anchorRect}
                    onClose={() => setActionMenu({ ...actionMenu, isOpen: false })}
                />

                <StockTransferDetailsModal
                    isOpen={isDetailModalOpen}
                    onClose={() => setIsDetailModalOpen(false)}
                    data={selectedTransfer}
                />
            </div>
        </div>
    );
};

export default StockTransferOutPage;
