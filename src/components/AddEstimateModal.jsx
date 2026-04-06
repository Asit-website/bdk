import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Calculator, Settings } from 'lucide-react';
import './AddEstimateModal.css';

const AddEstimateModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    const handleClose = () => {
        setIsClosing(true);
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div className={`booking-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`booking-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

                {/* HEADER */}
                <div className="booking-modal-header">
                    <div className="booking-title-group">
                        <span className="booking-title">Add Estimate</span>
                        <ChevronDown size={18} className="title-chevron" />
                    </div>

                    <div className="header-actions">
                        <Calculator size={18} />
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="booking-modal-body">
                    <div className="booking-form-wrapper">

                        {/* Row 1: 5 Fields */}
                        <div className="form-row-grid grid-5">
                            <div className="form-field">
                                <label>ESTIMATE DATE</label>
                                <input type="date" defaultValue="2026-03-14" />
                            </div>
                            <div className="form-field">
                                <label>ESTIMATE NO</label>
                                <input type="text" placeholder="EST/2026/001" disabled />
                            </div>
                            <div className="form-field">
                                <label>BRANCH</label>
                                <div className="select-box">
                                    <select><option>Main Branch</option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="form-field">
                                <label>PARTY NAME</label>
                                <input type="text" placeholder="Enter Party Name" />
                            </div>
                            <div className="form-field">
                                <label>MOBILE NO</label>
                                <input type="text" placeholder="Enter Mobile No" />
                            </div>
                        </div>

                        {/* Row 2: 5 Fields */}
                        <div className="form-row-grid grid-5 mt-15">
                            <div className="form-field">
                                <label>VILLAGE</label>
                                <input type="text" placeholder="Enter Village" />
                            </div>
                            <div className="form-field">
                                <label>GP</label>
                                <input type="text" placeholder="Enter GP" />
                            </div>
                            <div className="form-field">
                                <label>BLOCK</label>
                                <input type="text" placeholder="Enter Block" />
                            </div>
                            <div className="form-field">
                                <label>ADDRESS</label>
                                <input type="text" placeholder="Enter Address" />
                            </div>
                            <div className="form-field">
                                <label>REMARK</label>
                                <input type="text" placeholder="Enter Remark" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* FOOTER */}
                <div className="booking-modal-footer">
                    <div className="share-group" onClick={handleClose}>
                        <button className="btn-cancel-navy">CANCEL</button>
                        <div className="btn-cancel-dropdown">
                            <div className="share-arrow"></div>
                        </div>
                    </div>
                    <button className="btn-save-yellow">SAVE</button>
                </div>

            </div>
        </div>
    );
};

export default AddEstimateModal;
