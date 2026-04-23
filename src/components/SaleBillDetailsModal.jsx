import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer } from 'lucide-react';
import './SaleBillDetailsModal.css';

const SaleBillDetailsModal = ({ isOpen, onClose, data }) => {
    const [isClosing, setIsClosing] = useState(false);

    const mockProductData = [
        { id: 1, itemName: 'ABC', qty: 1, price: 100.00, tax: 0, discount: 0, amount: 100.00 },
        { id: 2, itemName: 'ABC', qty: 1, price: 0.00, tax: 0, discount: 0, amount: 0.00 },
    ];

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
        <div className={`bill-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`bill-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bill-modal-content">
                    {/* Header with Print & Close */}
                    <div className="bill-header-actions">
                        <div className="print-btn-circle">
                            <Printer size={20} />
                        </div>
                    </div>

                    {/* Top Info Grid */}
                    <div className="bill-info-header">
                        <div className="info-grid-3">
                            <div className="info-group">
                                <span className="label">Date :-</span>
                                <span className="value-chip">{data?.date || '23-03-2026'}</span>
                            </div>
                            <div className="info-group">
                                <span className="label">Invoice No:-</span>
                                <span className="value-chip">{data?.invoiceNo || '1025'}</span>
                            </div>
                            <div className="info-group">
                                <span className="label">Challan No:-</span>
                                <div className="value-box-empty"></div>
                            </div>
                        </div>

                        <div className="info-grid-2 mt-20">
                            <div className="info-group">
                                <span className="label">Branch:-</span>
                                <span className="value-chip">WORKSHOP</span>
                            </div>
                            <div className="info-group">
                                <span className="label">Item Category:-</span>
                                <span className="value-chip">WEEDER</span>
                            </div>
                        </div>

                        <div className="info-grid-2-1 mt-20">
                            <div className="info-group">
                                <span className="label">Customer Name :-</span>
                                <div className="value-box-long">{data?.partyName || 'MANIK DEY'}</div>
                            </div>
                            <div className="info-group">
                                <span className="label">Mobile No:-</span>
                                <div className="value-box-medium">{data?.mobile || '1234567890'}</div>
                            </div>
                        </div>

                        <div className="info-group mt-15">
                            <span className="label">Address:-</span>
                            <div className="value-box-full">
                                {data?.address || 'Bhandirban, Benachapra, Garhbeta-l, Paschim medinipur, 721121'}
                            </div>
                        </div>

                        <div className="info-group mt-15">
                            <span className="label">Battery No:-</span>
                            <div className="value-box-medium"></div>
                        </div>
                    </div>

                    {/* Product Table */}
                    <div className="bill-table-container">
                        <table className="bill-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '50px' }}>SI</th>
                                    <th>Item Name</th>
                                    <th className="text-center">Qty</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">Tax</th>
                                    <th className="text-right">Discount</th>
                                    <th className="text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockProductData.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}.</td>
                                        <td className="bold">{row.itemName}</td>
                                        <td className="text-center">{row.qty}</td>
                                        <td className="text-right">{row.price.toFixed(2)}</td>
                                        <td className="text-right">{row.tax}%</td>
                                        <td className="text-right">{row.discount.toFixed(2)}</td>
                                        <td className="text-right">{row.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Totals Section */}
                    <div className="bill-totals-section">
                        <div className="total-row">
                            <span className="total-label">Discount:</span>
                            <div className="total-box-input"></div>
                        </div>
                        <div className="total-row">
                            <span className="total-label">Basic Amount:</span>
                            <div className="total-box-input"></div>
                        </div>
                        <div className="total-row">
                            <span className="total-label">Total Amount:</span>
                            <div className="total-box-input"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SaleBillDetailsModal;
