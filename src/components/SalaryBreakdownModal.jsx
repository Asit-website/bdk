import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, X } from 'lucide-react';
import './SalaryBreakdownModal.css';

const SalaryBreakdownModal = ({ isOpen, onClose, row }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        earnings: true,
        deductions: true,
        paid: true
    });

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const normalizedName = useMemo(() => {
        if (!row?.name) return 'EMPLOYEE';
        return row.name
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }, [row]);

    if (!isOpen) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => onClose(), 220);
    };

    return (
        <div className={`salary-breakdown-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
            <div
                className={`salary-breakdown-modal ${isClosing ? 'scale-down' : 'scale-up'}`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="salary-breakdown-head">
                    <h3>{normalizedName}</h3>
                    <span className="breakdown-month-tag">February 2026</span>
                    <button type="button" onClick={handleClose} aria-label="Close">
                        <X size={14} />
                    </button>
                </div>

                <div className="salary-breakdown-body">
                    {/* Header Summary */}
                    <div className="breakdown-summary-row">
                        <span className="summary-label">Total Salary</span>
                        <strong className="summary-value">₹ {row?.total || '0.00'}</strong>
                    </div>

                    {/* Finalize Status Strip */}
                    <div className="finalize-status-strip">
                        <span className="status-text">Payroll Finalized: No</span>
                        <button type="button" className="btn-finalize-mini">Finalize Payroll</button>
                    </div>

                    <div className="breakdown-scroll-area">
                        {/* Earnings Section */}
                        <div className="breakdown-section">
                            <div className="section-header-interactive" onClick={() => toggleSection('earnings')}>
                                <h4 className="section-title">Earnings</h4>
                                <div className="header-value-group">
                                    <span className="header-total">₹ {row?.total || '0.00'}</span>
                                    {expandedSections.earnings ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </div>
                            </div>
                            
                            {expandedSections.earnings && (
                                <div className="section-content">
                                    <div className="breakdown-item">
                                        <span className="item-label">Basic Salary</span>
                                        <span className="item-value">₹ {row?.total || '0.00'}</span>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Work Basis Payment</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Incentives</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Reimbursement</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Bonus</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Overtime Pay</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Other Earnings</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Deductions Section */}
                        <div className="breakdown-section">
                            <div className="section-header-interactive" onClick={() => toggleSection('deductions')}>
                                <h4 className="section-title">Deductions</h4>
                                <div className="header-value-group">
                                    <span className="header-total">₹ 0.00</span>
                                    {expandedSections.deductions ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </div>
                            </div>

                            {expandedSections.deductions && (
                                <div className="section-content">
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Late Fine</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Early Fine</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Other Deductions</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Loan Repayment</span>
                                        <div className="item-value-group">
                                            <span>₹ 0.00</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Paid Amount Section */}
                        <div className="breakdown-section footer-stats">
                            <div className="section-header-interactive" onClick={() => toggleSection('paid')}>
                                <h4 className="section-title">Paid Amount</h4>
                                <div className="header-value-group">
                                    <span className="header-total">₹ {row?.paid || '0.00'}</span>
                                    {expandedSections.paid ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </div>
                            </div>

                            {expandedSections.paid && (
                                <div className="section-content">
                                    <div className="breakdown-item clickable">
                                        <span className="item-label">Advance Given</span>
                                        <div className="item-value-group">
                                            <span>₹ {row?.paid || '0.00'}</span>
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>
                                    <div className="breakdown-item">
                                        <span className="item-label">Salary Paid</span>
                                        <span className="item-value">₹ 0.00</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pending Row */}
                    <div className="breakdown-pending-row">
                        <span className="item-label">Pending</span>
                        <strong className="item-value">₹ {row?.pending || '0.00'}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalaryBreakdownModal;
