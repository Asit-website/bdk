import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLeaveBalanceConfigPage.css';

const EmployeeLeaveBalanceConfigPage = () => {
    const navigate = useNavigate();
    const [balances, setBalances] = useState({
        privileged: '0',
        sick: '0',
        casual: '-6',
        halfDay: '0'
    });

    const updateBalance = (type, val) => {
        setBalances({ ...balances, [type]: val });
    };

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

            <div className="leave-balance-container">
                <div className="lbc-header">
                    <div className="lbc-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/leave')}>Leave & Balance Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Leave Balance</span>
                    </div>
                    
                    <div className="staff-status-row">
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn">
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                        <button className="btn-update-balance ml-12">Update Details</button>
                    </div>
                </div>

                <div className="lbc-table">
                    <div className="lbc-table-header">
                        <span>Leave Type</span>
                        <span>Remaining Balance</span>
                    </div>

                    {[
                        { id: 'privileged', label: 'Privileged Leave' },
                        { id: 'sick', label: 'Sick Leave' },
                        { id: 'casual', label: 'Casual Leave' },
                        { id: 'halfDay', label: '0.5 Day' }
                    ].map((row) => (
                        <div className="lbc-row" key={row.id}>
                            <span className="lbc-type-name">{row.label}</span>
                            <div className="lbc-input-wrap">
                                <input 
                                    type="text" 
                                    className="lbc-input" 
                                    value={balances[row.id]} 
                                    onChange={(e) => updateBalance(row.id, e.target.value)}
                                />
                                <span className="lbc-inline-label">leaves</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeeLeaveBalanceConfigPage;
