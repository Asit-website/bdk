import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Plus, X, RefreshCcw, Maximize2, Edit2, Trash2 } from 'lucide-react';
import './ProductCategoryMasterPage.css'; // Reusing Category styles

const UomMasterPage = () => {
    const navigate = useNavigate();
    const [uoms, setUoms] = useState([
        { id: 1, name: 'PCS' },
        { id: 2, name: 'SET' },
        { id: 3, name: 'Litter' }
    ]);
    const [newValue, setNewValue] = useState('');

    const addUom = () => {
        if (newValue.trim()) {
            setUoms([...uoms, { id: uoms.length + 1, name: newValue }]);
            setNewValue('');
        }
    };

    const deleteUom = (id) => {
        setUoms(uoms.filter(u => u.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">UOM Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">UOM Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="category-master-content">
                    {/* Create Section */}
                    <div className="create-section-pm">
                        <label>CREATE</label>
                        <div className="create-input-group">
                            <input 
                                type="text" 
                                className="pm-input category-input" 
                                placeholder="ENTER UOM" 
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                            />
                            <button className="btn-add-pm" onClick={addUom} style={{ backgroundColor: '#22c55e' }}>
                                <Plus size={18} strokeWidth={3} />
                            </button>
                        </div>
                    </div>

                    {/* UOM List Table */}
                    <div className="category-list-container">
                        <table className="category-table-pm">
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>SR NO.</th>
                                    <th>UOM NAME</th>
                                    <th style={{ width: '120px', textAlign: 'center' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uoms.map((uom, index) => (
                                    <tr key={uom.id}>
                                        <td>{index + 1}</td>
                                        <td>{uom.name}</td>
                                        <td>
                                            <div className="category-actions-pm">
                                                <button className="action-btn-pm edit"><Edit2 size={13} /></button>
                                                <button className="action-btn-pm delete" onClick={() => deleteUom(uom.id)}><Trash2 size={13} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Actions */}
                    <div className="pm-form-footer" style={{ marginTop: '40px' }}>
                        <div></div>
                        <div className="pm-footer-right">
                            <button className="pm-btn-cancel" onClick={() => navigate(-1)}>CANCEL</button>
                            <button className="pm-btn-save">SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UomMasterPage;
