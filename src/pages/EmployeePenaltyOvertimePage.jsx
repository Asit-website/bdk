import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import './EmployeePenaltyOvertimePage.css';

const EmployeePenaltyOvertimePage = () => {
    const navigate = useNavigate();

    const penaltyItems = [
        { label: 'Early Leaving Policy', path: '/master/employee/penalty/early-leaving' },
        { label: 'Late Coming Policy', path: '/master/employee/penalty/late-coming' },
        { label: 'Overtime Policy', path: '/master/employee/penalty/overtime' }
    ];

    return (
        <div className="page-container">
            {/* Top Bar - Consistent across app */}
            <div className="service-dashboard-top mb-16">
                <div className="service-dashboard-search">
                    <Search size={16} color="#64748b" />
                    <input type="text" placeholder="Search Transactions" />
                </div>

                <div className="filter-actions">
                    <button className="btn btn-new-service">+ Add New Service</button>
                    <button className="btn btn-sale">+ Add Sale</button>
                    <button className="btn btn-purchase">+ Add Purchase</button>
                    <button className="btn-icon"><Plus size={18} /></button>
                    <button className="btn-icon muted"><MoreVertical size={18} /></button>
                </div>
            </div>

            {/* Content Area */}
            <div className="penalty-details-content">
                <div className="penalty-header">
                    <div className="penalty-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee')}>Employee Master</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Penalty & Overtime Details</span>
                    </div>
                    
                    <div className="staff-status-row" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn" style={{background: '#f1f5f9', border: 'none', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <h2 className="section-title-master">Penalty & Overtime Details</h2>

                <div className="penalty-list-container">
                    {penaltyItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="penalty-list-item"
                            onClick={() => item.path && navigate(item.path)}
                        >
                            <span className="penalty-item-label">{item.label}</span>
                            <ChevronRight size={18} color="#94a3b8" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeePenaltyOvertimePage;
