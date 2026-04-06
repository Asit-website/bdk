import React, { useState } from 'react';
import { ChevronRight, Calendar, Edit2, Trash2, Plus, Upload, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddEstimatePage.css';

const AddEstimatePage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([
        { id: 1, partNo: '', partName: '', qty: 1, unit: 'Set', priceUnit: 'Without Tax', discount: 0, tax: 'GST 18%', amount: 0 },
        { id: 2, partNo: '', partName: '', qty: 1, unit: 'Set', priceUnit: 'Without Tax', discount: 0, tax: 'Select', amount: 0 },
        { id: 3, partNo: '', partName: '', qty: 1, unit: 'Set', priceUnit: 'Without Tax', discount: 0, tax: 'Select', amount: 0 }
    ]);

    const addRow = () => {
        const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
        setRows([...rows, { id: newId, partNo: '', partName: '', qty: 1, unit: 'Set', priceUnit: 'Without Tax', discount: 0, tax: 'Select', amount: 0 }]);
    };

    const deleteRow = (id) => {
        if (rows.length > 1) {
            setRows(rows.filter(row => row.id !== id));
        }
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item" onClick={() => navigate('/')}>Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Sales</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Spare Parts & Attachment</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Add Estimate</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Estimate</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                {/* Top Form Section */}
                <div className="form-grid">
                    <div className="form-group">
                        <label>Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" defaultValue="2026-03-12" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Estimate No</label>
                        <input type="text" className="form-input-text readonly" value="EST-1025" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Branch</label>
                        <select className="form-input-select">
                            <option>Main Branch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Chassis No</label>
                        <input type="text" className="form-input-text" placeholder="Enter Chassis No" />
                    </div>
                    <div className="form-group">
                        <label>Party Name</label>
                        <input type="text" className="form-input-text" placeholder="Search or Enter Party Name" />
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input type="text" className="form-input-text" placeholder="Mobile No" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-input-text" placeholder="Address" />
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
                                <th style={{ width: '150px' }}>PRICE/UNIT</th>
                                <th className="dis-qty">DISCOUNT</th>
                                <th style={{ width: '150px' }}>TAX</th>
                                <th style={{ width: '120px' }}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="item-actions">
                                            <button className="action-btn edit"><Edit2 size={14} /></button>
                                            <button className="action-btn delete" onClick={() => deleteRow(row.id)}><Trash2 size={14} /></button>
                                            <button className="action-btn add" onClick={addRow}><Plus size={14} /></button>
                                        </div>
                                    </td>
                                    <td><input type="text" className="table-input" placeholder="Part No" /></td>
                                    <td><input type="text" className="table-input" placeholder="Part Name" /></td>
                                    <td className="qty-col"><input type="number" className="table-input" defaultValue={row.qty} /></td>
                                    <td className="unit-col">
                                        <select className="table-input">
                                            <option>Set</option>
                                            <option>Pcs</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="price-input-wrapper">
                                            <span className="price-label">Without Tax</span>
                                            <input type="number" className="table-input" placeholder="0" />
                                        </div>
                                    </td>
                                    <td className="dis-qty">
                                        <div className="discount-input-group">
                                            <input type="number" className="table-input" placeholder="0" />
                                            <span className="discount-unit">%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tax-input-wrapper">
                                            <select className="table-input">
                                                <option>Select</option>
                                                <option selected={row.tax === 'GST 18%'}>GST 18%</option>
                                                <option>GST 12%</option>
                                                <option>GST 5%</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><input type="number" className="table-input" readOnly value="0" style={{ textAlign: 'right', backgroundColor: '#f8fafc' }} /></td>
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
                        <label>Attach File</label>
                        <div className="file-upload-box">
                            <input type="text" readOnly placeholder="Choose File" />
                            <button className="upload-btn"><Upload size={16} /></button>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-calculation-row">
                            <label>Discount</label>
                            <div className="calc-inputs" style={{ gap: '5px' }}>
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
                        <div className="footer-calculation-row total-bold" style={{ backgroundColor: '#eff6ff', borderRadius: '4px', padding: '10px' }}>
                            <label style={{ color: '#1e40af' }}>Total Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" style={{ color: '#1e40af', fontWeight: '800' }} />
                        </div>
                    </div>
                </div>

                {/* Final Buttons */}
                <div className="form-action-buttons">
                    <button className="btn-cancel" onClick={() => navigate(-1)}>CANCEL</button>
                    <button className="btn-save">SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default AddEstimatePage;
