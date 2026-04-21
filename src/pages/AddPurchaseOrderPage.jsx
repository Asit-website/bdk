import React, { useState } from 'react';
import { ChevronRight, Edit2, Trash2, Plus, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddPurchaseOrderPage.css';
import './AddPurchaseBillPage.css';

const AddPurchaseOrderPage = () => {
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
                <span className="breadcrumb-item active">Add Purchase</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Purchase</h2>
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
                        <label>Location</label>
                        <select className="form-input-select">
                            <option>Select Location</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Party Name</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Order No</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Product Type</label>
                        <select className="form-input-select">
                            <option>Select Product Type</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Part No</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Part Name</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Qty</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Rate</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Discount</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Total Amount</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group" style={{ justifyContent: 'flex-end' }}>
                        <label>&nbsp;</label>
                        <button className="btn-add-part">
                            <Plus size={18} /> ADD
                        </button>
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sr No.</th>
                                <th style={{ width: '120px' }}>Action</th>
                                <th className='date-col' style={{ width: '120px' }}>Date</th>
                                <th className='date-loc' style={{ width: '140px' }}>Location</th>
                                <th className='praty-name' style={{ width: '160px' }}>Praty Name</th>
                                <th style={{ width: '140px' }}>Order No</th>
                                <th className='part-no' style={{ width: '200px' }}>Part No</th>
                                <th className='part-no' style={{ width: '160px' }}>Part Name</th>
                                <th className='qty-col' style={{ width: '120px' }}>Qty</th>
                                <th style={{ width: '100px' }}>Rate</th>
                                <th style={{ width: '120px' }}>Discount</th>
                                <th style={{ width: '140px' }}>Total Amount</th>
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
                                            <button className="action-btn add"><Plus size={14} /></button>
                                        </div>
                                    </td>
                                    <td className='date-col'><input type="date" className="table-input" /></td>
                                    <td className='date-loc'><input type="text" className="table-input" /></td>
                                    <td className='praty-name'><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td className='part-no'><input type="text" className="table-input" /></td>
                                    <td className='part-no'><input type="text" className="table-input" /></td>
                                    <td className='qty-col'><input type="text" className="table-input" /></td>
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

export default AddPurchaseOrderPage;
