import React, { useState } from 'react';
import { Calendar, ChevronDown, Camera, Plus, X, ArrowLeft, Scan, RefreshCcw, Maximize2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddDeliveryBillPage.css';

const AddDeliveryBillPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        deliveryDate: '2026-03-23',
        itemCategory: '',
        partyName: '',
        mobileNo: '',
        village: '',
        gp: '',
        block: '',
        district: '',
        engineNo: '',
        chassisNo: '',
        batteryNo: '',
        modelNo: '',
        transportedBy: '',
        remark: ''
    });

    const categories = ['Weeder', 'Power Tiller', 'Spare Parts'];
    const attachmentItems = [
        'Wheel', 'M.Set', 'Toolkit', 'Servicekit', 'Hitch', 
        'Potato Planter', 'Potato Digger', 'Leveler', 'R Set'
    ];
    
    const [attachments, setAttachments] = useState(
        attachmentItems.reduce((acc, item) => ({ ...acc, [item]: 'GIVEN' }), {})
    );

    const attachmentOptions = ['GIVEN', 'DUE', 'N/A'];

    const photoFields = [
        { label: 'Engine Photo', id: 'engine-photo' },
        { label: 'Chassis No', id: 'chassis-photo' },
        { label: 'Product Photo', id: 'product-photo' },
        { label: 'Attachment Photo', id: 'attachment-photo' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAttachmentChange = (item, value) => {
        setAttachments(prev => ({ ...prev, [item]: value }));
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
                <span className="breadcrumb-item active">Add Delivery Bill</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Delivery Bill</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                {/* Form Grid */}
                <div className="form-grid">
                    <div className="form-group">
                        <label>Delivery Date</label>
                        <div className="date-input-wrapper">
                            <input 
                                type="date" 
                                className="form-input-date"
                                name="deliveryDate" 
                                value={formData.deliveryDate} 
                                onChange={handleInputChange}
                            />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Bill No.</label>
                        <input type="text" className="form-input-text readonly" value="DB-1001" readOnly />
                    </div>

                    <div className="form-group">
                        <label>Item Category</label>
                        <select className="form-input-select" name="itemCategory" value={formData.itemCategory} onChange={handleInputChange}>
                            <option value="">Select Category</option>
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Party Name</label>
                        <select className="form-input-select" name="partyName" value={formData.partyName} onChange={handleInputChange}>
                            <option value="">Select Party</option>
                            <option value="ABC">ABC</option>
                        </select>
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
                        <label>Battery No.</label>
                        <input 
                            type="text" 
                            className="form-input-text"
                            name="batteryNo" 
                            placeholder="Enter Battery No." 
                            value={formData.batteryNo} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Model No.</label>
                        <select className="form-input-select" name="modelNo" value={formData.modelNo} onChange={handleInputChange}>
                            <option value="">Select Model</option>
                        </select>
                    </div>
                </div>

                {/* Attachments Section */}
                <div className="attachments-section" style={{ marginTop: '40px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px', color: '#1e293b' }}>Attachments</h3>
                    <div className="form-grid">
                        {attachmentItems.map(item => (
                            <div className="form-group" key={item}>
                                <label>{item}</label>
                                <select 
                                    className="form-input-select"
                                    value={attachments[item]} 
                                    onChange={(e) => handleAttachmentChange(item, e.target.value)}
                                    style={{ color: attachments[item] === 'DUE' ? '#ef4444' : attachments[item] === 'GIVEN' ? '#16a34a' : '#64748b', fontWeight: '700' }}
                                >
                                    {attachmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>
                        ))}
                        <div className="form-group">
                            <label>Transported By</label>
                            <input 
                                type="text" 
                                className="form-input-text"
                                name="transportedBy" 
                                placeholder="Enter Transported By" 
                                value={formData.transportedBy} 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Remark */}
                <div className="form-group" style={{ marginTop: '30px' }}>
                    <label>Remark</label>
                    <textarea 
                        className="form-input-text"
                        name="remark" 
                        placeholder="Enter Remark" 
                        rows="3" 
                        value={formData.remark} 
                        onChange={handleInputChange}
                        style={{ minHeight: '80px', width: '100%' }}
                    ></textarea>
                </div>

                {/* Photo Uploads */}
                <div className="photo-uploads-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
                    {photoFields.map(field => (
                        <div key={field.id} className="photo-upload-container">
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '10px', color: '#334155' }}>{field.label}</label>
                            <div className="file-upload-box" style={{ height: '140px', border: '2px dashed #e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ padding: '10px', backgroundColor: '#ffffff', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                        <Camera size={24} style={{ color: '#64748b' }} />
                                    </div>
                                    <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>Upload Photo</span>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default AddDeliveryBillPage;
