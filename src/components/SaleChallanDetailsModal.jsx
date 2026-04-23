import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer } from 'lucide-react';
import './SaleChallanDetailsModal.css';

const SaleChallanDetailsModal = ({ isOpen, onClose, data }) => {
    const [isClosing, setIsClosing] = useState(false);

    const mockProductData = [
        { id: 1, itemName: 'ABC', qty: 1, amount: 100.00 },
        { id: 2, itemName: 'XYZ', qty: 1, amount: 100.00 },
        { id: 3, itemName: 'PQR', qty: 1, amount: 100.00 },
        { id: 4, itemName: 'Item 4', qty: 1, amount: 100.00 },
        { id: 5, itemName: 'Item 5', qty: 1, amount: 100.00 },
        { id: 6, itemName: 'Item 6', qty: 1, amount: 100.00 },
        { id: 7, itemName: 'Item 7', qty: 1, amount: 100.00 },
        { id: 8, itemName: 'Item 8', qty: 1, amount: 100.00 },
        { id: 9, itemName: 'Item 9', qty: 1, amount: 100.00 },
        { id: 10, itemName: 'Item 10', qty: 1, amount: 100.00 },
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
        <div className={`challan-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`challan-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="challan-modal-content">
                    {/* Header with Print & Close */}
                    <div className="challan-header-actions">
                        <div className="print-btn-circle">
                            <Printer size={20} />
                        </div>
                    </div>

                    {/* Top Info Grid */}
                    <div className="challan-info-header">
                        <div className="info-grid-4">
                            <div className="info-group">
                                <span className="label">Date :-</span>
                                <span className="value-chip">{data?.date || '23-03-2026'}</span>
                            </div>
                            <div className="info-group">
                                <span className="label">Challan No:-</span>
                                <span className="value-chip">{data?.challanNo || '1025'}</span>
                            </div>
                            <div className="info-group">
                                <span className="label">Branch:-</span>
                                <span className="value-chip">WORKSHOP</span>
                            </div>
                            <div className="info-group">
                                <span className="label">Item Category:-</span>
                                <span className="value-chip">{data?.category?.toUpperCase() || 'WEEDER'}</span>
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

                        <div className="info-grid-4 mt-25">
                            <div className="info-group">
                                <span className="label">Engine No</span>
                                <div className="spec-box">{data?.engineNo || 'E2501SHR1222'}</div>
                            </div>
                            <div className="info-group">
                                <span className="label">Chassis No</span>
                                <div className="spec-box">{data?.chassisNo || 'W2501SHR1236'}</div>
                            </div>
                            <div className="info-group">
                                <span className="label">Model No</span>
                                <div className="spec-box">{data?.model || '9D6+/10HP'}</div>
                            </div>
                            <div className="info-group">
                                <span className="label">Battery No</span>
                                <div className="spec-box">{data?.batteryNo || '8521122H412'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Product Table */}
                    <div className="challan-table-container">
                        <table className="challan-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '50px' }}>SI</th>
                                    <th>Item Name</th>
                                    <th className="text-center" style={{ width: '80px' }}>Qty</th>
                                    <th className="text-right" style={{ width: '120px' }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockProductData.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}.</td>
                                        <td className="bold">{row.itemName}</td>
                                        <td className="text-center">{row.qty}</td>
                                        <td className="text-right">{row.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Totals Section */}
                    <div className="challan-totals-section">
                        <div className="total-row">
                            <span className="total-label">Discount:</span>
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

export default SaleChallanDetailsModal;
