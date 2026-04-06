import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Calendar,
    ChevronDown,
    Plus,
    Trash2,
    Upload,
    X,
    RefreshCcw,
    Maximize2,
    Edit2
} from 'lucide-react';
import './AddEstimatePage.css';
import './AddCounterChallanPage.css';

const AddCounterChallanPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([
        { id: 1, partNo: '', partName: '', qty: '', unit: 'Nos', amount: '' },
        { id: 2, partNo: '', partName: '', qty: '', unit: 'Nos', amount: '' }
    ]);

    const addRow = () => {
        setRows([...rows, { id: rows.length + 1, partNo: '', partName: '', qty: '', unit: 'Nos', amount: '' }]);
    };

    const removeRow = (id) => {
        if (rows.length > 1) {
            setRows(rows.filter(row => row.id !== id));
        }
    };

    return (
        <div className="page-container">
            <div className="quotation-form-card">
                {/* Header */}
                <div className="form-header">
                    <h2 className="form-main-title">Add New Challan</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                {/* Top Form Section - 4 Column Rows (4+4) */}
                <div className="form-grid">
                    <div className="form-group">
                        <label>Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" defaultValue="2026-03-15" />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Challan No.</label>
                        <input type="text" className="form-input-text readonly" value="CH-524" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Sale Type</label>
                        <select className="form-input-select">
                            <option value="" disabled selected>Select Type</option>
                            <option value="cash">Cash</option>
                            <option value="credit">Credit</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Branch</label>
                        <select className="form-input-select">
                            <option value="" disabled selected>Select Branch</option>
                            <option value="shop">Shop</option>
                            <option value="workshop">Workshop</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Party Name</label>
                        <input type="text" className="form-input-text" placeholder="Search or Enter Party Name" />
                    </div>
                    <div className="form-group">
                        <label>Chassis No/Engine No</label>
                        <select className="form-input-select">
                            <option value="" disabled selected>Select Chassis/Engine No</option>
                            <option value="c1">CH123456</option>
                            <option value="c2">CH789012</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input type="text" className="form-input-text" placeholder="Enter Mobile No" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-input-text" placeholder="Enter Address" />
                    </div>
                </div>

                {/* Items Table Section */}
                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>SR NO.</th>
                                <th style={{ width: '100px' }}>ACTION</th>
                                <th>Part No</th>
                                <th>Part Name</th>
                                <th className="qty-col">QTY</th>
                                <th className="unit-col">UNIT</th>
                                <th style={{ width: '150px' }}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                    <td>
                                        <div className="item-actions">
                                            <button className="action-btn edit"><Edit2 size={14} /></button>
                                            <button className="action-btn delete" onClick={() => removeRow(row.id)}><Trash2 size={14} /></button>
                                            <button className="action-btn add" onClick={addRow}><Plus size={14} /></button>
                                        </div>
                                    </td>
                                    <td><input type="text" placeholder="Part No" className="table-input" /></td>
                                    <td><input type="text" placeholder="Part Name" className="table-input" /></td>
                                    <td className="qty-col"><input type="text" placeholder="0" className="table-input" /></td>
                                    <td className="unit-col">
                                        <select className="table-input">
                                            <option value="Nos">Nos</option>
                                            <option value="Set">Set</option>
                                        </select>
                                    </td>
                                    <td><input type="text" placeholder="0" className="table-input" style={{ textAlign: 'right', backgroundColor: '#f8fafc' }} readOnly /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="add-row-btn" onClick={addRow}>ADD ROW</button>

                    <div className="table-totals-row">
                        <span style={{ fontWeight: '800' }}>TOTAL</span>
                        <span className="total-value">0</span>
                        <span className="total-value">0</span>
                        <span className="total-value">0</span>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="form-footer-section">
                    <div className="footer-left">
                        <label>Attach Invoice</label>
                        <div className="file-upload-box">
                            <input type="text" placeholder="Choose File" readOnly />
                            <button className="upload-btn"><Upload size={16} /></button>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-calculation-row">
                            <label>Discount</label>
                            <div className="calc-inputs" style={{ gap: '10px' }}>
                                <div className="input-with-label">
                                    <input type="number" placeholder="0" />
                                    <span>(%)</span>
                                </div>
                                <span className="input-separator">-</span>
                                <div className="input-with-label">
                                    <input type="number" placeholder="0" />
                                    <span>(₹)</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-calculation-row">
                            <label>Basic Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" />
                        </div>
                        <div className="footer-calculation-row">
                            <label>GST Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" />
                        </div>
                        <div className="footer-calculation-row total-bold">
                            <label>Total Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" />
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="form-action-buttons">
                    <button className="btn-cancel" onClick={() => navigate('/sales/spare/challan')}>CANCEL</button>
                    <button className="btn-save">SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default AddCounterChallanPage;
