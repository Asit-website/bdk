import React from 'react';
import { X, Printer } from 'lucide-react';
import './StockTransferDetailsModal.css';

const StockTransferDetailsModal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    // Mock item details for the table
    const itemDetails = [
        { si: 1, partCode: 'SPMTWEBD00123', partName: 'FUEL PIPE ASSY', qty: 10, rate: 50.00, total: 500.00 },
        { si: 2, partCode: 'SPMTWEBD00123', partName: 'FUEL NOZZEL ASSY', qty: 1, rate: 2100.00, total: 4200.00 },
        { si: 3, partCode: 'SPMTWEBD00123', partName: 'STARTER HANDLE', qty: 5, rate: 100.00, total: 500.00 },
        { si: 4, partCode: 'SPMTWEBD00123', partName: 'SPIRAL SPRING', qty: 2, rate: 250.00, total: 500.00 }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="stock-transfer-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="header-actions">
                        <button className="icon-btn print-btn"><Printer size={20} /></button>
                        <button className="icon-btn close-btn" onClick={onClose}><X size={20} /></button>
                    </div>
                </div>

                <div className="modal-body">
                    <div className="details-grid">
                        <div className="detail-group">
                            <label>Date</label>
                            <div className="read-only-input">{data?.date || '12/02/2026'}</div>
                        </div>
                        <div className="detail-group">
                            <label>Transfer No</label>
                            <div className="read-only-input">{data?.transferNo || '212'}</div>
                        </div>
                        <div className="detail-group">
                            <label>Transfer From</label>
                            <div className="read-only-input">{data?.transferFrom || 'SHOP'}</div>
                        </div>
                        <div className="detail-group">
                            <label>Transfer To</label>
                            <div className="read-only-input">{data?.receiveLocation || 'WORKSHOP'}</div>
                        </div>
                        <div className="detail-group">
                            <label>Supervisor Name</label>
                            <div className="read-only-input">{data?.receivedBy || 'SWARUP NAG'}</div>
                        </div>
                        <div className="detail-group">
                            <label>Transported By</label>
                            <div className="read-only-input">{data?.transportedBy || 'BABURAM HEMBRAM'}</div>
                        </div>
                    </div>

                    <div className="item-details-section">
                        <h3 className="section-title">Item Details:</h3>
                        <div className="modal-table-wrapper">
                            <table className="modal-items-table">
                                <thead>
                                    <tr>
                                        <th>SI</th>
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
                        
                        <div className="modal-footer-totals">
                            <div className="total-label">TOTAL :</div>
                            <div className="total-box qty-box">18 Pcs</div>
                            <div className="total-box amount-box">5700.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockTransferDetailsModal;
