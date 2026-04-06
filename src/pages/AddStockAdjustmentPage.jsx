import React, { useState } from 'react';
import { ChevronRight, Edit2, Trash2, Plus, Save, X, MoreVertical, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddStockAdjustmentPage.css';
import './AddPurchaseBillPage.css';

const AddStockAdjustmentPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([{ id: 1 }]);
    const [openMenuId, setOpenMenuId] = useState(null);

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
                <span className="breadcrumb-item active">Add Stock Adjust</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Stock Adjust</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Date/No.</label>
                        <div className="stock-adjust-dual">
                            <input type="date" className="form-input-date" />
                            <input type="text" className="form-input-text" placeholder="No" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Branch</label>
                        <select className="form-input-select">
                            <option>Select Branch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Part Code</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Part Name</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>System Stock</label>
                        <input type="text" className="form-input-text" />
                    </div>

                    <div className="form-group">
                        <label>Add Stock</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Remove Stock</label>
                        <input type="text" className="form-input-text" />
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sl No.</th>
                                <th style={{ width: '160px' }}>Part Code</th>
                                <th style={{ width: '200px' }}>Part Name</th>
                                <th style={{ width: '140px' }}>System Stock</th>
                                <th style={{ width: '160px' }}>Current Stock Qty</th>
                                <th style={{ width: '80px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td className="action-cell">
                                        <button
                                            className={`action-dots ${openMenuId === row.id ? 'active' : ''}`}
                                            onClick={() => setOpenMenuId(openMenuId === row.id ? null : row.id)}
                                        >
                                            <MoreVertical size={16} />
                                        </button>
                                        {openMenuId === row.id && (
                                            <div className="stock-adjust-menu">
                                                <button onClick={() => setOpenMenuId(null)}>Edit</button>
                                                <button onClick={() => { deleteRow(row.id); setOpenMenuId(null); }}>Delete</button>
                                                <button onClick={() => setOpenMenuId(null)}>Print</button>
                                            </div>
                                        )}
                                    </td>
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

export default AddStockAdjustmentPage;
