import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './DeliveryUpdateModal.css';

const DeliveryUpdateModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const attachments = [
        { id: 1, name: 'WHEEL-18" DIEL', status: 'GIVEN', deliveredBy: 'SOMNATH MURMU' },
        { id: 2, name: 'M.Set', status: 'GIVEN', deliveredBy: 'SOMNATH MURMU' },
        { id: 3, name: 'Tool Kit', status: 'GIVEN', deliveredBy: 'SOMNATH MURMU' },
        { id: 4, name: 'Service Kit', status: 'GIVEN', deliveredBy: 'SOMNATH MURMU' },
        { id: 5, name: 'Hitch', status: 'DUE', deliveredBy: '' },
        { id: 6, name: 'Potato Planter', status: 'DUE', deliveredBy: '' },
        { id: 7, name: 'Potato Digger', status: 'DUE', deliveredBy: '' },
        { id: 8, name: 'Leveler', status: 'GIVEN', deliveredBy: 'SOMNATH MURMU' },
        { id: 9, name: 'R.Set', status: 'N/A', deliveredBy: '' }
    ];

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsClosing(false);
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

    const getStatusClass = (status) => {
        switch (status) {
            case 'GIVEN': return 'given';
            case 'DUE': return 'due';
            default: return 'na';
        }
    };

    const executives = ['SOMNATH MURMU', 'BHADU SAREN', 'RABINDRA NATH', 'AMIT MAITY'];

    return createPortal(
        <div className={`delivery-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`delivery-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="delivery-modal-content">
                    <div className="delivery-table-container">
                        <table className="delivery-table">
                            <thead>
                                <tr>
                                    <th>Attachment Name</th>
                                    <th>Status</th>
                                    <th>Delivered By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attachments.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td>
                                            {item.status !== 'N/A' ? (
                                                <select 
                                                    className={`modal-select ${!item.deliveredBy ? 'empty' : ''}`}
                                                    defaultValue={item.deliveredBy}
                                                >
                                                    <option value="">Select Person</option>
                                                    {executives.map((exec, idx) => (
                                                        <option key={idx} value={exec}>{exec}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <div style={{ minHeight: '30px' }}></div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="delivery-modal-footer">
                    <div className="transported-info">
                        Transported By: <span className="transport-name">SOMNATH MURMU</span>
                    </div>
                    <div className="modal-actions">
                        <button className="btn-delivery cancel" onClick={handleClose}>Cancel</button>
                        <button className="btn-delivery save" onClick={handleClose}>Save</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DeliveryUpdateModal;
