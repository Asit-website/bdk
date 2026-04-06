import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, Filter, Printer, Download, ChevronsUpDown, Eye, FileText, Trash2, History, Search } from 'lucide-react';
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

const OtherItemTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const tableRef = useRef(null);

    const data = [
        {
            id: 1,
            srNo: 1,
            date: '13/03/2026',
            orderNo: '0025',
            invoiceNo: '225',
            partyName: 'ABCD ltd',
            branch: 'abcd',
            product: 'Other Item',
            billAmount: 500
        }
    ];

    const columns = [
        'Sl No.', 'Date', 'Order No', 'Invoice No', 'Party Name', 'Branch', 'Product', 'Bill Amount'
    ];

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
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
                                <td>{item.srNo}</td>
                                <td>{item.date}</td>
                                <td>{item.orderNo}</td>
                                <td>{item.invoiceNo}</td>
                                <td>{item.partyName}</td>
                                <td>{item.branch}</td>
                                <td>{item.product}</td>
                                <td style={{ fontWeight: '600' }}>{item.billAmount}</td>
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
        </div>
    );
};

export default OtherItemTable;
