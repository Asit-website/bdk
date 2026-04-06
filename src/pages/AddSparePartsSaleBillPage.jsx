import React, { useState } from 'react';
import { ChevronRight, Calendar, Edit2, Trash2, Plus, Upload, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddSparePartsSaleBillPage.css';

const AddSparePartsSaleBillPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([
        { id: 1, partNo: '', partName: '', qty: 0, unit: 'Nos', amount: 0 }
    ]);

    const addRow = () => {
        const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
        setRows([...rows, { id: newId, partNo: '', partName: '', qty: 0, unit: 'Nos', amount: 0 }]);
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
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Sales</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Spare Parts & Attachment</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Add Sale Bill</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Sale Bill</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                {/* Top Form Section - 4 Column Grid */}
                <div className="form-grid">
                    <div className="form-group">
                        <label>Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" defaultValue="2026-03-15" />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Bill No</label>
                        <input type="text" className="form-input-text readonly" value="INV-2024-001" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Sale Type</label>
                        <select className="form-input-select">
                            <option value="cash">Cash</option>
                            <option value="credit">Credit</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Branch</label>
                        <select className="form-input-select">
                            <option value="">Select Branch</option>
                            <option value="shop">Shop</option>
                            <option value="workshop">Workshop</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Party Name</label>
                        <select className="form-input-select">
                            <option value="">Search or Select Party</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Chassis No/Engine No</label>
                        <select className="form-input-select">
                            <option value="">Select Chassis/Engine No</option>
                            <option value="c1">CH123456</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Mobile No</label>
                        <input type="text" className="form-input-text readonly" placeholder="Enter Mobile No" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-input-text readonly" placeholder="Enter Address" readOnly />
                    </div>
                </div>

                {/* Items Table Section */}
                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '60px' }}>SR NO.</th>
                                <th style={{ width: '100px' }}>ACTION</th>
                                <th style={{ width: '150px' }}>PART NO.</th>
                                <th>Part Name</th>
                                <th className="qty-col">QTY</th>
                                <th className="unit-col">UNIT</th>
                                <th style={{ width: '180px' }}>PRICE/UNIT</th>
                                <th className="dis-qty">DISCOUNT</th>
                                <th style={{ width: '150px' }}>TAX</th>
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
                                            <button className="action-btn delete" onClick={() => deleteRow(row.id)}><Trash2 size={14} /></button>
                                            <button className="action-btn add" onClick={addRow}><Plus size={14} /></button>
                                        </div>
                                    </td>
                                    <td><input type="text" placeholder="Enter Part No" className="table-input" /></td>
                                    <td><input type="text" placeholder="Enter Part Name" className="table-input" /></td>
                                    <td className="qty-col"><input type="text" placeholder="0" className="table-input" /></td>
                                    <td className="unit-col">
                                        <select className="table-input">
                                            <option value="Nos">NO</option>
                                            <option value="Set">SET</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="table-input-with-sublabel">
                                            <span className="sublabel-top">Without Tax</span>
                                            <input type="text" placeholder="0" className="table-input" />
                                        </div>
                                    </td>
                                    <td className="dis-qty">
                                        <div className="table-input-with-sublabel">
                                            <input type="text" placeholder="0" className="table-input" />
                                            <span className="unit-label">%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-input-combined">
                                            <div className="input-row">
                                                <span className="row-label">Select</span>
                                                <select className="simple-select">
                                                    <option>GST 18%</option>
                                                </select>
                                            </div>
                                            <div className="input-row">
                                                <span className="row-label">Amount</span>
                                                <input type="text" placeholder="0" className="simple-input" readOnly />
                                            </div>
                                        </div>
                                    </td>
                                    <td><input type="text" placeholder="0" className="table-input" style={{ textAlign: 'right', backgroundColor: '#f8fafc' }} readOnly /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="add-row-btn" onClick={addRow}>ADD ROW</button>

                    <div className="table-totals-row-new">
                        <div className="total-label-cell">TOTAL</div>
                        <div className="total-value">0</div>
                        <div className="total-value">0</div>
                        <div className="total-value">0</div>
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

                {/* Final Buttons */}
                <div className="form-action-buttons">
                    <button className="btn-cancel" onClick={() => navigate(-1)}>CANCEL</button>
                    <button className="btn-save"><Save size={16} /> SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default AddSparePartsSaleBillPage;
