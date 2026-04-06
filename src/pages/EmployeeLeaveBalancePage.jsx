import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import './EmployeeLeaveBalancePage.css';

const EmployeeLeaveBalancePage = () => {
    const navigate = useNavigate();

    const leaveItems = [
        { label: 'Leave Policy', path: '/master/employee/leave/policy' },
        { label: 'Leave Balance', path: '/master/employee/leave/balance' }
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
            <div className="leave-details-content">
                <div className="leave-header">
                    <div className="leave-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee')}>Employee Master</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Leave & Balance Details</span>
                    </div>
                    
                    <div className="staff-status-row">
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn">
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <h2 className="section-title-master">Leave & Balance Details</h2>

                <div className="leave-list-container">
                    {leaveItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="leave-list-item"
                            onClick={() => item.path && navigate(item.path)}
                        >
                            <span className="leave-item-label">{item.label}</span>
                            <ChevronRight size={18} color="#94a3b8" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeeLeaveBalancePage;
