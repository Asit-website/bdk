import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus } from 'lucide-react';
import './MechanicAssignUpdateModal.css';

const MechanicAssignUpdateModal = ({ isOpen, onClose, rowData }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [problems, setProblems] = useState([]);
    const [newProblem, setNewProblem] = useState('');
    const [mechanicName, setMechanicName] = useState('');
    const [assignDate, setAssignDate] = useState('');
    const [workingDate, setWorkingDate] = useState('');
    const [remark, setRemark] = useState('');

    useEffect(() => {
        if (isOpen && rowData) {
            setIsClosing(false);
            setMechanicName(rowData.mechanic || '');
            setAssignDate(rowData.assignDate ? rowData.assignDate.split('/').reverse().join('-') : '');
            // For mock demo, default working date to assign date or sample
            setWorkingDate(rowData.assignDate ? rowData.assignDate.split('/').reverse().join('-') : '');
            // Sample problems if none provided
            setProblems(['Starting Problem', 'Gear Oil Leakage']);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsClosing(false);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, rowData]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 150);
    };

    const addProblem = () => {
        const trimmed = newProblem.trim();
        if (trimmed && !problems.includes(trimmed)) {
            setProblems([...problems, trimmed]);
            setNewProblem('');
        }
    };

    const removeProblem = (problem) => {
        setProblems(problems.filter(p => p !== problem));
    };

    if (!isOpen && !isClosing) return null;

    const mechanics = ['VADU SAREN', 'CHANDI PATRA', 'UTPAL MAKUR', 'KUSH PATRA', 'AMIT MAITY'];

    return createPortal(
        <div className={`ma-update-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`ma-update-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="ma-update-modal-content">
                    <div className="ma-update-grid">
                        <div className="ma-update-field">
                            <label>Assign Date</label>
                            <input 
                                type="date" 
                                value={assignDate}
                                onChange={(e) => setAssignDate(e.target.value)}
                            />
                        </div>
                        <div className="ma-update-field">
                            <label>Working Date</label>
                            <input 
                                type="date" 
                                value={workingDate}
                                onChange={(e) => setWorkingDate(e.target.value)}
                            />
                        </div>
                        <div className="ma-update-field">
                            <label>Machanic Name</label>
                            <select 
                                value={mechanicName}
                                onChange={(e) => setMechanicName(e.target.value)}
                            >
                                <option value="">Select Mechanic</option>
                                {mechanics.map((m, idx) => (
                                    <option key={idx} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="ma-problem-voice-section">
                        <label>PROBLEM/CUSTOMER VOICE</label>
                        <div className="ma-problem-voice-box">
                            <div className="ma-problem-chips">
                                {problems.length === 0 ? (
                                    <span className="ma-problem-chip-placeholder">No problem selected</span>
                                ) : (
                                    problems.map((problem, idx) => (
                                        <span key={idx} className="ma-problem-chip">
                                            {problem}
                                            <button type="button" onClick={() => removeProblem(problem)}>
                                                <X size={12} />
                                            </button>
                                        </span>
                                    ))
                                )}
                            </div>
                            <div className="ma-problem-entry">
                                <input 
                                    type="text" 
                                    placeholder="Add problem" 
                                    value={newProblem}
                                    onChange={(e) => setNewProblem(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addProblem()}
                                />
                                <div className="ma-problem-action-btns">
                                    <button type="button" className="ma-problem-action-btn" onClick={addProblem}>
                                        <Plus size={16} />
                                    </button>
                                    <button type="button" className="ma-problem-action-btn" onClick={() => setNewProblem('')}>
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ma-remark-section">
                        <label>Remark:</label>
                        <textarea 
                            className="ma-remark-box"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                        />
                    </div>
                </div>

                <div className="ma-update-modal-footer">
                    <button className="btn-ma cancel" onClick={handleClose}>Cancel</button>
                    <button className="btn-ma save" onClick={handleClose}>Save</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MechanicAssignUpdateModal;
