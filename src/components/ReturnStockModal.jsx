import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, Filter, Download, Trash2, User } from 'lucide-react';
import './ReturnStockModal.css';

const ReturnStockModal = ({ isOpen, onClose, mechanicName }) => {
    const [isClosing, setIsClosing] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 150);
    };

    if (!isOpen && !isClosing) return null;

    const initialRows = [
        { id: 1, date: '22/02/2026', name: 'FUEL PIPE ASSY', code: 'SFMTWBC01520', qty: 5 },
        { id: 2, date: '22/02/2026', name: 'FUEL FILTER ASSY', code: 'SFMTWBC01520', qty: 5 },
        { id: 3, date: '22/02/2026', name: 'FUEL PUMP ASSY 188', code: 'SFMTWBC01520', qty: 5 },
        { id: 4, date: '22/02/2026', name: 'STARTER HANDLE', code: 'SFMTWBC01520', qty: 5 },
        { id: 5, date: '22/02/2026', name: 'SPIRAL SPRING', code: 'SFMTWBC01520', qty: 5 },
    ];

    const supervisors = ['ASIT SAHU', 'BIKASH DE', 'RAM MANDI', 'AKSHI MAITY'];

    return createPortal(
        <div className={`rs-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`rs-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="rs-modal-header">
                    <div className="rs-modal-title">Return Stock</div>
                    <div className="rs-header-toolbar">
                        <div className="rs-mechanic-info">
                            <div className="rs-mechanic-avatar"><User size={18} /></div>
                            <div className="rs-mechanic-name">{mechanicName || 'BHADU SAREN'}</div>
                        </div>
                        <div className="rs-toolbar-actions">
                            <div className="rs-search-box">
                                <Search size={14} className="rs-search-icon" />
                                <input type="text" placeholder="Search" />
                            </div>
                            <Filter size={18} color="#64748b" style={{cursor: 'pointer'}} />
                            <Download size={18} color="#64748b" style={{cursor: 'pointer'}} />
                        </div>
                    </div>
                </div>

                <div className="rs-table-container">
                    <table className="rs-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}>Action</th>
                                <th>Assign Date</th>
                                <th style={{ width: '180px' }}>Item Name</th>
                                <th>Part Code</th>
                                <th>Qty</th>
                                <th style={{ width: '140px' }}>Supervisor Name</th>
                                <th style={{ width: '80px' }}>Return Qty</th>
                                <th style={{ width: '120px' }}>Return Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialRows.map((row) => (
                                <tr key={row.id}>
                                    <td>
                                        <button className="rs-delete-btn"><Trash2 size={14} /></button>
                                    </td>
                                    <td>{row.date}</td>
                                    <td>{row.name}</td>
                                    <td>{row.code}</td>
                                    <td>{row.qty}</td>
                                    <td>
                                        <select className="rs-input-select">
                                            <option value="">Select</option>
                                            {supervisors.map((s, i) => (
                                                <option key={i} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" className="rs-input-text" placeholder="0" />
                                    </td>
                                    <td>
                                        <input type="date" className="rs-input-text" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="rs-modal-footer">
                    <div className="rs-stock-alert">Current Stock:- 25Pcs</div>
                    <div className="rs-footer-btns">
                        <button className="btn-rs cancel" onClick={handleClose}>Cancel</button>
                        <button className="btn-rs save" onClick={handleClose}>Save</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ReturnStockModal;
