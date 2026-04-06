import React from 'react';
import { X } from 'lucide-react';
import './LateFineDetailDrawer.css';

const LateFineDetailDrawer = ({ isOpen, onClose, employee, month }) => {
    // Mock data based on SS24
    const lateFineData = [
        { date: '04 Feb Wed', lateBy: '0.00 hours', deductFor: '0', rate: '₹ 0.00', amount: '₹ 0.00', waiveOff: true },
        { date: '06 Feb Fri', lateBy: '0.00 hours', deductFor: '0', rate: '₹ 0.00', amount: '₹ 0.00', waiveOff: true },
        { date: '13 Feb Fri', lateBy: '0.53 hours', deductFor: '0.53', rate: '₹ 25.00', amount: '₹ 13.23', waiveOff: false },
        { date: '14 Feb Sat', lateBy: '7.14 hours', deductFor: '7.14', rate: '₹ 25.00', amount: '₹ 178.61', waiveOff: false },
    ];

    return (
        <div className={`late-fine-drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div 
                className={`late-fine-drawer-container ${isOpen ? 'show' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="lf-drawer-header">
                    <div className="lf-header-info">
                        <span className="lf-close-x" onClick={onClose}><X size={18} /></span>
                        <h3>{employee?.name} | {month}</h3>
                    </div>
                </div>

                {/* Body */}
                <div className="lf-drawer-body">
                    <div className="lf-table-wrap">
                        <table className="lf-table">
                            <thead>
                                <tr>
                                    <th>Late By</th>
                                    <th>Deduct For</th>
                                    <th>Actual Rate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lateFineData.map((row, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className="date-time">
                                                <span className="lf-date">{row.date}</span>
                                                <span className="lf-hours">{row.lateBy}</span>
                                                {row.waiveOff && <span className="waive-off-status">Waive Off Applied</span>}
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
                                    <td>₹ 191.84</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="lf-drawer-footer">
                    <button className="lf-save-btn" onClick={onClose}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default LateFineDetailDrawer;
