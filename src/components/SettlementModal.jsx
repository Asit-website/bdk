import React, { useState } from 'react';
import { X, Search, Filter, Download } from 'lucide-react';
import './SettlementModal.css';

const SettlementModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closeModal();
        }, 250);
    };

    const serviceRows = [
        { id: 1, checked: false, claimDate: '20/03/2025', partCode: 'DEMO', partName: 'FUEL INJECTION ASY', qty: 1 },
        { id: 2, checked: true, claimDate: '20/03/2025', partCode: 'DEMO', partName: 'FUEL INJECTION ASY', qty: 1 },
        { id: 3, checked: false, claimDate: '20/03/2025', partCode: 'DEMO', partName: 'FUEL INJECTION ASY', qty: 1 },
        { id: 4, checked: true, claimDate: '20/03/2025', partCode: 'DEMO', partName: 'FUEL INJECTION ASY', qty: 1 },
        { id: 5, checked: false, claimDate: '20/03/2025', partCode: 'DEMO', partName: 'FUEL INJECTION ASY', qty: 1 },
    ];

    return (
        <div className={`settlement-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`settlement-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="settlement-header-row">
                    <div className="settlement-header">Settlement</div>
                    <button type="button" className="settlement-close-btn" onClick={handleClose} aria-label="Close settlement popup">
                        <X size={18} />
                    </button>
                </div>

                <div className="settlement-body">
                    <div className="settlement-top-grid">
                        <div className="settlement-field">
                            <label>Settlement Date</label>
                            <input type="date" />
                        </div>
                        <div className="settlement-field">
                            <label>Party Name</label>
                            <select>
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="settlement-field claim-type">
                            <label>Claim Type</label>
                            <select>
                                <option>Credit Note</option>
                                <option>Product</option>
                            </select>
                        </div>
                        <div className="settlement-field">
                            <label>Amount</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="services-title-row">
                        <span>Services:</span>
                        <div className="services-tools">
                            <div className="services-mini-search">
                                <Search size={13} />
                                <input type="text" />
                            </div>
                            <button type="button" className="icon-btn"><Filter size={12} /></button>
                            <button type="button" className="icon-btn"><Download size={12} /></button>
                        </div>
                    </div>

                    <div className="services-table-wrap">
                        <table className="services-table">
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Claim Date</th>
                                    <th>Part Code</th>
                                    <th>Part Name</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {serviceRows.map((row) => (
                                    <tr key={row.id}>
                                        <td>
                                            <input type="checkbox" defaultChecked={row.checked} />
                                        </td>
                                        <td>{row.claimDate}</td>
                                        <td>{row.partCode}</td>
                                        <td>{row.partName}</td>
                                        <td>{row.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <button type="button" className="view-more-link">view more</button>

                    <div className="settlement-footer-actions">
                        <button type="button" className="btn-cancel" onClick={handleClose}>Cancel</button>
                        <button type="button" className="btn-save" onClick={handleClose}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettlementModal;
