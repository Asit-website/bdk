import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronRight, 
    X, 
    RefreshCcw, 
    Maximize2, 
    Plus, 
    Search,
    Filter,
    Printer,
    Download,
    Edit2,
    Trash2,
    Check
} from 'lucide-react';
import './ProductMasterPage.css';
import './DesignationMasterPage.css';

const DesignationMasterPage = () => {
    const navigate = useNavigate();
    
    // Mock data for history list
    const [designations, setDesignations] = useState([
        { id: 1, name: 'SUPERVISOR' },
        { id: 2, name: 'MECHANIC' },
    ]);

    const [newDesignation, setNewDesignation] = useState('');

    const handleAdd = () => {
        if (newDesignation.trim()) {
            setDesignations([...designations, { id: Date.now(), name: newDesignation.toUpperCase() }]);
            setNewDesignation('');
        }
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Designation Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Designation Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content-pm">
                    <div className="pm-history-view">
                        
                        {/* Designation Quick Add Form */}
                        <div className="designation-quick-add" style={{ paddingTop: '10px' }}>
                            <div className="pm-field" style={{ flex: '0 0 300px' }}>
                                <input 
                                    type="text" 
                                    className="pm-input" 
                                    placeholder="DESIGNATION" 
                                    value={newDesignation}
                                    onChange={(e) => setNewDesignation(e.target.value)}
                                />
                            </div>
                            <button className="pm-btn-add-new" onClick={handleAdd} style={{ marginBottom: '2px' }}>
                                <Plus size={16} /> Add
                            </button>
                        </div>

                        <div className="pm-table-wrapper" style={{ marginTop: '30px' }}>
                            <table className="pm-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '80px' }}>Si No</th>
                                        <th>Designation Name</th>
                                        <th className="text-center" style={{ width: '150px' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {designations.map((item, idx) => (
                                        <tr key={item.id}>
                                            <td>{idx + 1}</td>
                                            <td>{item.name}</td>
                                            <td className="pm-action-cell">
                                                <button className="pm-action-btn edit" style={{ color: '#22c55e' }}>
                                                    <Check size={14} />
                                                    <Edit2 size={12} style={{ marginLeft: '-4px' }}/>
                                                </button>
                                                <button className="pm-action-btn delete">
                                                    <Trash2 size={14} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignationMasterPage;
