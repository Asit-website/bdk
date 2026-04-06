import React from 'react';
import { X } from 'lucide-react';
import './OvertimeDetailDrawer.css';

const OvertimeDetailDrawer = ({ isOpen, onClose, employee, month }) => {
    // Mock data based on SS
    const overtimeData = [
        { date: '02 Feb Mon', overtime: '1.64 hours', payFor: '1.64 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '04 Feb Wed', overtime: '1.45 hours', payFor: '1.45 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '05 Feb Thu', overtime: '2.24 hours', payFor: '2.24 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '06 Feb Fri', overtime: '1.11 hours', payFor: '1.11 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '15 Feb Sun', overtime: '1.38 hours', payFor: '1.38 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '17 Feb Tue', overtime: '0.38 hours', payFor: '0.38 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '18 Feb Wed', overtime: '2.11 hours', payFor: '2.11 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
        { date: '19 Feb Thu', overtime: '1.62 hours', payFor: '1.62 hours', rate: '₹ 0.00', amount: '₹ 0.00' },
    ];

    return (
        <div className={`overtime-drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div 
                className={`overtime-drawer-container ${isOpen ? 'show' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="ot-drawer-header">
                    <div className="ot-header-info">
                        <span className="ot-close-x" onClick={onClose}><X size={18} /></span>
                        <h3>{employee?.name} | {month}</h3>
                    </div>
                </div>

                {/* Body */}
                <div className="ot-drawer-body">
                    <h4 className="body-section-title">Regular Overtime</h4>
                    
                    <div className="ot-table-wrap">
                        <table className="ot-table">
                            <thead>
                                <tr>
                                    <th>Overtime</th>
                                    <th>Pay For</th>
                                    <th>Actual Rate</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overtimeData.map((row, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className="date-time">
                                                <span className="ot-date">{row.date}</span>
                                                <span className="ot-hours">{row.overtime}</span>
                                            </div>
                                        </td>
                                        <td>{row.payFor}</td>
                                        <td>{row.rate}</td>
                                        <td>{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="ot-drawer-footer">
                    <button className="ot-save-btn" onClick={onClose}>SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default OvertimeDetailDrawer;
