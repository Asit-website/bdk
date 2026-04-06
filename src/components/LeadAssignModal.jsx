import React, { useState } from "react";
import { X, Settings, Calendar, Clock } from "lucide-react";
import "./LeadAssignModal.css";

const LeadAssignModal = ({ open, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!open && !isClosing) return null;

    return (
        <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`lead-modal assign-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

                {/* Header */}
                <div className="lead-modal-header">
                    <div className="lead-title">Assign Now</div>

                    <div className="lead-header-icons">
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                {/* Form Grid */}
                <div className="lead-form-wrapper">
                    <div className="lead-form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>

                        <div className="form-field">
                            <label>Executive</label>
                            <div className="select-box">
                                <select>
                                    <option value="">Select Executive</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label>Date</label>
                            <div className="input-with-icon">
                                <input type="date" />
                            </div>
                        </div>

                        <div className="form-field">
                            <label>Time</label>
                            <div className="input-with-icon">
                                <input type="time" />
                            </div>
                        </div>

                        <div className="form-field">
                            <label>Task</label>
                            <div className="select-box">
                                <select>
                                    <option value="">Select Task</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="form-field" style={{ gridColumn: 'span 2' }}>
                            <label>Remark</label>
                            <input type="text" placeholder="Enter remark" />
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="lead-footer">
                    <div className="share-group">
                        <button className="btn-share">Share</button>
                        <div className="btn-share-dropdown">
                            <div className="share-arrow"></div>
                        </div>
                    </div>
                    <button className="btn-save">Save</button>
                </div>

            </div>
        </div>
    );
};

export default LeadAssignModal;
