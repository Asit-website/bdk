import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, ChevronDown, Plus } from 'lucide-react';
import './AddServiceModal.css';

const AddServiceModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [showAccessory, setShowAccessory] = useState(false);
    const [showProblemDropdown, setShowProblemDropdown] = useState(false);
    const [selectedProblems, setSelectedProblems] = useState([]);
    const [problemInput, setProblemInput] = useState('');
    const [availableProblems, setAvailableProblems] = useState([]);
    const [isWarrantyActive, setIsWarrantyActive] = useState(true);
    const [isFreeService, setIsFreeService] = useState(false);
    const problemPickerRef = useRef(null);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    const accessories = [
        { name: 'Wheel - 18" (WHEEL)', status: 'GIVEN' },
        { name: 'M.Set - M.SET', status: 'GIVEN' },
        { name: 'Toolkit - GIVEN', status: 'GIVEN' },
        { name: 'Service Kit - GIVEN', status: 'GIVEN' },
        { name: 'Hitch - DUE', status: 'DUE' },
        { name: 'Potato Planter - DUE', status: 'DUE' },
        { name: 'Potato Digger - DUE', status: 'DUE' },
        { name: 'Leveler - GIVEN', status: 'GIVEN' },
        { name: 'R.Set - NA', status: 'NA' },
        { name: 'Transported By - SOMNATH MURMU', status: 'INFO' },
    ];

    const previousService = [
        { date: '22/03/2025', problem: 'Nozzle Change', mechanic: 'VADU SAREN', remark: 'XYZ' },
        { date: '10/03/2025', problem: 'Filter Change', mechanic: 'CHANDI PATRA', remark: 'XYZ' },
        { date: '20/02/2025', problem: 'Nozzle Change', mechanic: 'VADU SAREN', remark: 'XYZ' },
        { date: '12/02/2025', problem: 'Nozzle Change', mechanic: 'VADU SAREN', remark: 'XYZ' },
    ];

    const addProblem = (problem) => {
        if (!problem || selectedProblems.includes(problem)) return;
        setSelectedProblems((prev) => [...prev, problem]);
    };

    const handleAddCustomProblem = () => {
        const normalized = problemInput.trim().toUpperCase();
        if (!normalized) return;

        setAvailableProblems((prev) => (prev.includes(normalized) ? prev : [...prev, normalized]));
        setProblemInput('');
        setShowProblemDropdown(true);
    };

    const removeProblem = (problem) => {
        setSelectedProblems((prev) => prev.filter((item) => item !== problem));
    };

    const handleSelectAllProblems = (checked) => {
        if (checked) {
            setSelectedProblems(availableProblems);
        } else {
            setSelectedProblems([]);
        }
    };

    const filteredProblems = useMemo(() => {
        const term = problemInput.trim().toUpperCase();
        if (!term) return availableProblems;
        return availableProblems.filter((problem) => problem.includes(term));
    }, [availableProblems, problemInput]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (problemPickerRef.current && !problemPickerRef.current.contains(event.target)) {
                setShowProblemDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!isOpen) return null;

    return (
        <div className={`booking-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`booking-modal service-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="booking-modal-header service-modal-header">
                    <div className="booking-title-group">
                        <span className="booking-title">Add Service</span>
                    </div>

                    <div className="service-status-line">
                        <span className="service-status-label">Customer Status:-</span>
                        <div className="status-indicator-group">
                            <span className="status-indicator-item due active">Due</span>
                        </div>
                    </div>

                    <div className="header-actions">
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                <div className="booking-modal-body service-modal-body">
                    <div className="modal-two-columns">
                        {/* LEFT COLUMN: TECH & BOOKING */}
                        <div className="modal-left-col">
                            <div className="form-row-grid grid-4">
                                <div className="form-field">
                                    <label>Sl No</label>
                                    <input type="text" />
                                </div>
                                <div className="form-field">
                                    <label>Booking Date</label>
                                    <input type="date" />
                                </div>
                                <div className="form-field">
                                    <label>Service Category</label>
                                    <div className="select-box">
                                        <select>
                                            <option>Demo</option>
                                            <option>Service</option>
                                            <option>Installation</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label>Customer Name</label>
                                    <div className="select-box">
                                        <select>
                                            <option>Select</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row-grid grid-4 mt-15">
                                <div className="form-field">
                                    <label>Chassis No</label>
                                    <input type="text" />
                                </div>
                                <div className="form-field">
                                    <label>Secondary Mobile No</label>
                                    <input type="text" />
                                </div>
                                <div className="form-field">
                                    <label>Address</label>
                                    <input type="text" />
                                </div>
                                <div className="form-field">
                                    <label>Area</label>
                                    <div className="select-box">
                                        <select>
                                            <option>Amlasuli</option>
                                            <option>Dhadika</option>
                                            <option>Taldangra</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row-grid grid-3 mt-15">
                                <div className="form-field">
                                    <label>Service Status</label>
                                    <div className="select-box">
                                        <select>
                                            <option>Booked</option>
                                            <option>Ongoing</option>
                                            <option>Pending</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label>Assign Mechanic</label>
                                    <div className="select-box">
                                        <select>
                                            <option>Vadu Saren</option>
                                            <option>Chandi Patra</option>
                                            <option>Kush Patra</option>
                                        </select>
                                        <span className="select-arrow"></span>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label>Working Date</label>
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="form-field mt-15">
                                <label>Problem/Customer Voice</label>
                                <div className="problem-voice-box">
                                    <div className="problem-chip-wrap">
                                        {selectedProblems.length === 0 && (
                                            <span className="problem-chip-placeholder">No problem selected</span>
                                        )}
                                        {selectedProblems.map((problem) => (
                                            <span key={problem} className="problem-chip">
                                                {problem}
                                                <button type="button" onClick={() => removeProblem(problem)}>
                                                    <X size={12} />
                                                </button>
                                            </span>
                                        ))}
                                    </div>

                                    <div className="problem-entry-row" ref={problemPickerRef}>
                                        <input
                                            type="text"
                                            value={problemInput}
                                            onChange={(e) => setProblemInput(e.target.value)}
                                            onFocus={() => setShowProblemDropdown(true)}
                                            placeholder="Add problem"
                                            className="problem-input"
                                        />
                                        <button
                                            type="button"
                                            className="problem-icon-btn"
                                            onClick={handleAddCustomProblem}
                                            title="Add to dropdown"
                                        >
                                            <Plus size={14} />
                                        </button>
                                        <button
                                            type="button"
                                            className="problem-icon-btn"
                                            onClick={() => {
                                                setProblemInput('');
                                                setShowProblemDropdown(false);
                                            }}
                                        >
                                            <X size={14} />
                                        </button>

                                        {showProblemDropdown && (
                                            <div className="problem-picker-inline">
                                                <div className="problem-picker-head">Problem List</div>
                                                {problemInput.trim() && !availableProblems.includes(problemInput.trim().toUpperCase()) && (
                                                    <button type="button" className="problem-add-line" onClick={handleAddCustomProblem}>
                                                        <Plus size={12} /> Add '{problemInput.trim().toUpperCase()}'
                                                    </button>
                                                )}
                                                {availableProblems.length > 0 && (
                                                    <label className="problem-select-all">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedProblems.length === availableProblems.length}
                                                            onChange={(e) => handleSelectAllProblems(e.target.checked)}
                                                        />
                                                        Select all
                                                    </label>
                                                )}
                                                <div className="problem-option-list">
                                                    {filteredProblems.map((problem) => {
                                                        const checked = selectedProblems.includes(problem);
                                                        return (
                                                            <label key={problem} className="problem-option-item">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={checked}
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) {
                                                                            addProblem(problem);
                                                                        } else {
                                                                            removeProblem(problem);
                                                                        }
                                                                    }}
                                                                />
                                                                {problem}
                                                            </label>
                                                        );
                                                    })}
                                                    {filteredProblems.length === 0 && (
                                                        <div className="problem-empty-state">No problem in list. Type and press + to add.</div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-field mt-15">
                                <label>Remark</label>
                                <textarea className="remark-textarea" placeholder="Enter remark" />
                            </div>
                        </div>

                        {/* RIGHT COLUMN: INFORMATION & HISTORY */}
                        <div className="modal-right-col">
                            <div className="info-section-group no-title">
                                <div className="form-row-grid grid-1">
                                    <div className="form-field horizontal">
                                        <label>Customer Name</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                </div>
                                <div className="form-row-grid grid-2 mt-5">
                                    <div className="form-field horizontal">
                                        <label>Mobile No</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                    <div className="form-field horizontal">
                                        <label>Village</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                </div>
                                <div className="form-row-grid grid-2 mt-5">
                                    <div className="form-field horizontal">
                                        <label>GP</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                    <div className="form-field horizontal">
                                        <label>Block</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                </div>
                            </div>

                            <div className="info-section-group mt-15">
                                <div className="form-row-grid grid-2">
                                    <div className="form-field horizontal">
                                        <label>Warranty Status</label>
                                        <button
                                            type="button"
                                            className={`status-btn-small ${isWarrantyActive ? 'active' : 'inactive'}`}
                                            onClick={() => setIsWarrantyActive(!isWarrantyActive)}
                                        >
                                            {isWarrantyActive ? 'Active' : 'Inactive'}
                                        </button>
                                    </div>
                                    <div className="form-field horizontal">
                                        <label>Free Service</label>
                                        <button
                                            type="button"
                                            className={`status-btn-small ${isFreeService ? 'open' : 'close'}`}
                                            onClick={() => setIsFreeService(!isFreeService)}
                                        >
                                            {isFreeService ? 'Open' : 'Close'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="info-section-group mt-15 no-title">
                                <div className="form-row-grid grid-2">
                                    <div className="form-field horizontal">
                                        <label>Delivery Date</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                    <div className="form-field horizontal">
                                        <label>Engine No</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                </div>
                                <div className="form-row-grid grid-2 mt-5">
                                    <div className="form-field horizontal">
                                        <label>Chassis No</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                    <div className="form-field horizontal">
                                        <label>Model No</label>
                                        <input type="text" readOnly className="read-only-field" />
                                    </div>
                                </div>
                            </div>

                            <div className="accessory-section mt-15">
                                <div className="accessory-header-row">
                                    <button
                                        type="button"
                                        className="accessory-btn-primary"
                                        onClick={() => setShowAccessory(!showAccessory)}
                                    >
                                        View Accessary <ChevronDown size={14} />
                                    </button>
                                </div>
                                {showAccessory && (
                                    <div className="accessory-inline-list mt-8">
                                        {accessories.map((item, idx) => (
                                            <div key={`${item.name}-${idx}`} className="accessory-inline-item">
                                                <span className={`accessory-tag ${item.status.toLowerCase()}`}>{item.status}</span>
                                                <span className="accessory-text">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="previous-service-card mt-15">
                                <div className="previous-title">Previous Service:</div>
                                <div className="previous-table">
                                    <div className="previous-head">
                                        <span>Working Date</span>
                                        <span>Problem</span>
                                        <span>Machanic</span>
                                        <span>Remark</span>
                                    </div>
                                    {previousService.map((item, idx) => (
                                        <div key={`${item.date}-${idx}`} className="previous-row">
                                            <span>{item.date}</span>
                                            <span>{item.problem}</span>
                                            <span>{item.mechanic}</span>
                                            <span>{item.remark}</span>
                                        </div>
                                    ))}
                                </div>
                                <button type="button" className="view-more-btn">view more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="booking-modal-footer">
                    <button type="button" className="btn-save-yellow center-btn">Save</button>
                    <button type="button" className="btn-cancel-navy center-btn" onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddServiceModal;
