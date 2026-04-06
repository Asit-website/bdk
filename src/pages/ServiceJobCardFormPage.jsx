import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceJobCardFormPage.css';

const ServiceJobCardFormPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <span className="breadcrumb-separator">{'>'}</span>
                <span className="breadcrumb-item active">Job Card</span>
            </div>

            <div className="jobcard-form-card">
                <div className="jobcard-form-header">Job Card</div>
                <div className="jobcard-form-body">
                    <div className="jobcard-form-columns">
                        <div className="jobcard-form-section">
                            <div className="jobcard-section-title">Job Basic Information</div>

                            <div className="jobcard-form-grid grid-3">
                                <div className="jobcard-field">
                                    <label>Job Type</label>
                                    <select>
                                        <option>Select Job Type</option>
                                    </select>
                                </div>
                                <div className="jobcard-field">
                                    <label>Chassis No</label>
                                    <select>
                                        <option>Select Chassis</option>
                                    </select>
                                </div>
                                <div className="jobcard-field">
                                    <label>Vehicle Journey</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-3">
                                <div className="jobcard-field">
                                    <label>Service Head</label>
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div className="jobcard-field">
                                    <label>Service Type</label>
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div className="jobcard-field">
                                    <label>Service Location</label>
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-4">
                                <div className="jobcard-field">
                                    <label>Job No</label>
                                    <input type="text" />
                                </div>
                                <div className="jobcard-field">
                                    <label>Manual Job No</label>
                                    <input type="text" />
                                </div>
                                <div className="jobcard-field">
                                    <label>Job Date</label>
                                    <input type="date" />
                                </div>
                                <div className="jobcard-field">
                                    <label>Date of Failure</label>
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-3">
                                <div className="jobcard-field">
                                    <label>Supervisor/Advisor</label>
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div className="jobcard-field">
                                    <label>Technician</label>
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div className="jobcard-field">
                                    <label>Alternate Mobile No</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-1">
                                <div className="jobcard-field">
                                    <label>Customer Voice / Problem</label>
                                    <textarea rows="3" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-1">
                                <div className="jobcard-field">
                                    <label>Remark</label>
                                    <textarea rows="2" />
                                </div>
                            </div>
                        </div>

                        <div className="jobcard-form-section jobcard-form-section-right">
                            <div className="jobcard-section-title">Customer Details</div>

                            <div className="jobcard-form-grid grid-1">
                                <div className="jobcard-field">
                                    <label>Customer Name</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-2">
                                <div className="jobcard-field">
                                    <label>Mobile No</label>
                                    <input type="text" />
                                </div>
                                <div className="jobcard-field">
                                    <label>Sale Date</label>
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-2">
                                <div className="jobcard-field">
                                    <label>Engine No</label>
                                    <input type="text" />
                                </div>
                                <div className="jobcard-field">
                                    <label>Chassis No</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-1">
                                <div className="jobcard-field">
                                    <label>Model No</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="jobcard-form-grid grid-2 jobcard-status-row">
                                <div className="jobcard-field">
                                    <label>Service Status</label>
                                    <button type="button" className="jobcard-status-btn closed">Close</button>
                                </div>
                                <div className="jobcard-field">
                                    <label>Warranty Status</label>
                                    <button type="button" className="jobcard-status-btn active">Active</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jobcard-form-footer">
                    <button
                        type="button"
                        className="jobcard-action-btn cancel"
                        onClick={() => navigate('/service/job-card')}
                    >
                        Cancel
                    </button>
                    <button type="button" className="jobcard-action-btn save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceJobCardFormPage;
