import React, { useEffect, useMemo, useState } from 'react';
import { ChevronRight, CreditCard, Smartphone, Globe, Landmark, X } from 'lucide-react';
import './PayrollPaidHistoryModal.css';

const transactionHistory = [
    { date: '27 Feb, 2026', type: 'Advance', note: 'BILL PAYMENT', amount: '1,193.00', icon: CreditCard },
    { date: '10 Feb, 2026', type: 'Advance', note: 'MOBILE RECHARGE', amount: '350.00', icon: Smartphone },
    { date: '10 Feb, 2026', type: 'Advance', note: 'ONLINE PAYMENT', amount: '200.00', icon: Globe },
    { date: '1 Feb, 2026', type: 'Advance', note: 'A/C TRANSFER', amount: '3,500.00', icon: Landmark },
];

const PayrollPaidHistoryModal = ({ isOpen, onClose, row }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

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
        <div className={`paid-history-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
            <div
                className={`paid-history-modal ${isClosing ? 'scale-down' : 'scale-up'}`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="paid-history-head">
                    <h3>{normalizedName}</h3>
                    <span className="history-month-tag">February 2026</span>
                    <button type="button" onClick={handleClose} aria-label="Close">
                        <X size={14} />
                    </button>
                </div>

                <div className="paid-history-body">
                    {/* Header Summary */}
                    <div className="history-summary-row">
                        <span className="summary-label">Paid</span>
                        <strong className="summary-value">₹ {row?.paid || '0.00'}</strong>
                    </div>

                    <div className="history-scroll-area">
                        {transactionHistory.map((item, idx) => {
                            const IconComp = item.icon;
                            return (
                                <div key={idx} className="history-item">
                                    <div className="history-item-left">
                                        <div className="history-date-row">
                                            <strong>{item.date}</strong>
                                            <span>{item.type}</span>
                                        </div>
                                        <div className="history-note-row">
                                            <IconComp size={10} />
                                            <span>{item.note}</span>
                                        </div>
                                    </div>
                                    <div className="history-item-right">
                                        <div className="history-amount-group">
                                            <strong>₹ {item.amount}</strong>
                                            <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayrollPaidHistoryModal;
