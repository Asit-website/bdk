import React, { useState } from 'react';
import { X, Plus, Search, Filter, Download } from 'lucide-react';
import './AssignStockModal.css';

const AssignStockModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    if (!isOpen) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    const rows = [
        { id: 1, date: '23/02/2026', item: 'FUEL PIPE ASSY', code: 'SPMTWBED01520', qty: 5, supervisor: 'SUJOY HANSDA', technician: 'CHANDI PATRA' },
        { id: 2, date: '23/02/2026', item: 'FUEL FILTER ASSY', code: 'SPMTWBED01520', qty: 5, supervisor: 'SUJOY HANSDA', technician: 'CHANDI PATRA' },
        { id: 3, date: '23/02/2026', item: 'FUEL PUMP ASSY 186', code: 'SPMTWBED01520', qty: 5, supervisor: 'SUJOY HANSDA', technician: 'CHANDI PATRA' },
        { id: 4, date: '23/02/2026', item: 'STARTER HANDLE', code: 'SPMTWBED01520', qty: 5, supervisor: 'SUJOY HANSDA', technician: 'CHANDI PATRA' },
        { id: 5, date: '23/02/2026', item: 'SPIRAL SPRING', code: 'SPMTWBED01520', qty: 5, supervisor: 'SUJOY HANSDA', technician: 'CHANDI PATRA' },
    ];

    return (
        <div className={`booking-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`booking-modal stock-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="booking-modal-header stock-modal-header">
                    <span className="booking-title">Assign New Stock</span>
                    <X size={18} className="close-icon" onClick={handleClose} />
                </div>

                <div className="booking-modal-body stock-modal-body">
                    <div className="stock-form-grid">
                        <div className="form-field">
                            <label>Stock Assign Date</label>
                            <input type="date" />
                        </div>
                        <div className="form-field">
                            <label>Supervisor Name</label>
                            <div className="select-box">
                                <select><option></option></select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>
                        <div className="form-field">
                            <label>Machanic Name</label>
                            <div className="select-box">
                                <select><option></option></select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>
                        <div className="form-field stock-item">
                            <label>Item Name</label>
                            <div className="select-box">
                                <select><option></option></select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>
                        <div className="form-field stock-qty">
                            <label>Qty</label>
                            <input type="text" />
                        </div>
                        <div className="form-field stock-add">
                            <label>&nbsp;</label>
                            <button type="button" className="stock-add-btn"><Plus size={14} /> Add</button>
                        </div>
                    </div>

                    <div className="stock-section-header">
                        <div className="stock-section-title">Assign Stock:</div>
                        <div className="stock-section-actions">
                            <div className="stock-search">
                                <Search size={14} />
                                <input type="text" placeholder="Search" />
                            </div>
                            <button type="button" className="stock-icon-btn"><Filter size={14} /></button>
                            <button type="button" className="stock-icon-btn"><Download size={14} /></button>
                        </div>
                    </div>

                    <div className="stock-table-wrapper">
                        <table className="stock-table">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Assign Date</th>
                                    <th>Item Name</th>
                                    <th>Part Code</th>
                                    <th>Qty</th>
                                    <th>Supervisor Name</th>
                                    <th>Technician Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.id}>
                                        <td>
                                            <button className="action-icon edit">✎</button>
                                            <button className="action-icon delete">🗑</button>
                                        </td>
                                        <td>{row.date}</td>
                                        <td>{row.item}</td>
                                        <td>{row.code}</td>
                                        <td>{row.qty}</td>
                                        <td>{row.supervisor}</td>
                                        <td>{row.technician}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="stock-total-row">
                        <span>TOTAL:</span>
                        <span className="stock-total-pill">25 pcs</span>
                    </div>
                </div>

                <div className="stock-modal-footer">
                    <button type="button" className="assign-cancel" onClick={handleClose}>Cancel</button>
                    <button type="button" className="assign-save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AssignStockModal;
