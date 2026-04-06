import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { UserCircle, Calendar } from 'lucide-react';
import './CreditDiscountStatusModal.css';

const CreditDiscountStatusModal = ({ isOpen, onClose, customerName }) => {
    const [formData, setFormData] = useState({
        requestDate: '2026-03-25',
        creditUpto: '2026-03-31',
        discount: '₹700.00',
        creditAmount: '₹200.00',
        purpose: 'VILLAGE, GP, BLOCK',
        comment: ''
    });

    const [isClosing, setIsClosing] = useState(false);

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
        <div className={`status-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`status-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="status-modal-header">
                    <div className="status-header-icon">
                        <UserCircle size={20} />
                    </div>
                    <h2>{customerName || 'PRAKASH DEY'}</h2>
                </div>

                <div className="status-modal-content">
                    <div className="status-form-grid">
                        <div className="status-form-group">
                            <label>Request Date</label>
                            <div className="status-date-input">
                                <span className="status-date-icon"><Calendar size={14} color="#dc2626" /></span>
                                <input 
                                    type="date" 
                                    value={formData.requestDate}
                                    onChange={(e) => setFormData({...formData, requestDate: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="status-form-group">
                            <label>Credit Upto</label>
                            <div className="status-date-input">
                                <span className="status-date-icon"><Calendar size={14} color="#dc2626" /></span>
                                <input 
                                    type="date" 
                                    value={formData.creditUpto}
                                    onChange={(e) => setFormData({...formData, creditUpto: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="status-form-group">
                            <label>Discount</label>
                            <input 
                                type="text" 
                                className="status-control" 
                                value={formData.discount}
                                onChange={(e) => setFormData({...formData, discount: e.target.value})}
                            />
                        </div>
                        <div className="status-form-group">
                            <label>Credit Amount</label>
                            <input 
                                type="text" 
                                className="status-control" 
                                value={formData.creditAmount}
                                onChange={(e) => setFormData({...formData, creditAmount: e.target.value})}
                            />
                        </div>
                        <div className="status-form-group full-width">
                            <label>Request Purpose</label>
                            <input 
                                type="text" 
                                className="status-control" 
                                value={formData.purpose}
                                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                            />
                        </div>
                        <div className="status-form-group full-width">
                            <label>Comment:-</label>
                            <textarea 
                                className="status-control textarea" 
                                value={formData.comment}
                                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                                placeholder="Write Comment Here..."
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="status-modal-footer">
                    <button className="footer-btn reject" onClick={handleClose}>Reject</button>
                    <button className="footer-btn approve" onClick={handleClose}>Approve</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CreditDiscountStatusModal;
