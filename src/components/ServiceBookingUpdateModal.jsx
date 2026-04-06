import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus } from 'lucide-react';
import './ServiceBookingUpdateModal.css';

const ServiceBookingUpdateModal = ({ isOpen, onClose, rowData }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [problems, setProblems] = useState([]);
    const [newProblem, setNewProblem] = useState('');
    const [mobile, setMobile] = useState('');
    const [assignDate, setAssignDate] = useState('');
    const [workingDate, setWorkingDate] = useState('');
    const [remark, setRemark] = useState('');

    useEffect(() => {
        if (isOpen && rowData) {
            setIsClosing(false);
            setProblems(rowData.problems || []);
            setMobile(rowData.mobile || '');
            setWorkingDate(rowData.workingDate ? rowData.workingDate.split('/').reverse().join('-') : '');
            // For mock demo, set assign date same as booking date
            setAssignDate(rowData.bookingDate ? rowData.bookingDate.split('/').reverse().join('-') : '');
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

    return createPortal(
        <div className={`update-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`update-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="update-modal-content">
                    <div className="update-grid">
                        <div className="update-field">
                            <label>Assign Date</label>
                            <input 
                                type="date" 
                                value={assignDate}
                                onChange={(e) => setAssignDate(e.target.value)}
                            />
                        </div>
                        <div className="update-field">
                            <label>Working Date</label>
                            <input 
                                type="date" 
                                value={workingDate}
                                onChange={(e) => setWorkingDate(e.target.value)}
                            />
                        </div>
                        <div className="update-field">
                            <label>Mobile No</label>
                            <input 
                                type="text" 
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Enter mobile no"
                            />
                        </div>
                    </div>

                    <div className="problem-voice-section">
                        <label>PROBLEM/CUSTOMER VOICE</label>
                        <div className="problem-voice-box">
                            <div className="problem-chips">
                                {problems.length === 0 ? (
                                    <span className="problem-chip-placeholder">No problem selected</span>
                                ) : (
                                    problems.map((problem, idx) => (
                                        <span key={idx} className="problem-chip">
                                            {problem}
                                            <button type="button" onClick={() => removeProblem(problem)}>
                                                <X size={12} />
                                            </button>
                                        </span>
                                    ))
                                )}
                            </div>
                            <div className="problem-entry">
                                <input 
                                    type="text" 
                                    placeholder="Add problem" 
                                    value={newProblem}
                                    onChange={(e) => setNewProblem(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addProblem()}
                                />
                                <div className="problem-action-btns">
                                    <button type="button" className="problem-action-btn" onClick={addProblem}>
                                        <Plus size={16} />
                                    </button>
                                    <button type="button" className="problem-action-btn" onClick={() => setNewProblem('')}>
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="remark-section">
                        <label>Remark:</label>
                        <textarea 
                            className="remark-box"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                        />
                    </div>
                </div>

                <div className="update-modal-footer">
                    <button className="btn-update cancel" onClick={handleClose}>Cancel</button>
                    <button className="btn-update save" onClick={handleClose}>Save</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ServiceBookingUpdateModal;
