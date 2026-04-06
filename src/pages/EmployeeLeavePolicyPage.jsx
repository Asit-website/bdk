import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLeavePolicyPage.css';

const EmployeeLeavePolicyPage = () => {
    const navigate = useNavigate();
    const [leaveCycle, setLeaveCycle] = useState('Yearly');
    const [leaveStats, setLeaveStats] = useState({
        privileged: { allowed: '0', carry: '0' },
        sick: { allowed: '0', carry: '0' },
        casual: { allowed: '0', carry: '0' },
        od: { allowed: '0', carry: '0' }
    });

    const updateStat = (type, field, val) => {
        setLeaveStats({
            ...leaveStats,
            [type]: { ...leaveStats[type], [field]: val }
        });
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

            <div className="leave-policy-container">
                <div className="lp-header">
                    <div className="lp-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/leave')}>Leave & Balance Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Leave Policy</span>
                    </div>
                    
                    <div className="staff-status-row">
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn">
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                        <button className="btn-update-policy ml-12">Update Details</button>
                    </div>
                </div>

                <div className="lp-cycle-selector">
                    <span className="cycle-label">Leave Cycle</span>
                    <div className="cycle-options">
                        <label className="cycle-option">
                            <input 
                                type="radio" 
                                name="cycle" 
                                className="cycle-radio" 
                                value="Monthly"
                                checked={leaveCycle === 'Monthly'}
                                onChange={() => setLeaveCycle('Monthly')}
                            />
                            <span>Monthly</span>
                        </label>
                        <label className="cycle-option">
                            <input 
                                type="radio" 
                                name="cycle" 
                                className="cycle-radio" 
                                value="Yearly"
                                checked={leaveCycle === 'Yearly'}
                                onChange={() => setLeaveCycle('Yearly')}
                            />
                            <span>Yearly</span>
                        </label>
                    </div>
                </div>

                {/* Sections */}
                {[
                    { id: 'privileged', title: 'Privileged Leave' },
                    { id: 'sick', title: 'Sick Leave' },
                    { id: 'casual', title: 'Casual Leave' },
                    { id: 'od', title: '0.5 day' }
                ].map((section) => (
                    <div className="lp-section" key={section.id}>
                        <h3 className="lp-section-title">{section.title}</h3>
                        <div className="lp-field-group">
                            <div className="lp-row">
                                <span className="lp-row-label">Allowed Leaves</span>
                                <div className="lp-input-wrap">
                                    <input 
                                        type="text" 
                                        className="lp-input" 
                                        value={leaveStats[section.id].allowed} 
                                        onChange={(e) => updateStat(section.id, 'allowed', e.target.value)}
                                    />
                                    <span className="lp-inline-label">leaves per year</span>
                                </div>
                            </div>
                            <div className="lp-row">
                                <span className="lp-row-label">Carry Forward Leaves</span>
                                <div className="lp-input-wrap">
                                    <input 
                                        type="text" 
                                        className="lp-input" 
                                        value={leaveStats[section.id].carry} 
                                        onChange={(e) => updateStat(section.id, 'carry', e.target.value)}
                                    />
                                    <span className="lp-inline-label">leaves on year end</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="lp-add-link">
                    <Plus size={16} />
                    <span>Add Leave Type</span>
                </div>
            </div>
        </div>
    );
};

export default EmployeeLeavePolicyPage;
