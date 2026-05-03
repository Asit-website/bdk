import React from 'react';
import './PaymentStatusPopover.css';

const PaymentStatusPopover = ({ isOpen, anchorRect, onClose, title = "Payment Status" }) => {
    if (!isOpen || !anchorRect) return null;

    const popoverHeight = 180;
    const style = {
        position: 'fixed',
        top: anchorRect.top - popoverHeight - 10,
        left: anchorRect.left - 100,
        zIndex: 12001,
    };

    const data = [
        { sl: 1, date: '01/02/2026', amount: '12000.00' },
        { sl: 2, date: '25/01/2025', amount: '98438.00' },
    ];

    return (
        <>
            <div 
                className="popover-overlay" 
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }} 
                style={{ zIndex: 12000 }}
            ></div>
            <div className="payment-status-popover shadow-xl" style={style}>
                <div className="popover-header">
                    <h4>{title}</h4>
                </div>
                <div className="popover-content">
                    <table className="popover-table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Date</th>
                                <th style={{ textAlign: 'right' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.sl}>
                                    <td>{item.sl}</td>
                                    <td>{item.date}</td>
                                    <td style={{ textAlign: 'right' }}>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="popover-arrow-down"></div>
            </div>
        </>
    );
};

export default PaymentStatusPopover;
