import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeEarlyLeavingPolicyPage.css';

const EmployeeEarlyLeavingPolicyPage = () => {
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

            <div className="early-leaving-container">
                <div className="el-header">
                    <div className="el-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/penalty')}>Penalty & Overtime Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Early Leaving Policy</span>
                    </div>
                    
                    <div className="staff-status-row" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn" style={{background: '#f1f5f9', border: 'none', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <div className="el-form-header" style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '24px'}}>
                    <button className="btn-update-el">Update Details</button>
                </div>

                <div className="el-form">
                    {/* Allowed Days */}
                    <div className="el-field">
                        <label className="el-label">Allowed Early Leaving Days <span className="required">*</span></label>
                        <div className="el-input-box">
                            <input 
                                type="text" 
                                className="el-numeric-input" 
                                value={policy.allowedDays} 
                                onChange={(e) => setPolicy({...policy, allowedDays: e.target.value})}
                            />
                            <span className="el-unit">days</span>
                        </div>
                    </div>

                    {/* Grace Period */}
                    <div className="el-field">
                        <label className="el-label">Only deduct if they leave earlier than <span className="required">*</span></label>
                        <div className="el-input-box">
                            <input 
                                type="text" 
                                className="el-numeric-input" 
                                value={policy.graceMins} 
                                onChange={(e) => setPolicy({...policy, graceMins: e.target.value})}
                            />
                            <span className="el-unit">mins</span>
                        </div>
                    </div>

                    {/* Deduction Toggle */}
                    <div className="el-field">
                        <label className="el-label">Change deduction based on how early they leave? <span className="required">*</span></label>
                        <div className="el-radio-group">
                            <div 
                                className={`el-radio-card ${!policy.useTiered ? 'active' : ''}`}
                                onClick={() => setPolicy({...policy, useTiered: false})}
                            >
                                <input type="radio" checked={!policy.useTiered} readOnly className="el-radio-circle" />
                                <span className="el-radio-text">No, use a fixed deduction for early leaving</span>
                            </div>
                            <div 
                                className={`el-radio-card ${policy.useTiered ? 'active' : ''}`}
                                onClick={() => setPolicy({...policy, useTiered: true})}
                            >
                                <input type="radio" checked={policy.useTiered} readOnly className="el-radio-circle" />
                                <span className="el-radio-text">Yes, deduct based on how early they left</span>
                            </div>
                        </div>
                    </div>

                    {/* Deduction Row */}
                    <div className="el-deduct-row">
                        <div className="el-field" style={{flex: 1}}>
                            <label className="el-label">Deduction <span className="required">*</span></label>
                            <select 
                                className="el-select-box"
                                value={policy.deductionType}
                                onChange={(e) => setPolicy({...policy, deductionType: e.target.value})}
                            >
                                <option>Fixed Daily Rate</option>
                                <option>Hourly Rate</option>
                            </select>
                        </div>
                        <div className="el-field" style={{flex: 1}}>
                            <label className="el-label">Amount <span className="required">*</span></label>
                            <div className="el-amount-box">
                                <span className="el-symbol">₹</span>
                                <input 
                                    type="text" 
                                    className="el-numeric-input" 
                                    value={policy.amount}
                                    onChange={(e) => setPolicy({...policy, amount: e.target.value})}
                                />
                                <span className="el-unit">/day</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeEarlyLeavingPolicyPage;
