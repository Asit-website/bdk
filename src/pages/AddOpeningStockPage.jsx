import React, { useState } from 'react';
import { ChevronRight, Edit2, Trash2, Plus, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddOpeningStockPage.css';
import './AddPurchaseBillPage.css';

const AddOpeningStockPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([{ id: 1 }, { id: 2 }]);

    const addRow = () => {
        setRows([...rows, { id: Date.now() }]);
    };

    const deleteRow = (id) => {
        if (rows.length > 1) {
            setRows(rows.filter(row => row.id !== id));
        }
    };

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Add Opening Stock</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Opening Stock</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-input-date" />
                    </div>
                    <div className="form-group">
                        <label>Model</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Model Description</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Chassis No</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Engine No</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <select className="form-input-select">
                            <option>Select Location</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Battery Make</label>
                        <select className="form-input-select">
                            <option>Select Battery Make</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Battery Sl No.</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Rate</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>COST</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>SGST</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Total</label>
                        <input type="text" className="form-input-text" />
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sr No.</th>
                                <th style={{ width: '100px' }}>Action</th>
                                <th className='date-col' style={{ width: '110px' }}>Date</th>
                                <th className="col-model">Model</th>
                                <th style={{ width: '140px' }}>Engine No</th>
                                <th style={{ width: '140px' }}>Chassis No</th>
                                <th style={{ width: '140px' }}>Battery Sl No.</th>
                                <th>Model Description</th>
                                <th style={{ width: '120px' }}>Location</th>
                                <th className="col-rate">Rate</th>
                                <th className="col-cost">COST</th>
                                <th className="col-sgst">SGST</th>
                                <th className="col-total">Total</th>
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
                                        </div>
                                    </td>
                                    <td className='date-col'><input type="date" className="table-input" /></td>
                                    <td className='col-model'><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="add-row-btn" onClick={addRow}>ADD ROW</button>
                </div>

                <div className="form-action-buttons opening-actions">
                    <button className="btn-cancel" onClick={() => navigate(-1)}><X size={16} /> CANCEL</button>
                    <button className="btn-save"><Save size={16} /> SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default AddOpeningStockPage;
