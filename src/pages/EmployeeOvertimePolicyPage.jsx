import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeOvertimePolicyPage.css';

const EmployeeOvertimePolicyPage = () => {
    const navigate = useNavigate();
    const [policy, setPolicy] = useState({
        otAfter: '0',
        extraPayType: 'Fixed Hourly Rate',
        extraPayAmt: '0',
        holidayPayType: 'Fixed Daily Rate',
        holidayPayAmt: '0',
        weekOffPayType: 'Fixed Daily Rate',
        weekOffPayAmt: '0'
    });

    const updatePolicy = (field, val) => {
        setPolicy({ ...policy, [field]: val });
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

            <div className="overtime-policy-container">
                <div className="ot-header">
                    <div className="ot-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/penalty')}>Penalty & Overtime Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Overtime Policy</span>
                    </div>
                    
                    <div className="staff-status-row" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                        <span className="status-label">Staff Status</span>
                        <span className="status-badge-active">Active</span>
                        <button className="status-action-btn" style={{background: '#f1f5f9', border: 'none', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                            <MoreVertical size={18} color="#64748b" />
                        </button>
                    </div>
                </div>

                <div className="ot-form-header" style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '12px'}}>
                    <button className="btn-update-ot">Update Details</button>
                </div>

                <div className="ot-form">
                    {/* Working Days */}
                    <div className="ot-section">
                        <h3 className="ot-section-title">Working Days</h3>
                        <div className="ot-field-group">
                            <div className="ot-field">
                                <label className="ot-label">Overtime considered after <span className="required">*</span></label>
                                <div className="ot-input-box">
                                    <input 
                                        type="text" 
                                        className="ot-numeric-input" 
                                        value={policy.otAfter} 
                                        onChange={(e) => updatePolicy('otAfter', e.target.value)}
                                    />
                                    <span className="ot-unit">mins</span>
                                </div>
                            </div>
                            <div className="ot-row-dual">
                                <div className="ot-field" style={{flex: 1}}>
                                    <label className="ot-label">Extra Hours Pay <span className="required">*</span></label>
                                    <select 
                                        className="ot-select-box"
                                        value={policy.extraPayType}
                                        onChange={(e) => updatePolicy('extraPayType', e.target.value)}
                                    >
                                        <option>Fixed Hourly Rate</option>
                                        <option>Daily Rate Pro-rata</option>
                                    </select>
                                </div>
                                <div className="ot-field" style={{flex: 1}}>
                                    <label className="ot-label">Amount <span className="required">*</span></label>
                                    <div className="ot-amount-box">
                                        <span className="ot-symbol">₹</span>
                                        <input 
                                            type="text" 
                                            className="ot-numeric-input" 
                                            value={policy.extraPayAmt}
                                            onChange={(e) => updatePolicy('extraPayAmt', e.target.value)}
                                        />
                                        <span className="ot-unit">/hour</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Weekoffs and Holidays */}
                    <div className="ot-section">
                        <h3 className="ot-section-title">Weekoffs and Holidays</h3>
                        <div className="ot-field-group">
                            <div className="ot-row-dual">
                                <div className="ot-field" style={{flex: 1}}>
                                    <label className="ot-label">Public Holiday Pay <span className="required">*</span></label>
                                    <select 
                                        className="ot-select-box"
                                        value={policy.holidayPayType}
                                        onChange={(e) => updatePolicy('holidayPayType', e.target.value)}
                                    >
                                        <option>Fixed Daily Rate</option>
                                        <option>Double Daily Rate</option>
                                    </select>
                                </div>
                                <div className="ot-field" style={{flex: 1}}>
                                    <label className="ot-label">Amount <span className="required">*</span></label>
                                    <div className="ot-amount-box">
                                        <span className="ot-symbol">₹</span>
                                        <input 
                                            type="text" 
                                            className="ot-numeric-input" 
                                            value={policy.holidayPayAmt}
                                            onChange={(e) => updatePolicy('holidayPayAmt', e.target.value)}
                                        />
                                        <span className="ot-unit">/day</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ot-row-dual">
                                <div className="ot-field" style={{flex: 1}}>
                                    <label className="ot-label">Week Off Pay <span className="required">*</span></label>
                                    <select 
                                        className="ot-select-box"
                                        value={policy.weekOffPayType}
                                        onChange={(e) => updatePolicy('weekOffPayType', e.target.value)}
                                    >
                                        <option>Fixed Daily Rate</option>
                                        <option>Standard Day Pay</option>
                                    </select>
                                </div>
                                <div className="ot-field" style={{flex: 1}}>
                                    <label className="ot-label">Amount <span className="required">*</span></label>
                                    <div className="ot-amount-box">
                                        <span className="ot-symbol">₹</span>
                                        <input 
                                            type="text" 
                                            className="ot-numeric-input" 
                                            value={policy.weekOffPayAmt}
                                            onChange={(e) => updatePolicy('weekOffPayAmt', e.target.value)}
                                        />
                                        <span className="ot-unit">/day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeOvertimePolicyPage;
