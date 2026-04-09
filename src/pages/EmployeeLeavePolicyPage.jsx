import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight, Trash2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLeavePolicyPage.css';

const EmployeeLeavePolicyPage = () => {
    const navigate = useNavigate();
    const [leaveCycle, setLeaveCycle] = useState('Yearly');
    const [leaveStats, setLeaveStats] = useState([
        { id: 'privileged', title: 'Privileged Leave', allowed: '0', carry: '0' },
        { id: 'sick', title: 'Sick Leave', allowed: '0', carry: '0' },
        { id: 'casual', title: 'Casual Leave', allowed: '0', carry: '0' },
        { id: 'od', title: '0.5 day', allowed: '0', carry: '0' }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customLeaveName, setCustomLeaveName] = useState('');

    const updateStat = (id, field, val) => {
        setLeaveStats(leaveStats.map(item => 
            item.id === id ? { ...item, [field]: val } : item
        ));
    };

    const deleteLeaveType = (id) => {
        setLeaveStats(leaveStats.filter(item => item.id !== id));
    };

    const handleAddLeave = () => {
        if (!customLeaveName.trim()) return;
        
        const newLeave = {
            id: `custom-${Date.now()}`,
            title: customLeaveName,
            allowed: '0',
            carry: '0'
        };
        
        setLeaveStats([...leaveStats, newLeave]);
        setCustomLeaveName('');
        setIsModalOpen(false);
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
                {leaveStats.map((section) => (
                    <div className="lp-section" key={section.id}>
                        <div className="lp-section-header">
                            <h3 className="lp-section-title">{section.title}</h3>
                            <button 
                                className="lp-delete-btn"
                                onClick={() => deleteLeaveType(section.id)}
                                title="Delete Leave Type"
                            >
                                <Trash2 size={16} color="#ef4444" />
                            </button>
                        </div>
                        
                        <div className="lp-field-group">
                            <div className="lp-row">
                                <span className="lp-row-label">Allowed Leaves</span>
                                <div className="lp-input-wrap">
                                    <input 
                                        type="text" 
                                        className="lp-input" 
                                        value={section.allowed} 
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
                                        value={section.carry} 
                                        onChange={(e) => updateStat(section.id, 'carry', e.target.value)}
                                    />
                                    <span className="lp-inline-label">leaves on year end</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="lp-add-link" onClick={() => setIsModalOpen(true)}>
                    <Plus size={16} />
                    <span>Add Leave Type</span>
                </div>
            </div>

            {/* Add Custom Paid Leave Modal */}
            {isModalOpen && (
                <div className="lp-modal-overlay">
                    <div className="lp-modal-content">
                        <div className="lp-modal-header">
                            <h4>Add Custom Paid Leave</h4>
                            <button className="lp-modal-close" onClick={() => setIsModalOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="lp-modal-body">
                            <div className="lp-modal-field">
                                <label>Custom Leave Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter leave name"
                                    value={customLeaveName}
                                    onChange={(e) => setCustomLeaveName(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="lp-modal-footer">
                            <button className="lp-modal-btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button className="lp-modal-btn-save" onClick={handleAddLeave}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeLeavePolicyPage;
