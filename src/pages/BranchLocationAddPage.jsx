import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X, RefreshCcw, Maximize2 } from 'lucide-react';
import './BranchLocationMasterPage.css';

const BranchLocationAddPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Branch Location Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Branch Location Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate('/master/location/branch')} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="branch-master-content">
                    <div className="pm-create-view">
                        {/* Basic Details Grid - 3 Columns */}
                        <div className="branch-form-grid">
                            <div className="branch-input-group">
                                <label>LOCATION TYPE</label>
                                <select className="pm-input">
                                    <option value="">SELECT TYPE</option>
                                    <option value="BRANCH">BRANCH</option>
                                    <option value="WAREHOUSE">WAREHOUSE</option>
                                    <option value="OFFICE">OFFICE</option>
                                </select>
                            </div>
                            <div className="branch-input-group">
                                <label>LOCATION NAME</label>
                                <input type="text" className="pm-input" placeholder="ENTER NAME" />
                            </div>
                            <div className="branch-input-group">
                                <label>LOCATION AREA</label>
                                <select className="pm-input">
                                    <option value="">SELECT AREA</option>
                                    <option value="URBAN">URBAN</option>
                                    <option value="RURAL">RURAL</option>
                                </select>
                            </div>

                            <div className="branch-input-group">
                                <label>LOCATION CODE</label>
                                <input type="text" className="pm-input" placeholder="ENTER CODE" />
                            </div>
                            <div className="branch-input-group">
                                <label>LATITUDE</label>
                                <input type="text" className="pm-input" placeholder="ENTER LATITUDE" />
                            </div>
                            <div className="branch-input-group">
                                <label>LONGITUDE</label>
                                <input type="text" className="pm-input" placeholder="ENTER LONGITUDE" />
                            </div>

                            <div className="branch-input-group span-2">
                                <label>ADDRESS</label>
                                <input type="text" className="pm-input" placeholder="ENTER ADDRESS" />
                            </div>
                            <div className="branch-input-group">
                                <label>PIN CODE</label>
                                <input type="text" className="pm-input" placeholder="ENTER PIN CODE" />
                            </div>

                            <div className="branch-input-group">
                                <label>STATE</label>
                                <select className="pm-input">
                                    <option value="">SELECT STATE</option>
                                    <option value="ODISHA">ODISHA</option>
                                </select>
                            </div>
                            <div className="branch-input-group">
                                <label>CITY</label>
                                <select className="pm-input">
                                    <option value="">SELECT CITY</option>
                                    <option value="BHUBANESWAR">BHUBANESWAR</option>
                                    <option value="CUTTACK">CUTTACK</option>
                                </select>
                            </div>
                        </div>

                        {/* Incharge Details Section */}
                        <div className="incharge-section-container">
                            <h3 className="section-sub-title">INCHARGE CONTACT DETAILS</h3>
                            <div className="branch-form-grid mt-20">
                                <div className="branch-input-group">
                                    <label>INCHARGE CONTACT NAME</label>
                                    <select className="pm-input">
                                        <option value="">SELECT NAME</option>
                                        <option value="SAMIR">SAMIR DAS</option>
                                    </select>
                                </div>
                                <div className="branch-input-group">
                                    <label>MOBILE No</label>
                                    <input type="text" className="pm-input" placeholder="ENTER MOBILE" />
                                </div>
                                <div className="branch-input-group">
                                    <label>EMAIL ID</label>
                                    <input type="text" className="pm-input" placeholder="ENTER EMAIL" />
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="pm-form-footer">
                            <div></div>
                            <div className="pm-footer-right">
                                <button className="pm-btn-cancel" onClick={() => navigate('/master/location/branch')}>CANCEL</button>
                                <button className="pm-btn-save" onClick={() => navigate('/master/location/branch')}>SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchLocationAddPage;
