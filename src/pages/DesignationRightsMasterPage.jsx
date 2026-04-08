import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronRight, 
    X, 
    RefreshCcw, 
    Maximize2, 
    Search,
    ChevronDown
} from 'lucide-react';
import './ProductMasterPage.css';
import './DesignationRightsMasterPage.css';

const DesignationRightsMasterPage = () => {
    const navigate = useNavigate();

    // Mock data for the rights matrix
    const [rightsData, setRightsData] = useState([
        { id: 1, formType: 'WEB', formName: 'DASHBOARD' },
        { id: 2, formType: 'WEB', formName: 'LEAD ENQUIRY' },
        { id: 3, formType: 'WEB', formName: 'PURCHASE BILL' },
        { id: 4, formType: 'MOBILE', formName: 'ATTENDANCE' },
    ]);

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Designation Rights Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Designation Rights Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content-pm">
                    
                    {/* Filter Toolbar without labels and double icons */}
                    <div className="rights-toolbar">
                        <div className="pm-field">
                            <div className="select-wrapper">
                                <select className="pm-input">
                                    <option value="">Select Designation</option>
                                    <option value="1">SUPERVISOR</option>
                                    <option value="2">MECHANIC</option>
                                </select>
                            </div>
                        </div>
                        <div className="pm-field">
                            <div className="select-wrapper">
                                <select className="pm-input">
                                    <option value="">Select Module Type</option>
                                    <option value="WEB">WEB APPLICATION</option>
                                    <option value="MOBILE">MOBILE APPLICATION</option>
                                </select>
                            </div>
                        </div>
                        <div className="pm-field">
                            <div className="select-wrapper">
                                <select className="pm-input">
                                    <option value="">Select Rights Type</option>
                                    <option value="MENU">MENU RIGHTS</option>
                                    <option value="FORM">FORM RIGHTS</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn-preview-rights">
                            <Search size={16} /> PREVIEW RIGHTS
                        </button>
                    </div>

                    {/* Permissions Matrix Table - Checkboxes removed for now */}
                    <div className="pm-table-wrapper" style={{ border: '1px solid #e2e8f0', overflowX: 'auto' }}>
                        <table className="rights-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '50px' }}>Sl No</th>
                                    <th style={{ width: '100px' }}>Form Type</th>
                                    <th style={{ width: '180px' }}>Form Name</th>
                                    <th className="rights-checkbox-cell">Select All</th>
                                    <th className="rights-checkbox-cell">Add</th>
                                    <th className="rights-checkbox-cell">Edit</th>
                                    <th className="rights-checkbox-cell">View</th>
                                    <th className="rights-checkbox-cell">Delete</th>
                                    <th className="rights-checkbox-cell">Print</th>
                                    <th className="rights-checkbox-cell">Visible</th>
                                    <th className="rights-checkbox-cell">Rate Edible</th>
                                    <th className="rights-checkbox-cell">Date</th>
                                    <th className="rights-checkbox-cell">DocNo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rightsData.map((row, idx) => (
                                    <tr key={row.id}>
                                        <td>{idx + 1}</td>
                                        <td><span className="form-type-badge">{row.formType}</span></td>
                                        <td className="ma-bold">{row.formName}</td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                        <td className="rights-checkbox-cell"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Actions */}
                    <div className="rights-form-actions">
                        <button className="btn-rights-cancel" onClick={() => navigate(-1)}>Cancel</button>
                        <button className="btn-rights-save" onClick={() => navigate(-1)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignationRightsMasterPage;
