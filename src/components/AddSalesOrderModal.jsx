import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Search, ChevronDown } from 'lucide-react';
import PaymentStatusPopover from './PaymentStatusPopover';
import './AddSalesOrderModal.css';

const AddSalesOrderModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [paymentAnchor, setPaymentAnchor] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!isOpen && !isClosing) return null;

    const data = [
        { id: 1, date: '02/02/2026', name: 'Ram Sen', mobile: '1234567890', address: 'Abcd', model: '9D6+', wheel: '18"Qnell', payment: '₹1,10,438.00' },
        { id: 2, date: '09/01/2026', name: 'Arun Dey', mobile: '1234567890', address: 'Abcd', model: '9D6+', wheel: '18"Qnell', payment: '₹1,10,438.00' },
        { id: 3, date: '12/02/2026', name: 'Bikash Pratihar', mobile: '1234567890', address: 'Abcd', model: '9D6+', wheel: '18"Qnell', payment: '₹1,10,438.00' },
    ];

    return createPortal(
        <div className={`sales-order-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div className={`sales-order-modal ${isClosing ? 'scale-down' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header-section">
                    <h2 className="modal-title underline-title">Sales Order</h2>
                    <X size={24} className="modal-close-btn" onClick={handleClose} />
                </div>

                <div className="modal-filter-row">
                    <div className="modal-filter-field">
                        <label>Date To</label>
                        <input type="date" />
                    </div>
                    <div className="modal-filter-field">
                        <label>Date From</label>
                        <input type="date" />
                    </div>
                    <div className="modal-filter-field">
                        <label>Dist</label>
                        <div className="modal-select-wrapper">
                            <select><option></option></select>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                    <div className="modal-filter-field">
                        <label>Block</label>
                        <div className="modal-select-wrapper">
                            <select><option></option></select>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                    <div className="modal-filter-field">
                        <label>GP</label>
                        <div className="modal-select-wrapper">
                            <select><option></option></select>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                    <button className="btn-modal-find">
                        Find <Search size={16} />
                    </button>
                </div>

                <div className="modal-table-container">
                    <table className="modal-data-table">
                        <thead>
                            <tr>
                                <th style={{ width: '80px' }}>SL No</th>
                                <th style={{ width: '150px' }}>Booking Date</th>
                                <th style={{ width: '200px' }}>Name</th>
                                <th style={{ width: '150px' }}>Mobile No</th>
                                <th style={{ width: '350px' }}>Addrsess</th>
                                <th style={{ width: '120px' }}>Model</th>
                                <th style={{ width: '150px' }}>Wheel</th>
                                <th style={{ width: '150px' }}>Payment</th>
                                <th style={{ width: '120px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.address}</td>
                                    <td>{item.model}</td>
                                    <td>{item.wheel}</td>
                                    <td 
                                        className="payment-cell"
                                        style={{ cursor: 'pointer', color: '#00a8ff', fontWeight: '700' }}
                                        onClick={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            setPaymentAnchor(rect);
                                        }}
                                    >
                                        {item.payment}
                                    </td>
                                    <td>
                                        <button className="btn-order-now">Order Now</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <PaymentStatusPopover 
                isOpen={!!paymentAnchor}
                anchorRect={paymentAnchor}
                onClose={() => setPaymentAnchor(null)}
                title="Payment"
            />
        </div>,
        document.body
    );
};

export default AddSalesOrderModal;
