import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './AddCreditDiscountModal.css';

const CreditDiscountFormModal = ({ isOpen, onClose, mode = 'add', initialData = null }) => {
    const [formData, setFormData] = useState({
        requestDate: '2026-03-25',
        customerName: '',
        mobileNo: '9999999999',
        address: 'VILLAGE, GP, BLOCK',
        creditAmount: '',
        discountAmount: '',
        dateUpto: '2026-03-31'
    });

    const [isClosing, setIsClosing] = useState(false);

    // Sync formData with initialData when mode is 'edit' and initialData changes
    useEffect(() => {
        if (isOpen && mode === 'edit' && initialData) {
            setFormData({
                requestDate: initialData.date || '2026-03-25',
                customerName: initialData.customer || '',
                mobileNo: initialData.mobile || '9999999999',
                address: initialData.address || 'VILLAGE, GP, BLOCK',
                creditAmount: initialData.credit || '',
                discountAmount: initialData.discount || '',
                dateUpto: initialData.dateUpto || '2026-03-31'
            });
        } else if (isOpen && mode === 'add') {
            // Reset for Add mode
            setFormData({
                requestDate: '2026-03-25',
                customerName: '',
                mobileNo: '9999999999',
                address: 'VILLAGE, GP, BLOCK',
                creditAmount: '',
                discountAmount: '',
                dateUpto: '2026-03-31'
            });
        }
    }, [isOpen, mode, initialData]);

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

    return createPortal(
        <div className={`credit-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`credit-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="credit-modal-header">
                    <h2>{mode === 'edit' ? 'Update' : 'Add New Request'}</h2>
                </div>

                <div className="credit-modal-form">
                    {/* Row 1: 4 Columns */}
                    <div className="form-row-4-col">
                        <div className="form-group">
                            <label>Request Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={formData.requestDate}
                                onChange={(e) => setFormData({...formData, requestDate: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Customer Name</label>
                            <select 
                                className="form-control"
                                value={formData.customerName}
                                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                            >
                                <option value="">Select Customer</option>
                                <option value="MANIK CHANDRA">MANIK CHANDRA</option>
                                <option value="GOUTAM MANNA">GOUTAM MANNA</option>
                                <option value="BIKASH MAITY">BIKASH MAITY</option>
                                <option value="AKASH DE">AKASH DE</option>
                                <option value="SHRIMANTA DEY">SHRIMANTA DEY</option>
                                <option value="PRAKASH DEY">PRAKASH DEY</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Mobile No</label>
                            <input 
                                type="text" 
                                className="form-control read-only" 
                                value={formData.mobileNo} 
                                readOnly 
                            />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea 
                                className="form-control textarea read-only" 
                                value={formData.address} 
                                readOnly 
                            />
                        </div>
                    </div>

                    {/* Row 2: 3 Columns */}
                    <div className="form-row-3-col">
                        <div className="form-group">
                            <label>Credit Amount</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Credit Amount"
                                value={formData.creditAmount}
                                onChange={(e) => setFormData({...formData, creditAmount: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Discount Amount</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Discount Amount"
                                value={formData.discountAmount}
                                onChange={(e) => setFormData({...formData, discountAmount: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label>Date Upto</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value={formData.dateUpto}
                                onChange={(e) => setFormData({...formData, dateUpto: e.target.value})}
                            />
                        </div>
                    </div>
                </div>

                <div className="credit-modal-footer">
                    <button className="btn-modal cancel" onClick={handleClose}>Cancel</button>
                    <button className="btn-modal apply" onClick={handleClose}>Save</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CreditDiscountFormModal;
