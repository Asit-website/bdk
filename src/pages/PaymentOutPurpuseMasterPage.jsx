import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Plus, X, RefreshCcw, Maximize2, Edit2, Trash2, FileDown } from 'lucide-react';
import './PaymentInPurpuseMasterPage.css';

const PaymentOutPurpuseMasterPage = () => {
    const navigate = useNavigate();
    const [purpuses, setPurpuses] = useState([
        { id: 1, name: 'SUPPLIER PAYMENT' },
        { id: 2, name: 'EXPENCE PAYMENT' },
        { id: 3, name: 'RETURN ADJUSTMENT' }
    ]);
    const [newValue, setNewValue] = useState('');

    const addPurpuse = () => {
        if (newValue.trim()) {
            setPurpuses([...purpuses, { id: Date.now(), name: newValue.toUpperCase() }]);
            setNewValue('');
        }
    };

    const deletePurpuse = (id) => {
        setPurpuses(purpuses.filter(p => p.id !== id));
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
                <span className="breadcrumb-item active">Payment Out Purpuse</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Payment Out Purpuse</h2>
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
                            <label>PURPUSE NAME</label>
                            <div className="purpose-input-wrapper">
                                <input 
                                    type="text" 
                                    className="purpose-input" 
                                    placeholder="ENTER PURPUSE NAME" 
                                    value={newValue}
                                    onChange={(e) => setNewValue(e.target.value)}
                                />
                                <button className="btn-add-purpose" onClick={addPurpuse}>
                                    <Plus size={18} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Purpuse List Table */}
                    <div className="table-container-ledger" style={{ marginTop: '30px' }}>
                        <table className="ledger-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>SR NO.</th>
                                    <th>PURPUSE NAME</th>
                                    <th style={{ width: '120px', textAlign: 'center' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purpuses.map((purpuse, index) => (
                                    <tr key={purpuse.id}>
                                        <td>{index + 1}</td>
                                        <td>{purpuse.name}</td>
                                        <td>
                                            <div className="action-icons">
                                                <Edit2 size={14} className="icon-edit" />
                                                <Trash2 size={14} className="icon-delete" onClick={() => deletePurpuse(purpuse.id)} />
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

export default PaymentOutPurpuseMasterPage;
