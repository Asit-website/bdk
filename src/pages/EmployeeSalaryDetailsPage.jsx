import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeSalaryDetailsPage.css';

const EmployeeSalaryDetailsPage = () => {
    const navigate = useNavigate();
    const [salaryConfig, setSalaryConfig] = useState({
        effectiveDate: '2026-03',
        salaryType: 'Per Month',
        salaryStructure: 'Custom',
        ctcAmount: '13000'
    });

    return (
        <div className="page-container">
            {/* Top Common Bar */}
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

            <div className="salary-details-container">
                <div className="sd-header">
                    <div className="sd-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee')}>Employee Master</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Salary Details</span>
                    </div>
                    <button className="btn-update-salary">Update Details</button>
                </div>

                {/* Main Configuration Row */}
                <div className="sd-config-row">
                    <div className="sd-field">
                        <span className="sd-label">Effective Date of Change</span>
                        <input 
                            type="month" 
                            className="sd-input" 
                            value={salaryConfig.effectiveDate}
                            onChange={(e) => setSalaryConfig({...salaryConfig, effectiveDate: e.target.value})}
                        />
                    </div>
                    <div className="sd-field">
                        <span className="sd-label">Salary Type</span>
                        <select className="sd-select" value={salaryConfig.salaryType}>
                            <option>Per Month</option>
                            <option>Per Day</option>
                        </select>
                    </div>
                    <div className="sd-field">
                        <span className="sd-label">Salary Structure</span>
                        <select className="sd-select" value={salaryConfig.salaryStructure}>
                            <option>Custom</option>
                            <option>Standard</option>
                        </select>
                    </div>
                    <div className="sd-field">
                        <span className="sd-label">CTC Amount</span>
                        <input 
                            type="text" 
                            className="sd-input" 
                            value={salaryConfig.ctcAmount}
                            onChange={(e) => setSalaryConfig({...salaryConfig, ctcAmount: e.target.value})}
                        />
                    </div>
                </div>

                {/* Earnings Section */}
                <div className="sd-section">
                    <div className="sd-section-header">Earnings</div>
                    <div className="sd-table">
                        <div className="sd-table-head">
                            <span className="col-head">Heads</span>
                            <span className="col-calc">Calculation</span>
                            <span className="col-amount">Amount</span>
                        </div>
                        
                        <div className="sd-row">
                            <span className="col-head">Basic</span>
                            <div className="col-calc">
                                <select className="sd-row-select"><option>On Attendance</option></select>
                            </div>
                            <div className="col-amount">
                                <span>₹</span>
                                <input type="text" className="sd-row-input" defaultValue="10000" />
                            </div>
                        </div>

                        <div className="sd-row">
                            <span className="col-head">House Allowance</span>
                            <div className="col-calc">
                                <select className="sd-row-select"><option>On Attendance</option></select>
                            </div>
                            <div className="col-amount">
                                <span>₹</span>
                                <input type="text" className="sd-row-input" defaultValue="3000" />
                                <Trash2 size={14} color="#ef4444" style={{cursor: 'pointer'}} />
                            </div>
                        </div>

                        <div className="sd-add-link">
                            <Plus size={14} />
                            <span>Add Allowance</span>
                        </div>
                    </div>
                </div>

                {/* Compliances Section */}
                <div className="sd-section">
                    <div className="sd-section-header">Compliances</div>
                    
                    <div className="sd-sub-section">
                        <div className="sd-table-head">
                            <span className="col-head">Employer Contributions</span>
                            <span className="col-calc">Calculation</span>
                            <span className="col-included">Included in CTC</span>
                            <span className="col-amount">Amount</span>
                        </div>

                        {[
                            { head: 'Employer PF', calc: 'None', incl: true, amt: '0' },
                            { head: 'PF EDLI & Admin Charges', calc: 'None', incl: 'N/A', amt: '0' },
                            { head: 'Employer ESI', calc: 'None', incl: true, amt: '0' },
                            { head: 'Employer LWF', calc: 'None', incl: true, amt: '0' }
                        ].map((item, idx) => (
                            <div className="sd-row" key={idx}>
                                <span className="col-head">{item.head}</span>
                                <div className="col-calc">
                                    <select className="sd-row-select"><option>{item.calc}</option></select>
                                </div>
                                <div className="col-included">
                                    {item.incl === 'N/A' ? <span style={{fontSize: '11px', color: '#94a3b8'}}>N/A</span> : <input type="checkbox" className="sd-checkbox" defaultChecked={item.incl} />}
                                </div>
                                <div className="col-amount">
                                    <span>₹</span>
                                    <input type="text" className="sd-row-input" value={item.amt} readOnly />
                                </div>
                            </div>
                        ))}

                        <div className="sd-table-head mt-24">
                            <span className="col-head">Employee Contributions</span>
                            <span className="col-calc">Calculation</span>
                            <span className="col-amount">Amount</span>
                        </div>

                        {[
                            { head: 'Employee PF', calc: 'None', amt: '0' },
                            { head: 'Employee ESI', calc: 'None', amt: '0' },
                            { head: 'Professional Tax', calc: 'None', amt: '0' },
                            { head: 'Employee LWF', calc: 'None', amt: '0' },
                            { head: 'TDS', calc: 'System Calculated', amt: 'System Calculated' }
                        ].map((item, idx) => (
                            <div className="sd-row" key={idx}>
                                <span className="col-head">{item.head}</span>
                                <div className="col-calc">
                                    <select className="sd-row-select"><option>{item.calc}</option></select>
                                </div>
                                <div className="col-amount">
                                    {item.amt === 'System Calculated' ? 
                                        <span style={{fontSize: '12px', color: '#64748b'}}>{item.amt}</span> : 
                                        <><span>₹</span><input type="text" className="sd-row-input" value={item.amt} readOnly /></>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deductions Section */}
                <div className="sd-section">
                    <div className="sd-section-header">Deductions</div>
                    <div className="sd-table">
                        <div className="sd-table-head">
                            <span className="col-head">Heads</span>
                            <span className="col-calc">Calculation</span>
                            <span className="col-amount">Amount</span>
                        </div>
                        <div className="sd-row">
                            <div className="col-head" style={{fontSize: '12px', color: '#94a3b8', fontStyle: 'italic'}}>No Deductions Added</div>
                        </div>
                        <div className="sd-add-link">
                            <Plus size={14} />
                            <span>Add Deduction</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Total Footer Summary */}
            <div className="sd-footer-summary">
                <span>Total CTC: -</span>
                <div className="ctc-val">₹ {salaryConfig.ctcAmount}.00 / Month</div>
            </div>
        </div>
    );
};

export default EmployeeSalaryDetailsPage;
