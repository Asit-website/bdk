import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Edit2, Trash2, Plus, Upload, Search } from 'lucide-react';
import './ServiceJobCloseFormPage.css';
import JobCloseSearchModal from '../components/JobCloseSearchModal';

const ServiceJobCloseFormPage = () => {
    const navigate = useNavigate();
    const [showJobSearch, setShowJobSearch] = useState(false);

    const [rows, setRows] = useState([
        { id: 1, qty: '', unit: 'Sale', price: 'Without Tax', discount: '%', tax: 'Select Amount', amount: '' },
        { id: 2, qty: '', unit: 'Sale', price: 'Without Tax', discount: '%', tax: 'Select Amount', amount: '' },
    ]);

    const addRow = () => {
        const newId = rows.length > 0 ? Math.max(...rows.map((row) => row.id)) + 1 : 1;
        setRows([
            ...rows,
            { id: newId, qty: '', unit: 'Sale', price: 'Without Tax', discount: '%', tax: 'Select Amount', amount: '' },
        ]);
    };

    const deleteRow = (id) => {
        if (rows.length > 1) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <span className="breadcrumb-separator">{'>'}</span>
                <span className="breadcrumb-item active">Job Close/Bill Entry</span>
            </div>

            <div className="repair-form-card">
                <div className="repair-form-header">Repair Bill</div>

                <div className="repair-form-body">
                    <div className="repair-section">
                        <div className="repair-grid grid-5">
                            <div className="repair-field">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            <div className="repair-field">
                                <label>Bill No</label>
                                <input type="text" />
                            </div>
                            <div className="repair-field">
                                <label>Customer Name</label>
                                <div className="input-with-icon">
                                    <input type="text" />
                                    <button
                                        type="button"
                                        className="search-icon-btn"
                                        onClick={() => setShowJobSearch(true)}
                                    >
                                        <Search size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="repair-field">
                                <label>Supervisor Name</label>
                                <input type="text" />
                            </div>
                            <div className="repair-field">
                                <label>Machanic Name</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="repair-grid grid-6 mt-10">
                            <div className="repair-field"><label>Engine No</label><input type="text" /></div>
                            <div className="repair-field"><label>Chassis No</label><input type="text" /></div>
                            <div className="repair-field"><label>Model No</label><input type="text" /></div>
                            <div className="repair-field"><label>Customer Name</label><input type="text" /></div>
                            <div className="repair-field"><label>Mobile No</label><input type="text" /></div>
                            <div className="repair-field"><label>Address</label><textarea className="address-input" rows="1"></textarea></div>
                        </div>

                        <div className="repair-grid grid-3-btn mt-10">
                            <div className="repair-field"><label>Service / Labour Charge</label><input type="text" /></div>
                            <div className="repair-field"><label>Amount</label><input type="text" /></div>
                            <div className="repair-field repair-add-wrap">
                                <button type="button" className="repair-add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="repair-items-wrap">
                        <table className="repair-items-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '70px' }}>SL NO.</th>
                                    <th style={{ width: '120px' }}>Action</th>
                                    <th>Item</th>
                                    <th className="qty-col">Qty</th>
                                    <th className="unit-col">Unit</th>
                                    <th style={{ width: '150px' }}>Price/Unit</th>
                                    <th className="discount-col">Discount</th>
                                    <th style={{ width: '150px' }}>Tax</th>
                                    <th style={{ width: '120px' }}>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="repair-action-icons">
                                                <button type="button" className="repair-action edit"><Edit2 size={12} /></button>
                                                <button type="button" className="repair-action delete" onClick={() => deleteRow(row.id)}><Trash2 size={12} /></button>
                                                <button type="button" className="repair-action add" onClick={addRow}><Plus size={12} /></button>
                                            </div>
                                        </td>
                                        <td><input className="table-input item-input" type="text" placeholder="Enter item name" /></td>
                                        <td className="qty-col"><input className="table-input qty-input-small" type="number" defaultValue="1" /></td>
                                        <td className="unit-col">
                                            <select className="table-input unit-select-small">
                                                <option>{row.unit}</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div className="repair-price-input-wrapper">
                                                <span className="repair-price-label">Without Tax</span>
                                                <input className="table-input" type="number" defaultValue="0" />
                                            </div>
                                        </td>
                                        <td className="discount-col">
                                            <div className="repair-discount-input-group">
                                                <input className="table-input discount-input-small" type="number" defaultValue="0" />
                                                <span className="repair-discount-unit">%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <select className="table-input">
                                                <option>{row.tax}</option>
                                            </select>
                                        </td>
                                        <td><input className="table-input" type="number" readOnly defaultValue="0" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button type="button" className="repair-add-row-btn" onClick={addRow}>ADD ROW</button>

                        <div className="repair-table-totals-row">
                            <span>TOTAL</span>
                            <span className="repair-total-value">0</span>
                            <span className="repair-total-value">0</span>
                            <span className="repair-total-value">0</span>
                        </div>
                    </div>

                    <div className="repair-form-footer-section">
                        <div className="repair-footer-left">
                            <label>Attach Invoice</label>
                            <div className="repair-file-upload-box">
                                <input type="text" readOnly placeholder="Choose File" />
                                <button type="button" className="repair-upload-btn"><Upload size={16} /></button>
                            </div>
                        </div>

                        <div className="repair-footer-middle">
                            <label>Payment Type</label>
                            <div className="repair-payment-type-card">
                                <div className="repair-payment-type-head">
                                    <span>CASH</span>
                                    <span>UPI / AC</span>
                                </div>
                                <div className="repair-payment-type-inputs">
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="repair-due-text">DUE- <span>₹500.00</span></div>
                        </div>

                        <div className="repair-footer-right">
                            <div className="repair-footer-calculation-row">
                                <label>Discount</label>
                                <div className="repair-calc-inputs">
                                    <div className="repair-input-with-label">
                                        <input type="number" placeholder="0" />
                                        <span>(%)</span>
                                    </div>
                                    <span className="repair-input-separator">-</span>
                                    <div className="repair-input-with-label">
                                        <input type="number" placeholder="0" />
                                        <span>(₹)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="repair-footer-calculation-row">
                                <label>Basic Amount</label>
                                <input type="number" className="repair-calc-total-input" readOnly placeholder="0" />
                            </div>
                            <div className="repair-footer-calculation-row">
                                <label>GST Amount</label>
                                <input type="number" className="repair-calc-total-input" readOnly placeholder="0" />
                            </div>
                            <div className="repair-footer-calculation-row repair-total-bold">
                                <label>Total Amount</label>
                                <input type="number" className="repair-calc-total-input" readOnly placeholder="0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="repair-form-footer">
                    <button type="button" className="repair-action-btn cancel" onClick={() => navigate('/service/job-close')}>
                        CANCEL
                    </button>
                    <button type="button" className="repair-action-btn save">SAVE</button>
                </div>
            </div>

            {showJobSearch && <JobCloseSearchModal closeModal={() => setShowJobSearch(false)} />}
        </div>
    );
};

export default ServiceJobCloseFormPage;
