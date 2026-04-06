import React from 'react';
import { X } from 'lucide-react';
import './EarlyFineDetailDrawer.css';

const EarlyFineDetailDrawer = ({ isOpen, onClose, employee, month }) => {
    // Mock data based on SS23
    const earlyFineData = [
        { date: '03 Feb Tue', earlyBy: '0.06 hours', deductFor: '0.06', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '07 Feb Sat', earlyBy: '0.33 hours', deductFor: '0.33', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '08 Feb Sun', earlyBy: '1.09 hours', deductFor: '1.09', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '12 Feb Thu', earlyBy: '0.89 hours', deductFor: '0.89', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '13 Feb Fri', earlyBy: '10.86 hours', deductFor: '10.86', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '16 Feb Mon', earlyBy: '1.06 hours', deductFor: '1.06', rate: '₹ 0.00', amount: '₹ 0.00' },
    ];

    return (
        <div className={`early-fine-drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div 
                className={`early-fine-drawer-container ${isOpen ? 'show' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="ef-drawer-header">
                    <div className="ef-header-info">
                        <span className="ef-close-x" onClick={onClose}><X size={18} /></span>
                        <h3>{employee?.name} | {month}</h3>
                    </div>
                </div>

                {/* Body */}
                <div className="ef-drawer-body">
                    <div className="ef-table-wrap">
                        <table className="ef-table">
                            <thead>
                                <tr>
                                    <th>Early By</th>
                                    <th>Deduct For</th>
                                    <th>Actual Rate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earlyFineData.map((row, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className="date-time">
                                                <span className="ef-date">{row.date}</span>
                                                <span className="ef-hours">{row.earlyBy}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="deduct-input-group">
                                                <input type="text" defaultValue={row.deductFor} className="deduct-input" />
                                                <span className="hours-suffix">hours</span>
                                            </div>
                                        </td>
                                        <td>{row.rate}</td>
                                        <td>{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="total-row">
                                    <td colSpan="3">Total</td>
                                    <td>₹ 0.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="ef-drawer-footer">
                    <button className="ef-save-btn" onClick={onClose}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default EarlyFineDetailDrawer;
