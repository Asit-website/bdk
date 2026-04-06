import React from 'react';
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
  Trash2 
} from 'lucide-react';
import './LedgerAccountMasterPage.css';

const LedgerAccountMasterPage = () => {
    const navigate = useNavigate();

    const historyData = [
        { id: 1, date: '01/04/2026', type: 'Customer', name: 'ASIT SAHU', mobile: '9876543210', dist: 'Bankura', state: 'West Bengal' },
        { id: 2, date: '28/03/2026', type: 'Vendor', name: 'BIKASH DE', mobile: '8765432109', dist: 'Purulia', state: 'West Bengal' },
    ];

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
                <span className="breadcrumb-item active">Ledger Account New</span>
            </div>

            <div className="quotation-form-card">
                {/* Header */}
                <div className="form-header">
                    <h2 className="form-main-title">Ledger Account New</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content">
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
                            <button className="pm-btn-add-new" onClick={() => navigate('/master/account/ledger/add')}>
                                <Plus size={16} /> Add New Ledger
                            </button>
                        </div>

                        <div className="pm-table-wrapper">
                            <table className="pm-table">
                                <thead>
                                    <tr>
                                        <th>SI</th>
                                        <th>Create DaTte</th>
                                        <th>Party Type</th>
                                        <th>Ledger Name</th>
                                        <th>Mobile No</th>
                                        <th>Dist</th>
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
                                            <td>{row.mobile}</td>
                                            <td>{row.dist}</td>
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

export default LedgerAccountMasterPage;
