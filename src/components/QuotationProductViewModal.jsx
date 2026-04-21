import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Printer, X } from 'lucide-react';
import './QuotationProductViewModal.css';

const QuotationProductViewModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const mockProductData = [
        { id: 1, itemName: 'abc', qty: 1, price: 50.00, discount: 10.00, tax: 0, amount: 40.00 }
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
        <div className={`product-view-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`product-view-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="product-view-content">
                    <div className="quotation-print-header">
                        <div className="print-btn-circle">
                            <Printer size={20} />
                        </div>
                    </div>

                    <div className="quotation-info-header">
                        <div className="info-row">
                            <div className="info-item">
                                <span className="label">Date</span>
                                <span className="value">22-03-2026</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Quotation No</span>
                                <span className="value">QT-1025</span>
                            </div>
                            <div className="info-item text-right">
                                <span className="label">Branch Name</span>
                                <span className="value">WorkShop</span>
                            </div>
                        </div>
                        <div className="info-row mt-15">
                            <div className="info-item">
                                <span className="label">Party Name :-</span>
                                <span className="value">MANIK MAITY</span>
                            </div>
                        </div>
                        <div className="info-row mt-15">
                            <div className="info-item">
                                <span className="label">Mobile No :-</span>
                                <span className="value">123456789</span>
                            </div>
                        </div>
                        <div className="info-row mt-15">
                            <div className="info-item">
                                <span className="label">Address :-</span>
                                <span className="value">Mayta, Benachapra, Gaebheta-l, Paschim Medinipur, 721121</span>
                            </div>
                        </div>
                    </div>

                    <h3 className="product-details-title">PRODUCT DETAILS:</h3>

                    <div className="product-view-table-container">
                        <table className="product-view-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '50px' }}>Sl</th>
                                    <th>Item Name</th>
                                    <th className="text-center">Qty</th>
                                    <th className="text-right">Price</th>
                                    <th className="text-right">Discount</th>
                                    <th className="text-right">Tax</th>
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
                                        <td className="text-right">{row.discount.toFixed(2)}</td>
                                        <td className="text-right">{row.tax}</td>
                                        <td className="text-right">{row.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="quotation-totals-section">
                        <div className="total-row">
                            <span className="total-label">Discount</span>
                            <div className="total-box"></div>
                        </div>
                        <div className="total-row">
                            <span className="total-label">Basic Amount</span>
                            <div className="total-box"></div>
                        </div>
                        <div className="total-row">
                            <span className="total-label">GST Amount</span>
                            <div className="total-box"></div>
                        </div>
                        <div className="total-row">
                            <span className="total-label">Total Amount</span>
                            <div className="total-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default QuotationProductViewModal;
