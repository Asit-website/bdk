import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Plus, 
  X, 
  RefreshCcw, 
  Maximize2, 
  Search, 
  Filter, 
  Printer, 
  Download, 
  Edit2, 
  Trash2 
} from 'lucide-react';
import './BranchLocationMasterPage.css';
import './ProductMasterPage.css';
import './AddQuotationPage.css';

const BranchLocationMasterPage = () => {
    const navigate = useNavigate();

    const historyData = [
        { id: 1, date: '01/04/2026', type: 'BRANCH', name: 'MAIN BRANCH', city: 'BHUBANESWAR', state: 'ODISHA' },
        { id: 2, date: '28/03/2026', type: 'WAREHOUSE', name: 'CENTRAL WAREHOUSE', city: 'CUTTACK', state: 'ODISHA' },
    ];

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Branch Location Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Branch Location Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content-pm">
                    <div className="pm-history-view">
                        <div className="pm-history-header">
                            <div className="pm-history-left">
                                <div className="pm-sub-header">History</div>
                                <div className="pm-toolbar">
                                    <div className="pm-search-box">
                                        <Search size={14} className="pm-search-icon" />
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <Filter size={18} className="pm-tool-icon" />
                                    <Printer size={18} className="pm-tool-icon green-icon" />
                                    <Download size={18} className="pm-tool-icon blue-icon" />
                                </div>
                            </div>
                            <button className="pm-btn-add-new" onClick={() => navigate('/master/location/branch/add')}>
                                <Plus size={16} /> Add New
                            </button>
                        </div>

                        <div className="pm-table-wrapper">
                            <table className="pm-table">
                                <thead>
                                    <tr>
                                        <th>SI</th>
                                        <th>Create Date</th>
                                        <th>Location Type</th>
                                        <th>Location Name</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historyData.map((row, idx) => (
                                        <tr key={row.id}>
                                            <td>{idx + 1}.</td>
                                            <td>{row.date}</td>
                                            <td>{row.type}</td>
                                            <td>{row.name}</td>
                                            <td>{row.city}</td>
                                            <td>{row.state}</td>
                                            <td className="pm-action-cell">
                                                <button className="pm-action-btn edit"><Edit2 size={14} /></button>
                                                <button className="pm-action-btn delete"><Trash2 size={14} /></button>
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

export default BranchLocationMasterPage;
