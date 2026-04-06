import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AutomationRuleModal from '../components/AutomationRuleModal';
import './EmployeeAutomationRulesPage.css';

const EmployeeAutomationRulesPage = () => {
    const navigate = useNavigate();
    const [rules, setRules] = useState({
        autoPresentAtStart: false,
        presentOnPunchIn: true,
        autoHalfDayLate: null,
        mandatoryHalfDayHours: null,
        mandatoryFullDayHours: null
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeRuleKey, setActiveRuleKey] = useState(null);
    const [modalTitle, setModalTitle] = useState('');

    const toggleRule = (key) => {
        setRules(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleOpenModal = (key, title) => {
        setActiveRuleKey(key);
        setModalTitle(title);
        setIsModalOpen(true);
    };

    const handleConfirmRule = (data) => {
        setRules(prev => ({ ...prev, [activeRuleKey]: data }));
        setIsModalOpen(false);
    };

    const handleTurnOffRule = () => {
        setRules(prev => ({ ...prev, [activeRuleKey]: null }));
        setIsModalOpen(false);
    };

    const getRuleDisplay = (key) => {
        const val = rules[key];
        if (!val || (!val.hours && !val.minutes)) return 'Not Set';
        return `${val.hours || '00'}h ${val.minutes || '00'}m`;
    };

    return (
        <div className="page-container">
            {/* ... top bar ... */}
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

            <div className="ar-content-card">
                <div className="ar-header">
                    <div className="ar-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/attendance')}>Attendance Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Automation Rules</span>
                    </div>
                </div>

                <div className="rules-container">
                    <div className="rule-row">
                        <div className="rule-info">
                            <span>Auto Present at day start</span>
                        </div>
                        <label className="bdk-toggle">
                            <input 
                                type="checkbox" 
                                checked={rules.autoPresentAtStart} 
                                onChange={() => toggleRule('autoPresentAtStart')} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>

                    <div className="rule-row">
                        <div className="rule-info">
                            <span>Present on Punch In</span>
                        </div>
                        <label className="bdk-toggle">
                            <input 
                                type="checkbox" 
                                checked={rules.presentOnPunchIn} 
                                onChange={() => toggleRule('presentOnPunchIn')} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>

                    <div className="rule-row gap-80">
                        <div className="rule-info">
                            <span>Auto half day if late by</span>
                        </div>
                        <button 
                            className={`btn-not-set ${rules.autoHalfDayLate ? 'has-value' : ''}`}
                            onClick={() => handleOpenModal('autoHalfDayLate', 'Auto half day if late by')}
                        >
                            {getRuleDisplay('autoHalfDayLate')}
                        </button>
                    </div>

                    <div className="rule-row gap-80">
                        <div className="rule-info">
                            <span>Mandatory half day hours</span>
                        </div>
                        <button 
                            className={`btn-not-set ${rules.mandatoryHalfDayHours ? 'has-value' : ''}`}
                            onClick={() => handleOpenModal('mandatoryHalfDayHours', 'Mandatory half day hours')}
                        >
                            {getRuleDisplay('mandatoryHalfDayHours')}
                        </button>
                    </div>

                    <div className="rule-row gap-80">
                        <div className="rule-info">
                            <span>Mandatory full day hours</span>
                        </div>
                        <button 
                            className={`btn-not-set ${rules.mandatoryFullDayHours ? 'has-value' : ''}`}
                            onClick={() => handleOpenModal('mandatoryFullDayHours', 'Mandatory full day hours')}
                        >
                            {getRuleDisplay('mandatoryFullDayHours')}
                        </button>
                    </div>
                </div>
            </div>

            <AutomationRuleModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
                initialValue={rules[activeRuleKey]}
                onConfirm={handleConfirmRule}
                onTurnOff={handleTurnOffRule}
            />
        </div>
    );
};

export default EmployeeAutomationRulesPage;
