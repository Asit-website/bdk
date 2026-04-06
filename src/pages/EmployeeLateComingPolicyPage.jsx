import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLateComingPolicyPage.css';

const EmployeeLateComingPolicyPage = () => {
    const navigate = useNavigate();
    const [policy, setPolicy] = useState({
        allowedDays: '0',
        graceMins: '0',
        useTiered: false,
        deductionType: 'Fixed Daily Rate',
        amount: '0'
    });

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

            <div className="late-coming-container">
                <div className="lc-header">
                    <div className="lc-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/penalty')}>Penalty & Overtime Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Late Coming Policy</span>
                    </div>
                    
                    <div className="staff-status-row" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn" style={{background: '#f1f5f9', border: 'none', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <div className="lc-form-header" style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '24px'}}>
                    <button className="btn-update-lc">Update Details</button>
                </div>

                <div className="lc-form">
                    {/* Allowed Days */}
                    <div className="lc-field">
                        <label className="lc-label">Allowed Late Days <span className="required">*</span></label>
                        <div className="lc-input-box">
                            <input 
                                type="text" 
                                className="lc-numeric-input" 
                                value={policy.allowedDays} 
                                onChange={(e) => setPolicy({...policy, allowedDays: e.target.value})}
                            />
                            <span className="lc-unit">days</span>
                        </div>
                    </div>

                    {/* Grace Period */}
                    <div className="lc-field">
                        <label className="lc-label">Only deduct if late by more than <span className="required">*</span></label>
                        <div className="lc-input-box">
                            <input 
                                type="text" 
                                className="lc-numeric-input" 
                                value={policy.graceMins} 
                                onChange={(e) => setPolicy({...policy, graceMins: e.target.value})}
                            />
                            <span className="lc-unit">mins</span>
                        </div>
                    </div>

                    {/* Deduction Toggle */}
                    <div className="lc-field">
                        <label className="lc-label">Change deduction based on how late they arrive? <span className="required">*</span></label>
                        <div className="lc-radio-group">
                            <div 
                                className={`lc-radio-card ${!policy.useTiered ? 'active' : ''}`}
                                onClick={() => setPolicy({...policy, useTiered: false})}
                            >
                                <input type="radio" checked={!policy.useTiered} readOnly className="lc-radio-circle" />
                                <span className="lc-radio-text">No, use a fixed deduction for late arrival</span>
                            </div>
                            <div 
                                className={`lc-radio-card ${policy.useTiered ? 'active' : ''}`}
                                onClick={() => setPolicy({...policy, useTiered: true})}
                            >
                                <input type="radio" checked={policy.useTiered} readOnly className="lc-radio-circle" />
                                <span className="lc-radio-text">Yes, deduct based on how late they arrived</span>
                            </div>
                        </div>
                    </div>

                    {/* Deduction Row */}
                    <div className="lc-deduct-row">
                        <div className="lc-field" style={{flex: 1}}>
                            <label className="lc-label">Deduction <span className="required">*</span></label>
                            <select 
                                className="lc-select-box"
                                value={policy.deductionType}
                                onChange={(e) => setPolicy({...policy, deductionType: e.target.value})}
                            >
                                <option>Fixed Daily Rate</option>
                                <option>Hourly Rate</option>
                            </select>
                        </div>
                        <div className="lc-field" style={{flex: 1}}>
                            <label className="lc-label">Amount <span className="required">*</span></label>
                            <div className="lc-amount-box">
                                <span className="lc-symbol">₹</span>
                                <input 
                                    type="text" 
                                    className="lc-numeric-input" 
                                    value={policy.amount}
                                    onChange={(e) => setPolicy({...policy, amount: e.target.value})}
                                />
                                <span className="lc-unit">/day</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeLateComingPolicyPage;
