import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Plus, X, RefreshCcw, Maximize2, Edit2, Trash2, FileDown } from 'lucide-react';
import './PaymentInPurpuseMasterPage.css'; // Reusing the same CSS for consistent layout

const PaymentTypeMasterPage = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([
        { id: 1, name: 'CASH' },
        { id: 2, name: 'UPI' }
    ]);
    const [newValue, setNewValue] = useState('');

    const addType = () => {
        if (newValue.trim()) {
            setTypes([...types, { id: Date.now(), name: newValue.toUpperCase() }]);
            setNewValue('');
        }
    };

    const deleteType = (id) => {
        setTypes(types.filter(t => t.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Account Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Payment Type</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Payment Type</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content">
                    {/* Create Section */}
                    <div className="purpose-create-section">
                        <div className="input-group">
                            <label>PAYMENT TYPE</label>
                            <div className="purpose-input-wrapper">
                                <input 
                                    type="text" 
                                    className="purpose-input" 
                                    placeholder="ENTER PAYMENT TYPE" 
                                    value={newValue}
                                    onChange={(e) => setNewValue(e.target.value)}
                                />
                                <button className="btn-add-purpose" onClick={addType}>
                                    <Plus size={18} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Type List Table */}
                    <div className="table-container-ledger" style={{ marginTop: '30px' }}>
                        <table className="ledger-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>SR NO.</th>
                                    <th>PAYMENT TYPE</th>
                                    <th style={{ width: '120px', textAlign: 'center' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {types.map((type, index) => (
                                    <tr key={type.id}>
                                        <td>{index + 1}</td>
                                        <td>{type.name}</td>
                                        <td>
                                            <div className="action-icons">
                                                <Edit2 size={14} className="icon-edit" />
                                                <Trash2 size={14} className="icon-delete" onClick={() => deleteType(type.id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Actions */}
                    <div className="form-footer-ledger">
                        <div className="footer-left">
                            <button className="btn-import-excel">
                                <FileDown size={14} /> IMPORT EXCEL
                            </button>
                        </div>
                        <div className="footer-right">
                            <button className="btn-cancel" onClick={() => navigate(-1)}>CANCEL</button>
                            <button className="btn-save">SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentTypeMasterPage;
