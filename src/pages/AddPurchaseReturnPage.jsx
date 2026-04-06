import React, { useState } from 'react';
import { ChevronRight, Edit2, Trash2, Plus, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PurchaseReturnBillModal from '../components/PurchaseReturnBillModal';
import './AddPurchaseReturnPage.css';
import './AddPurchaseBillPage.css';

const AddPurchaseReturnPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([{ id: 1 }, { id: 2 }]);
    const [isBillModalOpen, setIsBillModalOpen] = useState(false);

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
                <span className="breadcrumb-item active">Add Purchase Return</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Purchase Return</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Date/Return No</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Branch</label>
                        <select className="form-input-select">
                            <option>Select Branch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>&nbsp;</label>
                        <button className="add-row-btn" style={{ margin: 0, height: '40px' }} onClick={() => setIsBillModalOpen(true)}>+ Add Bill</button>
                    </div>

                    <div className="form-group">
                        <label>Bill Date</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Party Name</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Branch</label>
                        <input type="text" className="form-input-text" />
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sr No.</th>
                                <th style={{ width: '120px' }}>Action</th>
                                <th style={{ width: '120px' }}>Part No</th>
                                <th style={{ width: '160px' }}>Part Name</th>
                                <th className='qty-col'  style={{ width: '120px' }}>Purchase Qty</th>
                                <th style={{ width: '140px' }}>Purchase Amount</th>
                                <th style={{ width: '120px' }}>Return Qty</th>
                                <th style={{ width: '120px' }}>Rate</th>
                                <th style={{ width: '120px' }}>Branch</th>
                                <th style={{ width: '120px' }}>Rate</th>
                                <th style={{ width: '120px' }}>Return GST</th>
                                <th style={{ width: '140px' }}>Return Amount</th>
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
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td className='qty-pur'><input type="text" className="table-input" /></td>
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

                <div className="purchase-return-remark">
                    <label>Remark</label>
                    <textarea rows="3" className="form-input-text purchase-return-remark-input" />
                </div>

                <div className="form-action-buttons purchase-return-actions">
                    <button className="purchase-return-email">Send Email</button>
                    <button className="btn-cancel" onClick={() => navigate(-1)}><X size={16} /> CANCEL</button>
                    <button className="btn-save"><Save size={16} /> SAVE</button>
                </div>
            </div>

            <PurchaseReturnBillModal
                isOpen={isBillModalOpen}
                onClose={() => setIsBillModalOpen(false)}
            />
        </div>
    );
};

export default AddPurchaseReturnPage;
