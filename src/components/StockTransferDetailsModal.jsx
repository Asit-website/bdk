import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer } from 'lucide-react';
import './StockTransferDetailsModal.css';

const StockTransferDetailsModal = ({ isOpen, onClose, data }) => {
    const [isClosing, setIsClosing] = useState(false);

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

    // Mock item details for the table matching Slide 21
    const itemDetails = [
        { si: 1, partCode: 'SPMTWEBD00123', partName: 'FUEL PIPE ASSY', qty: 10, rate: 50.00, total: 500.00 },
        { si: 2, partCode: 'SPMTWEBD00123', partName: 'FUEL NOZZEL ASSY', qty: 1, rate: 2100.00, total: 4200.00 },
        { si: 3, partCode: 'SPMTWEBD00123', partName: 'STARTER HANDLE', qty: 5, rate: 100.00, total: 500.00 },
        { si: 4, partCode: 'SPMTWEBD00123', partName: 'SPIRAL SPRING', qty: 2, rate: 250.00, total: 500.00 }
    ];

    return createPortal(
        <div className={`stock-transfer-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`stock-transfer-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Print Header */}
                <div className="header-actions">
                    <div className="print-btn-circle">
                        <Printer size={20} />
                    </div>
                </div>

                {/* Top Meta Info (Date and Transfer No) */}
                <div className="header-meta-grid">
                    <div className="info-group">
                        <span className="label">Date</span>
                        <div className="value-box-short">{data?.date || '12/02/2026'}</div>
                    </div>
                    <div className="info-group">
                        <span className="label">Transfer No</span>
                        <div className="value-box-short">{data?.no || '212'}</div>
                    </div>
                    <div></div> {/* Spacer */}
                </div>

                {/* Secondary Info Grid */}
                <div className="details-main-grid">
                    <div className="info-group">
                        <span className="label">Transfer From</span>
                        <div className="value-box">{data?.from || 'SHOP'}</div>
                    </div>
                    <div className="info-group">
                        <span className="label">Transfer To</span>
                        <div className="value-box">{data?.to || 'WORKSHOP'}</div>
                    </div>
                    <div className="info-group">
                        <span className="label">Supervisor Name</span>
                        <div className="value-box">{data?.supervisorName || 'SWARUP NAG'}</div>
                    </div>
                    <div className="info-group">
                        <span className="label">Transported By</span>
                        <div className="value-box">{data?.transportedBy || 'BABURAM HEMBRAM'}</div>
                    </div>
                </div>

                {/* Item Details Section */}
                <h3 className="section-title-small">Item Details:</h3>
                <div className="transfer-table-container">
                    <table className="transfer-table">
                        <thead>
                            <tr>
                                <th>Si</th>
                                <th>Part Code</th>
                                <th>Part Name</th>
                                <th>Qty</th>
                                <th>Rate</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemDetails.map((item) => (
                                <tr key={item.si}>
                                    <td>{item.si}</td>
                                    <td>{item.partCode}</td>
                                    <td>{item.partName}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.rate.toFixed(2)}</td>
                                    <td>{item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Totals */}
                <div className="footer-totals">
                    <span className="total-text">TOTAL :</span>
                    <div className="total-badge">18 Pcs</div>
                    <div className="total-amount-box">5700.00</div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default StockTransferDetailsModal;
