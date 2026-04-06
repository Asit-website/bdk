import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronDown, Plus } from 'lucide-react';
import './MechanicAssignModal.css';

const MechanicAssignModal = ({ isOpen, onClose, rowData }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [selectedProblems, setSelectedProblems] = useState(rowData?.problems || []);
    const [problemInput, setProblemInput] = useState('');
    const [showProblemDropdown, setShowProblemDropdown] = useState(false);
    const problemPickerRef = useRef(null);

    const availableProblems = [
        'Starting Problem', 'Fuel Filter', 'Gear Oil Leakage', 
        'Crank Pin Bearing', 'Steering Handle', 'Clutch Not Working'
    ];

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    const addProblem = (problem) => {
        if (!problem || selectedProblems.includes(problem)) return;
        setSelectedProblems((prev) => [...prev, problem]);
    };

    const removeProblem = (problem) => {
        setSelectedProblems((prev) => prev.filter((item) => item !== problem));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (problemPickerRef.current && !problemPickerRef.current.contains(event.target)) {
                setShowProblemDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!isOpen && !isClosing) return null;

    return (
        <div className={`mechanic-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`mechanic-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                
                <div className="mechanic-modal-body">
                    <div className="mechanic-form-grid">
                        <div className="form-field">
                            <label>Assign Date</label>
                            <input type="date" className="rounded-input" />
                        </div>
                        <div className="form-field">
                            <label>Working Date</label>
                            <input type="date" className="rounded-input" />
                        </div>
                        <div className="form-field">
                            <label>Machanic Name</label>
                            <div className="select-box rounded-select">
                                <select defaultValue="">
                                    <option value="" disabled></option>
                                    <option>Vadu Saren</option>
                                    <option>Chandi Patra</option>
                                    <option>Kush Patra</option>
                                </select>
                                <ChevronDown size={16} className="select-chevron" />
                            </div>
                        </div>
                    </div>

                    <div className="problem-voice-section">
                        <label className="section-title">PROBLEM/CUSTOMER VOICE</label>
                        <div className="problem-voice-container">
                            <div className="problem-chips">
                                {selectedProblems.length === 0 && (
                                    <span className="placeholder-text">No problem selected</span>
                                )}
                                {selectedProblems.map((p) => (
                                    <span key={p} className="problem-chip">
                                        {p}
                                        <X size={12} className="remove-chip" onClick={() => removeProblem(p)} />
                                    </span>
                                ))}
                            </div>
                            
                            <div className="problem-input-row" ref={problemPickerRef}>
                                <input 
                                    type="text" 
                                    placeholder="Add problem" 
                                    value={problemInput}
                                    onChange={(e) => setProblemInput(e.target.value)}
                                    onFocus={() => setShowProblemDropdown(true)}
                                />
                                <div className="problem-actions">
                                    <button type="button" className="add-btn" onClick={() => addProblem(problemInput)}>
                                        <Plus size={16} />
                                    </button>
                                    <button type="button" className="clear-btn" onClick={() => setProblemInput('')}>
                                        <X size={16} />
                                    </button>
                                </div>

                                {showProblemDropdown && (
                                    <div className="problem-dropdown">
                                        {availableProblems.filter(p => p.toLowerCase().includes(problemInput.toLowerCase())).map(p => (
                                            <div key={p} className="dropdown-item" onClick={() => { addProblem(p); setShowProblemDropdown(false); }}>
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="remark-section">
                        <label className="section-title">Remark:</label>
                        <textarea className="remark-textarea" placeholder=""></textarea>
                    </div>

                    <div className="mechanic-modal-footer">
                        <button type="button" className="btn-modal-cancel" onClick={handleClose}>CANCEL</button>
                        <button type="button" className="btn-modal-save">SAVE</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MechanicAssignModal;
