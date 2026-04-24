import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Printer, User, X } from 'lucide-react';
import './ExpenseDetailsModal.css';

const ExpenseDetailsModal = ({ isOpen, onClose, data }) => {
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
        }, 200);
    };

    if (!isOpen && !isClosing) return null;

    const items = [
        { id: 1, category: 'FOOD', type: 'UPI', amount: '100.00', remark: '' },
        { id: 2, category: 'FUEL', type: 'UPI', amount: '300.00', remark: '' },
        { id: 3, category: 'TIFFIN', type: 'CASH', amount: '50.00', remark: 'Service er kaje theke Niyeche' },
    ];

    return createPortal(
        <div className={`expense-details-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`expense-details-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="ed-modal-content">
                    <div className="ed-header">
                        <div className="ed-user-info">
                            <div className="ed-avatar">
                                <User size={28} />
                            </div>
                            <div className="ed-name">{data?.expenser || 'CHANDI PATRA'}</div>
                        </div>
                        <button className="ed-print-btn">
                            <Printer size={18} />
                        </button>
                    </div>

                    <div className="ed-meta-grid">
                        <div className="ed-meta-item">
                            <span className="ed-meta-label">Expence No</span>
                            <div className="ed-meta-value">EX-256</div>
                        </div>
                        <div className="ed-meta-item">
                            <span className="ed-meta-label">Date</span>
                            <div className="ed-meta-value">22-03-2026</div>
                        </div>
                    </div>

                    <div className="ed-table-wrapper">
                        <table className="ed-table">
                            <thead>
                                <tr>
                                    <th>SI</th>
                                    <th>Category</th>
                                    <th>Payment Type</th>
                                    <th>Amount</th>
                                    <th>Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, idx) => (
                                    <tr key={item.id}>
                                        <td>{idx + 1}</td>
                                        <td>{item.category}</td>
                                        <td>{item.type}</td>
                                        <td>{item.amount}</td>
                                        <td>
                                            <span className={item.remark ? 'ed-remark-highlight' : ''}>
                                                {item.remark}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="ed-footer">
                        <span className="ed-total-label">Total</span>
                        <div className="ed-total-value">₹450.00</div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ExpenseDetailsModal;
