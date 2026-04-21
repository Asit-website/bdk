import React, { useState } from "react";
import { X, Settings, Calculator, Plus, ChevronDown } from "lucide-react";
import "./AddBookingModal.css";

const AddBookingModal = ({ closeModal }) => {
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
                        <span className="booking-title">Add Booking</span>
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

                        {/* Row 1: 7 Fields */}
                        <div className="form-row-grid grid-7">
                            <div className="form-field">
                                <label>DATE</label>
                                <input type="date" />
                            </div>
                            <div className="form-field">
                                <label>BOOKING No</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>BRANCH</label>
                                <div className="select-box">
                                    <select><option></option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="form-field">
                                <label>ITEM CATEGORY</label>
                                <div className="select-box">
                                    <select><option></option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="form-field">
                                <label>MODEL</label>
                                <div className="select-box">
                                    <select><option></option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="form-field">
                                <label>HP</label>
                                <div className="select-box">
                                    <select><option></option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="form-field">
                                <label>WHEEL</label>
                                <div className="select-box">
                                    <select><option></option></select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: 6 Fields */}
                        <div className="form-row-grid grid-6 mt-15">
                            <div className="form-field">
                                <label>Customer Name</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>Mobile No.</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>Vill</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>Post</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>GP</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>Block</label>
                                <input type="text" />
                            </div>
                        </div>

                        {/* Row 3: 3 Fields (Address is wider) */}
                        <div className="form-row-grid grid-address mt-15">
                            <div className="form-field">
                                <label>Dist</label>
                                <input type="text" />
                            </div>
                            <div className="form-field">
                                <label>Pin Code</label>
                                <input type="text" />
                            </div>
                            <div className="form-field address-large">
                                <label>Address 2</label>
                                <input type="text" />
                            </div>
                        </div>

                        {/* Attachment Section */}
                        <div className="attachment-section mt-20">
                            <div className="section-title">Add on Attachment</div>
                            <div className="attachment-flex">
                                <div className="attachment-table-container">
                                    <table className="attachment-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Rate</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="table-input-wrapper">
                                                        <input list="attachment-names" className="table-input" defaultValue="ABCD" />
                                                        <datalist id="attachment-names">
                                                            <option value="ABCD" />
                                                            <option value="EFGH" />
                                                        </datalist>
                                                        <ChevronDown size={14} className="input-chevron" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="text" className="table-input" defaultValue="250.00" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="table-input-wrapper">
                                                        <input list="attachment-names" className="table-input" defaultValue="EFGH" />
                                                        <ChevronDown size={14} className="input-chevron" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="text" className="table-input" defaultValue="500.00" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn-add-row mt-10">
                                        <Plus size={14} /> Add
                                    </button>
                                </div>

                                <div className="total-display-container">
                                    <div className="rate-input-field">
                                        <label>Item Rate</label>
                                        <input type="text" placeholder="0.00" />
                                    </div>
                                    <div className="total-box-new">
                                        <label>Total Rate</label>
                                        <div className="amount-box">₹ 750.00</div>
                                    </div>
                                </div>
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

export default AddBookingModal;
