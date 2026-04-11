import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight, Trash2, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import './EmployeeSalaryDetailsPage.css';

const EmployeeSalaryDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    // In a real app, you'd fetch the employee name by ID. 
    // Using the name from SS2 as requested.
    const employeeName = "BABURAM HAMBRAM";

    const [salaryConfig, setSalaryConfig] = useState({
        effectiveDate: '2026-03',
        salaryType: 'Per Month',
        salaryStructure: 'Custom',
        ctcAmount: '13000'
    });

    const [earnings, setEarnings] = useState([
        { id: 1, name: 'Basic', calculation: 'On Attendance', amount: '10000', deletable: false },
        { id: 2, name: 'House Allowance', calculation: 'On Attendance', amount: '3000', deletable: true }
    ]);

    const [deductions, setDeductions] = useState([]);

    const [showAllowanceModal, setShowAllowanceModal] = useState(false);
    const [showDeductionModal, setShowDeductionModal] = useState(false);
    const [customName, setCustomName] = useState('');

    const handleAddAllowance = () => {
        if (!customName.trim()) return;
        const newAllowance = {
            id: Date.now(),
            name: customName,
            calculation: 'On Attendance',
            amount: '0',
            deletable: true
        };
        setEarnings([...earnings, newAllowance]);
        setShowAllowanceModal(false);
        setCustomName('');
    };

    const handleAddDeduction = () => {
        if (!customName.trim()) return;
        const newDeduction = {
            id: Date.now(),
            name: customName,
            calculation: 'On Attendance',
            amount: '0',
            deletable: true
        };
        setDeductions([...deductions, newDeduction]);
        setShowDeductionModal(false);
        setCustomName('');
    };

    const handleDeleteEarning = (id) => {
        setEarnings(earnings.filter(item => item.id !== id));
    };

    const handleDeleteDeduction = (id) => {
        setDeductions(deductions.filter(item => item.id !== id));
    };

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
                        <span className="crumb-name">{employeeName}</span>
                        <ChevronRight size={14} color="#94a3b8" />
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
                        <select className="sd-select" value={salaryConfig.salaryType} onChange={(e) => setSalaryConfig({...salaryConfig, salaryType: e.target.value})}>
                            <option>Per Month</option>
                            <option>Per Day</option>
                        </select>
                    </div>
                    <div className="sd-field">
                        <span className="sd-label">Salary Structure</span>
                        <select className="sd-select" value={salaryConfig.salaryStructure} onChange={(e) => setSalaryConfig({...salaryConfig, salaryStructure: e.target.value})}>
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
                        
                        {earnings.map((earn) => (
                            <div className="sd-row" key={earn.id}>
                                <span className="col-head">{earn.name}</span>
                                <div className="col-calc">
                                    <select className="sd-row-select">
                                        <option>{earn.calculation}</option>
                                    </select>
                                </div>
                                <div className="col-amount">
                                    <span>₹</span>
                                    <input type="text" className="sd-row-input" defaultValue={earn.amount} />
                                    {earn.deletable && (
                                        <Trash2 
                                            size={14} 
                                            color="#ef4444" 
                                            style={{cursor: 'pointer'}} 
                                            onClick={() => handleDeleteEarning(earn.id)}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}

                        <div className="sd-add-link" onClick={() => setShowAllowanceModal(true)}>
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
                                    {item.incl === 'N/A' ? <span style={{fontSize: '11px', color: '#94a3b8'}}>N/A</span> : <input type="checkbox" className="sd-checkbox" defaultChecked={item.incl} onChange={() => {}} />}
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
                        
                        {deductions.length === 0 ? (
                            <div className="sd-row">
                                <div className="col-head" style={{fontSize: '12px', color: '#94a3b8', fontStyle: 'italic'}}>No Deductions Added</div>
                            </div>
                        ) : (
                            deductions.map((ded) => (
                                <div className="sd-row" key={ded.id}>
                                    <span className="col-head">{ded.name}</span>
                                    <div className="col-calc">
                                        <select className="sd-row-select">
                                            <option>{ded.calculation}</option>
                                        </select>
                                    </div>
                                    <div className="col-amount">
                                        <span>₹</span>
                                        <input type="text" className="sd-row-input" defaultValue={ded.amount} />
                                        <Trash2 
                                            size={14} 
                                            color="#ef4444" 
                                            style={{cursor: 'pointer'}} 
                                            onClick={() => handleDeleteDeduction(ded.id)}
                                        />
                                    </div>
                                </div>
                            ))
                        )}

                        <div className="sd-add-link" onClick={() => setShowDeductionModal(true)}>
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

            {/* Allowances Modal */}
            {showAllowanceModal && (
                <div className="sd-modal-overlay" onClick={() => setShowAllowanceModal(false)}>
                    <div className="sd-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="sd-modal-header">
                            <h4>Add Custom Allowances</h4>
                            <button className="sd-modal-close" onClick={() => setShowAllowanceModal(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="sd-modal-body">
                            <div className="sd-form-group">
                                <label>Enter Custom Allowance Name</label>
                                <input 
                                    type="text" 
                                    className="modal-input" 
                                    placeholder="Enter name"
                                    value={customName}
                                    onChange={e => setCustomName(e.target.value)}
                                    autoFocus
                                    onKeyDown={e => e.key === 'Enter' && handleAddAllowance()}
                                />
                            </div>
                        </div>
                        <div className="sd-modal-footer">
                            <button className="btn-modal-cancel" onClick={() => setShowAllowanceModal(false)}>Cancel</button>
                            <button className="btn-modal-add" onClick={handleAddAllowance}>Add</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Deductions Modal */}
            {showDeductionModal && (
                <div className="sd-modal-overlay" onClick={() => setShowDeductionModal(false)}>
                    <div className="sd-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="sd-modal-header">
                            <h4>Add Custom Deductions</h4>
                            <button className="sd-modal-close" onClick={() => setShowDeductionModal(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="sd-modal-body">
                            <div className="sd-form-group">
                                <label>Enter Custom Deduction Name</label>
                                <input 
                                    type="text" 
                                    className="modal-input" 
                                    placeholder="Enter name"
                                    value={customName}
                                    onChange={e => setCustomName(e.target.value)}
                                    autoFocus
                                    onKeyDown={e => e.key === 'Enter' && handleAddDeduction()}
                                />
                            </div>
                        </div>
                        <div className="sd-modal-footer">
                            <button className="btn-modal-cancel" onClick={() => setShowDeductionModal(false)}>Cancel</button>
                            <button className="btn-modal-add" onClick={handleAddDeduction}>Add</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeSalaryDetailsPage;
