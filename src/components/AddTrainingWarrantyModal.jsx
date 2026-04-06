import React, { useState } from "react";
import { X, Settings, Calculator, ChevronDown } from "lucide-react";
import "./AddTrainingWarrantyModal.css";

const AddTrainingWarrantyModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closeModal();
        }, 300);
    };

    return (
        <div className={`booking-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`booking-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

                {/* HEADER */}
                <div className="booking-modal-header">
                    <div className="booking-title-group">
                        <span className="booking-title">Add Trainning & Warranty</span>
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

                        {/* Row 1: 6 Fields */}
                        <div className="form-row-grid grid-6">
                            <div className="form-field">
                                <label>DATE</label>
                                <input type="date" defaultValue="2026-03-23" />
                            </div>
                            <div className="form-field">
                                <label>Application ID</label>
                                <input type="text" placeholder="Enter Application ID" />
                            </div>
                            <div className="form-field">
                                <label>Chassis No.</label>
                                <input type="text" placeholder="Enter Chassis No." />
                            </div>
                            <div className="form-field">
                                <label>Engine No.</label>
                                <input type="text" placeholder="Enter Engine No." />
                            </div>
                            <div className="form-field">
                                <label>Model No</label>
                                <div className="select-box">
                                    <select><option>Select Model</option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="form-field">
                                <label>Category</label>
                                <div className="select-box">
                                    <select><option>Select Category</option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: 5 Fields */}
                        <div className="form-row-grid grid-5 mt-15">
                            <div className="form-field">
                                <label>Name</label>
                                <input type="text" placeholder="Enter Customer Name" />
                            </div>
                            <div className="form-field">
                                <label>Father's Name</label>
                                <input type="text" placeholder="Enter Father's Name" />
                            </div>
                            <div className="form-field">
                                <label>Village</label>
                                <input type="text" placeholder="Enter Village" />
                            </div>
                            <div className="form-field">
                                <label>GP</label>
                                <input type="text" placeholder="Enter GP" />
                            </div>
                            <div className="form-field">
                                <label>Block</label>
                                <input type="text" placeholder="Enter Block" />
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

export default AddTrainingWarrantyModal;
