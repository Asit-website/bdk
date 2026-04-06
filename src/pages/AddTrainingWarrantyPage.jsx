import React, { useState } from 'react';
import { ChevronRight, Calendar, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddTrainingWarrantyPage.css';

const AddTrainingWarrantyPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        applicationId: '',
        scheme: '',
        category: '',
        categoryName: '',
        village: '',
        gp: '',
        block: '',
        district: '',
        engineNo: '',
        chassisNo: '',
        modelNo: '',
        installationDate: '2026-03-23',
        trainedPersonName: '',
        mobileNo: '',
        relationship: '',
        warrantyCardNo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Sales</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Weeder</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Add Training & Warranty</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Training & Warranty</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                {/* Form Grid */}
                <div className="form-grid">
                    <div className="form-group">
                        <label>Application ID</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="applicationId" 
                            placeholder="Enter Application ID" 
                            value={formData.applicationId} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Scheme</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="scheme" 
                            placeholder="Enter Scheme" 
                            value={formData.scheme} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="category" 
                            placeholder="Enter Category" 
                            value={formData.category} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category Name</label>
                        <select className="form-input-select" name="categoryName" value={formData.categoryName} onChange={handleInputChange}>
                            <option value="">Select Category</option>
                            <option value="ABC">ABC</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Village</label>
                        <select className="form-input-select" name="village" value={formData.village} onChange={handleInputChange}>
                            <option value="">Select Village</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>GP</label>
                        <select className="form-input-select" name="gp" value={formData.gp} onChange={handleInputChange}>
                            <option value="">Select GP</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Block</label>
                        <select className="form-input-select" name="block" value={formData.block} onChange={handleInputChange}>
                            <option value="">Select Block</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>District</label>
                        <select className="form-input-select" name="district" value={formData.district} onChange={handleInputChange}>
                            <option value="">Select District</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Engine No.</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="engineNo" 
                            placeholder="Enter Engine No." 
                            value={formData.engineNo} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Chassis No.</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="chassisNo" 
                            placeholder="Enter Chassis No." 
                            value={formData.chassisNo} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Model No.</label>
                        <select className="form-input-select" name="modelNo" value={formData.modelNo} onChange={handleInputChange}>
                            <option value="">Select Model</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Installation Date</label>
                        <div className="date-input-wrapper">
                            <input 
                                type="date" 
                                className="form-input-date"
                                name="installationDate" 
                                value={formData.installationDate} 
                                onChange={handleInputChange}
                            />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Trained Person Name</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="trainedPersonName" 
                            placeholder="Enter Name" 
                            value={formData.trainedPersonName} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile No.</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="mobileNo" 
                            placeholder="Enter Mobile No." 
                            value={formData.mobileNo} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Relationship</label>
                        <select className="form-input-select" name="relationship" value={formData.relationship} onChange={handleInputChange}>
                            <option value="">Select Relationship</option>
                            <option value="Self">Self</option>
                            <option value="Son">Son</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Warranty Card No.</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="warrantyCardNo" 
                            placeholder="Enter Warranty Card No." 
                            value={formData.warrantyCardNo} 
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="form-action-buttons">
                    <button className="btn-cancel" onClick={() => navigate(-1)}>CANCEL</button>
                    <button className="btn-save">SAVE</button>
                </div>
            </div>
        </div>
    );
};

export default AddTrainingWarrantyPage;
