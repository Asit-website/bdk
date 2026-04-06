import React from 'react';
import { X, RotateCw } from 'lucide-react';
import './LoanDetailDrawer.css';

const LoanDetailDrawer = ({ isOpen, onClose, month }) => {
    return (
        <div className={`loan-drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div 
                className={`loan-drawer-container ${isOpen ? 'show' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="loan-header">
                    <span>| {month}</span>
                    <button className="loan-close-btn" onClick={onClose}>
                        <X size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="loan-body">
                    <div className="outstanding-balance">
                        <span className="label">Loan Outstanding:</span>
                        <span className="amount">₹ 0</span>
                    </div>

                    <div className="loan-form">
                        <div className="form-group-row">
                            <label>Amount</label>
                            <div className="input-with-prefix">
                                <span className="prefix">₹</span>
                                <input type="number" placeholder="Enter amount" />
                            </div>
                        </div>

                        <div className="form-group-row">
                            <label>Payment Date</label>
                            <input type="date" defaultValue="2026-02-01" className="date-input" />
                        </div>

                        <div className="form-group-row">
                            <label>Notes</label>
                            <textarea placeholder="Add Notes..." className="notes-textarea"></textarea>
                        </div>

                        <div className="loan-actions">
                            <button className="btn-add-loan">ADD LOAN</button>
                            <button className="btn-deduct-loan">- DEDUCT LOAN</button>
                            <button className="btn-cancel" onClick={onClose}>Cancel</button>
                        </div>
                    </div>

                    <div className="loan-history-header">
                        <h4>History <RotateCw size={14} className="history-refresh" /></h4>
                    </div>
                    
                    <div className="loan-history-empty">
                        {/* Placeholder for history list */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanDetailDrawer;
