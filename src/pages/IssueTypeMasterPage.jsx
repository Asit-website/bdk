import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Plus, X, RefreshCcw, Maximize2, Edit2, Trash2, FileDown } from 'lucide-react';
import './ProductCategoryMasterPage.css'; 
import './SaleRateGstMasterPage.css'; // For Bulk Update styles

const IssueTypeMasterPage = () => {
    const navigate = useNavigate();
    const [issues, setIssues] = useState([
        { id: 1, name: 'PAID' },
        { id: 2, name: 'U/W' }
    ]);
    const [newValue, setNewValue] = useState('');

    const addIssue = () => {
        if (newValue.trim()) {
            setIssues([...issues, { id: issues.length + 1, name: newValue.toUpperCase() }]);
            setNewValue('');
        }
    };

    const deleteIssue = (id) => {
        setIssues(issues.filter(i => i.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Service Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Issue Type Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Issue Type Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="category-master-content">
                    {/* Create Section */}
                    <div className="create-section-pm">
                        <label>CREATE ISSUE TYPE</label>
                        <div className="create-input-group">
                            <input 
                                type="text" 
                                className="pm-input category-input" 
                                placeholder="ENTER ISSUE TYPE" 
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                            />
                            <button className="btn-add-pm" onClick={addIssue} style={{ backgroundColor: '#22c55e' }}>
                                <Plus size={18} strokeWidth={3} />
                            </button>
                        </div>
                    </div>

                    {/* Issue List Table */}
                    <div className="category-list-container">
                        <table className="category-table-pm">
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>SR NO.</th>
                                    <th>ISSUE TYPE</th>
                                    <th style={{ width: '120px', textAlign: 'center' }}>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {issues.map((issue, index) => (
                                    <tr key={issue.id}>
                                        <td>{index + 1}</td>
                                        <td>{issue.name}</td>
                                        <td>
                                            <div className="category-actions-pm">
                                                <button className="action-btn-pm edit"><Edit2 size={13} /></button>
                                                <button className="action-btn-pm delete" onClick={() => deleteIssue(issue.id)}><Trash2 size={13} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bulk Update Section */}
                    <div className="bulk-update-section" style={{ marginTop: '50px', marginBottom: '30px' }}>
                        <p className="bulk-label">Bulk update</p>
                        <button className="pm-btn-import">
                            <FileDown size={14} />
                            IMPORT EXCEL
                        </button>
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

export default IssueTypeMasterPage;
