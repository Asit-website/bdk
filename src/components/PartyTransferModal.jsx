import React, { useState } from 'react';
import { X, Calendar, ChevronDown, Camera } from 'lucide-react';
import './PartyTransferModal.css';

const PartyTransferModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [rows, setRows] = useState([
        { id: 1, entryType: 'Received', customer: '', amount: '' },
        { id: 2, entryType: 'Paid', customer: '', amount: '' },
    ]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => closeModal(), 300);
    };

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('lead-modal-overlay')) {
            handleClose();
        }
    };

    const handleRowChange = (id, key, value) => {
        setRows((prev) => prev.map((row) => (row.id === id ? { ...row, [key]: value } : row)));
    };

    return (
        <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleOverlayClick}>
            <div className={`lead-modal transfer-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="lead-modal-header transfer-modal-header">
                    <div className="lead-title">Party To Party Transfer</div>
                    <div className="transfer-header-right">
                        <div className="transfer-date-chip">
                            <span>Date</span>
                            <input type="date" defaultValue="2026-03-17" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                            <Calendar size={13} />
                        </div>
                        <X size={16} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                <div className="lead-form-wrapper transfer-modal-body">
                    <div className="transfer-table-wrap">
                        <table className="transfer-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Entry Type</th>
                                    <th>Customer Name</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="entry-type-toggle">
                                                <button
                                                    type="button"
                                                    className={row.entryType === 'Received' ? 'active-received' : ''}
                                                    onClick={() => handleRowChange(row.id, 'entryType', 'Received')}
                                                >
                                                    Received
                                                </button>
                                                <button
                                                    type="button"
                                                    className={row.entryType === 'Paid' ? 'active-paid' : ''}
                                                    onClick={() => handleRowChange(row.id, 'entryType', 'Paid')}
                                                >
                                                    Paid
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="transfer-customer-select">
                                                <select value={row.customer} onChange={(e) => handleRowChange(row.id, 'customer', e.target.value)}>
                                                    <option value="">Customer Name*</option>
                                                    <option value="CHANDI PATRA">CHANDI PATRA</option>
                                                    <option value="SOMNATH MURMU">SOMNATH MURMU</option>
                                                </select>
                                                <ChevronDown size={13} />
                                            </div>
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                className="transfer-amount-input"
                                                value={row.amount}
                                                onChange={(e) => handleRowChange(row.id, 'amount', e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="transfer-tools">
                        <button type="button" className="paymentin-description-btn">Add Description</button>
                        <button type="button" className="paymentin-camera-btn" aria-label="Attachment">
                            <Camera size={16} />
                        </button>
                    </div>
                </div>

                <div className="lead-footer transfer-footer">
                    <button type="button" className="transfer-save-new">Save & New</button>
                    <button type="button" className="transfer-save" onClick={handleClose}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default PartyTransferModal;