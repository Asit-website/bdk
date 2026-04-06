import React from 'react';
import { X, Search } from 'lucide-react';
import './PurchaseReturnBillModal.css';

const PurchaseReturnBillModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const purchaseRows = [
        { id: 1, date: '22-Mar-2025', billNo: '11', billType: 'Credit', purType: 'Intra State', party: 'BTL EPC LTD', location: 'Workshop', amount: '4,153.00' },
        { id: 2, date: '20-Mar-2025', billNo: '14', billType: 'Credit', purType: 'Intra State', party: 'BTL EPC LTD', location: 'Workshop', amount: '8,464.00' },
        { id: 3, date: '10-Mar-2025', billNo: '9', billType: 'Credit', purType: 'Intra State', party: 'BTL EPC LTD', location: 'Workshop', amount: '6,319.00' },
    ];

    const itemRows = [
        { id: 1, partNo: 'SPMTW8EN000116', desc: '', purQty: '20.00', retQty: '20.00', rate: '291.00', discAmt: '0.00', discType: 'Value', gst: '688.00', freight: '0.00', amount: '6,518.40' },
        { id: 2, partNo: 'SPMTW8EN040010', desc: '', purQty: '25.00', retQty: '25.00', rate: '133.00', discAmt: '0.00', discType: 'Value', gst: '1,098.00', freight: '0.00', amount: '3,724.00' },
        { id: 3, partNo: 'SPMTW8EN040020', desc: '', purQty: '25.00', retQty: '25.00', rate: '585.00', discAmt: '0.00', discType: 'Value', gst: '2,854.00', freight: '0.00', amount: '16,380.00' },
    ];

    return (
        <div className="modal-overlay fade-in">
            <div className="modal-content-wrapper scale-up purchase-return-modal">
                <div className="modal-header pr-modal-header">
                    <h3 className="modal-title">Select Bill</h3>
                    <button className="close-btn" onClick={onClose}>
                        <X size={18} />
                    </button>
                </div>

                <div className="pr-modal-body">
                    <div className="pr-filter-row">
                        <div className="pr-field">
                            <label>Date From</label>
                            <input type="date" className="pr-input" />
                        </div>
                        <div className="pr-field">
                            <label>Date To</label>
                            <input type="date" className="pr-input" />
                        </div>
                        <div className="pr-field">
                            <label>Party</label>
                            <input type="text" className="pr-input" />
                        </div>
                        <div className="pr-field small">
                            <label>Bill No.</label>
                            <input type="text" className="pr-input" />
                        </div>
                        <div className="pr-field small checkbox">
                            <label>Prev. Year</label>
                            <input type="checkbox" />
                        </div>
                        <button className="pr-search-btn"><Search size={14} /> Search</button>
                    </div>

                    <div className="pr-section-title">Select Bill Return Items (Purchase Details)</div>
                    <div className="pr-table-wrapper">
                        <table className="pr-table">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Pur. Date</th>
                                    <th>Bill No.</th>
                                    <th>Bill Type</th>
                                    <th>Pur. Type</th>
                                    <th>Party Name</th>
                                    <th>Location</th>
                                    <th>Net Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchaseRows.map((row) => (
                                    <tr key={row.id}>
                                        <td><button className="pr-select-btn">Select</button></td>
                                        <td>{row.date}</td>
                                        <td>{row.billNo}</td>
                                        <td>{row.billType}</td>
                                        <td>{row.purType}</td>
                                        <td>{row.party}</td>
                                        <td>{row.location}</td>
                                        <td className="text-right">{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="pr-table-wrapper">
                        <table className="pr-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Part No.</th>
                                    <th>Description</th>
                                    <th>Pur. Qty</th>
                                    <th>Ret. Qty</th>
                                    <th>Rate</th>
                                    <th>Disc. Amt</th>
                                    <th>Disc. Type</th>
                                    <th>GST</th>
                                    <th>Freight</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemRows.map((row) => (
                                    <tr key={row.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{row.partNo}</td>
                                        <td>{row.desc}</td>
                                        <td>{row.purQty}</td>
                                        <td><input type="text" className="pr-mini-input" defaultValue={row.retQty} /></td>
                                        <td>{row.rate}</td>
                                        <td>{row.discAmt}</td>
                                        <td>{row.discType}</td>
                                        <td>{row.gst}</td>
                                        <td>{row.freight}</td>
                                        <td className="text-right">{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="modal-footer pr-modal-footer">
                    <button className="btn-save" onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseReturnBillModal;
