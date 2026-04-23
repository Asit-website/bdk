import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, Edit2, Trash2, Plus, Save, X, RefreshCcw, Maximize2, ChevronDown } from 'lucide-react';
import './AddStockTransferOutPage.css';
import './AddQuotationPage.css'; // Reusing established styles for consistency

const AddStockTransferOutPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([
        { id: 1, no: '221', date: '22/03/2026', code: 'SPMTWEB2212', name: 'FUEL PIPE ASSY', qty: 10, from: 'WORKSHOP', to: 'SHOP', rate: '50.00', amount: '500.00' },
        { id: 2, no: '225', date: '22/03/2025', code: 'SPMTWEB2212', name: 'FUEL PIPE ASSY', qty: 10, from: 'WORKSHOP', to: 'SHOP', rate: '50.00', amount: '500.00' },
        { id: 3, no: '302', date: '22/03/2026', code: 'SPMTWEB2212', name: 'FUEL PIPE ASSY', qty: 10, from: 'WORKSHOP', to: 'SHOP', rate: '50.00', amount: '500.00' }
    ]);

    const addRow = () => {
        const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
        setRows([...rows, { id: newId, no: '-', date: '01/04/2026', code: '', name: '', qty: 0, from: '', to: '', rate: '0.00', amount: '0.00' }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Sales</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Stock Transfer Out</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Add Stock Transfer</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Stock Transfer [OUT]</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                {/* Specific Pink/Red Banner from slide */}
                <div className="form-banner-red">
                    NEW STOCK TRANSFER [OUT]
                </div>

                {/* Top Row Form Section (5 Fields) */}
                <div className="form-grid-row-5">
                    <div className="form-group">
                        <label>Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" defaultValue="2026-04-01" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Transfer No</label>
                        <input type="text" className="form-input-text" placeholder="Enter Transfer No" />
                    </div>
                    <div className="form-group">
                        <label>Transfer From</label>
                        <select className="form-input-select">
                            <option>Select Location</option>
                            <option>WORKSHOP</option>
                            <option>MAIN BRANCH</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Transfer To</label>
                        <select className="form-input-select">
                            <option>Select Location</option>
                            <option>SHOP</option>
                            <option>BRANCH 1</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Transported By</label>
                        <select className="form-input-select">
                            <option>Select</option>
                            <option>Driver 1</option>
                            <option>Courier</option>
                        </select>
                    </div>
                </div>

                {/* Item Entry Row (6 Fields + Add Button) */}
                <div className="item-entry-section">
                    <div className="item-entry-grid">
                        <div className="form-group">
                            <label>Part Code</label>
                            <input type="text" className="form-input-text" placeholder="Enter Part Code" />
                        </div>
                        <div className="form-group">
                            <label>Part Name</label>
                            <input type="text" className="form-input-text" placeholder="Enter Part Name" />
                        </div>
                        <div className="form-group">
                            <label>Qty</label>
                            <input type="number" className="form-input-text" placeholder="0" />
                        </div>
                        <div className="form-group">
                            <label>Rate</label>
                            <input type="number" className="form-input-text" placeholder="0.00" />
                        </div>
                        <div className="form-group">
                            <label>Total Amount</label>
                            <input type="text" className="form-input-text readonly" placeholder="0.00" readOnly />
                        </div>
                        <div className="form-group">
                            <label>Supervisor Name</label>
                            <select className="form-input-select">
                                <option>Select</option>
                                <option>SWARUP NAG</option>
                                <option>SUJOY HANSDA</option>
                            </select>
                        </div>
                    </div>
                    <div className="add-btn-row">
                        <button className="btn-add-item-blue" onClick={addRow}>
                            <Plus size={16} /> ADD
                        </button>
                    </div>
                </div>

                {/* Items Table Section */}
                <div className="items-table-container">
                    <table className="items-table sto-table-variant">
                        <thead>
                            <tr>
                                <th style={{ width: '80px' }}>ACTION</th>
                                <th style={{ width: '60px' }}>Sl No</th>
                                <th>Transfer No</th>
                                <th>Date</th>
                                <th>Part Code</th>
                                <th>Part Name</th>
                                <th>Qty</th>
                                <th>Transfer From</th>
                                <th>Transfer To</th>
                                <th>Rate</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>
                                        <div className="item-actions">
                                            <button className="action-btn edit"><Edit2 size={12} /></button>
                                            <button className="action-btn delete" onClick={() => deleteRow(row.id)}><Trash2 size={12} /></button>
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>{row.no}</td>
                                    <td>{row.date}</td>
                                    <td>{row.code}</td>
                                    <td className="text-blue-bold">{row.name}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.from}</td>
                                    <td>{row.to}</td>
                                    <td>{row.rate}</td>
                                    <td style={{ textAlign: 'right' }}>{row.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="sto-summary-row">
                        <div className="sto-total-label">TOTAL</div>
                        <div className="sto-total-value">₹1500.00</div>
                    </div>
                </div>

                {/* Final Buttons */}
                <div className="form-action-buttons">
                    <button className="btn-cancel" onClick={() => navigate(-1)}>
                        <X size={16} /> CANCEL
                    </button>
                    <button className="btn-save">
                        <Save size={16} /> SAVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddStockTransferOutPage;
