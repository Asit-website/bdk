import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, Filter, Printer, Download, ChevronsUpDown, Eye, FileText, Trash2, History, Search } from 'lucide-react';
import StockTransferDetailsModal from './StockTransferDetailsModal';
import './LeadTable.css';

const PurchaseActionMenu = ({ isOpen, anchorRect, onClose }) => {
    if (!isOpen || !anchorRect) return null;

    const menuHeight = 200;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 130,
        zIndex: 10000,
    };

    return createPortal(
        <div className="action-dropdown shadow-lg" style={style}>
            <button className="dropdown-item" onClick={onClose}><Eye size={14} /> View/Edit</button>
            <button className="dropdown-item" onClick={onClose}><FileText size={14} /> Open PDF</button>
            <button className="dropdown-item" onClick={onClose}><Printer size={14} /> Print</button>
            <button className="dropdown-item delete" onClick={onClose}><Trash2 size={14} /> Delete</button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={onClose}><History size={14} /> View History</button>
        </div>,
        document.body
    );
};

const StockTransferInTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const tableRef = useRef(null);

    const data = [
        {
            id: 1,
            slNo: 1,
            date: '23/03/2026',
            transferNo: '235',
            transferFrom: 'WORKSHOP',
            receiveLocation: 'MAIN BRANCH',
            receivedBy: 'SWARUP NAG',
            transportedBy: 'SOMANTAH MURMU',
            status: 'Received'
        },
        {
            id: 2,
            slNo: 2,
            date: '12/02/2026',
            transferNo: '212',
            transferFrom: 'SHOP',
            receiveLocation: 'WORKSHOP',
            receivedBy: '',
            transportedBy: 'BABURAM HEMBRAM',
            status: 'Pending'
        }
    ];

    const columns = [
        'sl No.', 'Date', 'Transfer No', 'Transfer From', 'Receive Location', 'Recieved By', 'Transported By', 'Status'
    ];

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleTransferClick = (item) => {
        setSelectedData(item);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleEvent = () => setOpenMenuId(null);
        window.addEventListener('scroll', handleEvent, true);
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.action-dots')) handleEvent();
        });
        return () => {
            window.removeEventListener('scroll', handleEvent, true);
            window.removeEventListener('click', handleEvent);
        };
    }, []);

    return (
        <div className="table-container" ref={tableRef} style={{ marginTop: '20px' }}>
            <div className="table-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3 className="table-title" style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>Transactions</h3>
                <div className="table-actions" style={{ display: 'flex', gap: '10px' }}>
                    <button className="table-action-btn" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Search size={18} color="#64748b" /></button>
                    <button className="table-action-btn" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Filter size={18} color="#64748b" /></button>
                    <button className="table-action-btn" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Printer size={18} color="#22c55e" /></button>
                    <button className="table-action-btn" style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Download size={18} color="#3b82f6" /></button>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="lead-table">
                    <thead>
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx}>
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
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.slNo}</td>
                                <td>{item.date}</td>
                                <td 
                                    style={{ color: '#3b82f6', fontWeight: '600', cursor: 'pointer' }}
                                    onClick={() => handleTransferClick(item)}
                                >
                                    {item.transferNo}
                                </td>
                                <td>{item.transferFrom}</td>
                                <td>{item.receiveLocation}</td>
                                <td>{item.receivedBy}</td>
                                <td>{item.transportedBy}</td>
                                <td>
                                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="action-cell">
                                    <button
                                        className={`action-dots ${openMenuId === item.id ? 'active' : ''}`}
                                        onClick={(e) => toggleMenu(e, item.id)}
                                    >
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <PurchaseActionMenu
                isOpen={openMenuId !== null}
                anchorRect={anchorRect}
                onClose={() => setOpenMenuId(null)}
            />

            <StockTransferDetailsModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={selectedData}
            />
        </div>
    );
};

export default StockTransferInTable;
