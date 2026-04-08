import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ChevronRight, 
    X, 
    RefreshCcw, 
    Maximize2, 
    Plus, 
    Trash2, 
    User, 
    Camera
} from 'lucide-react';
import './EmployeeAddPage.css';
import './AddQuotationPage.css';

const EmployeeAddPage = () => {
    const navigate = useNavigate();
    
    // State for dynamic designation history
    const [designations, setDesignations] = useState([
        { id: 1, designation: 'SUPERVISOR', fromDate: '23-12-2025', toDate: '23-12-2026' },
        { id: 2, designation: 'MECHANIC', fromDate: '18-12-2025', toDate: '18-12-2026' }
    ]);
    
    const [newDesignation, setNewDesignation] = useState({ designation: '', fromDate: '', toDate: '' });

    const addDesignation = () => {
        if (newDesignation.designation && newDesignation.fromDate && newDesignation.toDate) {
            setDesignations([...designations, { ...newDesignation, id: Date.now() }]);
            setNewDesignation({ designation: '', fromDate: '', toDate: '' });
        }
    };

    const removeDesignation = (id) => {
        setDesignations(designations.filter(d => d.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Employee Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Employee Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate('/master/employee')} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="employee-form-container">
                    <div className="employee-main-layout">
                        
                        {/* Left Side: Form Fields */}
                        <div className="employee-form-left">
                            
                            {/* Section: Employee DETAILS */}
                            <div className="emp-section">
                                <h3 className="emp-section-title">Employee Details</h3>
                                <div className="emp-grid-3">
                                    <div className="emp-field">
                                        <label>Employee ID</label>
                                        <input type="text" className="emp-input" placeholder="Employee ID" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Employee Name</label>
                                        <input type="text" className="emp-input" placeholder="Employee Name" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Gender</label>
                                        <select className="emp-input">
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="emp-field">
                                        <label>Marital Status</label>
                                        <select className="emp-input">
                                            <option value="">Select Status</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                        </select>
                                    </div>
                                    <div className="emp-field">
                                        <label>Father's Name</label>
                                        <input type="text" className="emp-input" placeholder="Father's Name" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Blood Group</label>
                                        <select className="emp-input">
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="O+">O+</option>
                                            <option value="AB+">AB+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section: Address */}
                            <div className="emp-section">
                                <div className="emp-grid-3">
                                    <div className="emp-field">
                                        <label>Village</label>
                                        <input type="text" className="emp-input" placeholder="Village" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Post</label>
                                        <input type="text" className="emp-input" placeholder="Post" />
                                    </div>
                                    <div className="emp-field">
                                        <label>PS</label>
                                        <input type="text" className="emp-input" placeholder="PS" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Dist</label>
                                        <input type="text" className="emp-input" placeholder="Dist" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Pin Code</label>
                                        <input type="text" className="emp-input" placeholder="Pin Code" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Mobile No</label>
                                        <input type="text" className="emp-input" placeholder="Mobile No" />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Professional */}
                            <div className="emp-section">
                                <div className="emp-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                                    <div className="emp-field">
                                        <label>Email ID</label>
                                        <input type="text" className="emp-input" placeholder="Email ID" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Work Location</label>
                                        <select className="emp-input">
                                            <option value="">Select Location</option>
                                            <option value="Workshop">1. Workshop</option>
                                            <option value="Jharboni SW">2. Jharboni SW</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="emp-grid-2 mt-20" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                                    <div className="emp-field">
                                        <label>Qualification</label>
                                        <input type="text" className="emp-input" placeholder="Qualification" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Passing Year</label>
                                        <input type="text" className="emp-input" placeholder="Passing Year" />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Documents & Misc */}
                            <div className="emp-section">
                                <div className="emp-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', alignItems: 'flex-end' }}>
                                    <div className="emp-field">
                                        <label>Upload Document</label>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <select className="emp-input" style={{ flex: 1 }}>
                                                <option value="">Select Document</option>
                                                <option value="Aadhar">Aadhar Card</option>
                                                <option value="PAN">PAN Card</option>
                                            </select>
                                            <input type="file" style={{ display: 'none' }} id="emp-doc-upload" />
                                            <label htmlFor="emp-doc-upload" className="emp-input" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', flex: 1, marginBottom: 0 }}>
                                                <Plus size={14} /> SELECT DOCUMENT
                                            </label>
                                        </div>
                                    </div>
                                    <div className="emp-field">
                                        <label>Emergency Contact No</label>
                                        <input type="text" className="emp-input" placeholder="Emergency Contact No" />
                                    </div>
                                </div>
                                <div className="emp-grid-2 mt-20" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="emp-field">
                                        <label>Driving Licence No</label>
                                        <input type="text" className="emp-input" placeholder="Driving Licence No" />
                                    </div>
                                </div>
                            </div>

                            {/* Section: Designation History */}
                            <div className="emp-section">
                                <h3 className="emp-section-title">Designation History</h3>
                                <div className="designation-add-row">
                                    <div className="emp-field" style={{ flex: 2 }}>
                                        <label>Designation</label>
                                        <input 
                                            type="text" 
                                            className="emp-input" 
                                            placeholder="Designation"
                                            value={newDesignation.designation}
                                            onChange={(e) => setNewDesignation({...newDesignation, designation: e.target.value})}
                                        />
                                    </div>
                                    <div className="emp-field" style={{ flex: 1.5 }}>
                                        <label>From Date</label>
                                        <input 
                                            type="text" 
                                            className="emp-input" 
                                            placeholder="DD-MM-YYYY"
                                            value={newDesignation.fromDate}
                                            onChange={(e) => setNewDesignation({...newDesignation, fromDate: e.target.value})}
                                        />
                                    </div>
                                    <div className="emp-field" style={{ flex: 1.5 }}>
                                        <label>To Date</label>
                                        <input 
                                            type="text" 
                                            className="emp-input" 
                                            placeholder="DD-MM-YYYY"
                                            value={newDesignation.toDate}
                                            onChange={(e) => setNewDesignation({...newDesignation, toDate: e.target.value})}
                                        />
                                    </div>
                                    <button className="btn-add-designation" onClick={addDesignation}>
                                        <Plus size={16} /> ADD
                                    </button>
                                </div>

                                <table className="emp-history-table">
                                    <thead>
                                        <tr>
                                            <th>Designation</th>
                                            <th>From Date</th>
                                            <th>To Date</th>
                                            <th style={{ textAlign: 'center' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {designations.map((d) => (
                                            <tr key={d.id}>
                                                <td>{d.designation}</td>
                                                <td>{d.fromDate}</td>
                                                <td>{d.toDate}</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <Trash2 
                                                        size={14} 
                                                        className="btn-remove-row" 
                                                        onClick={() => removeDesignation(d.id)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Section: Login Details */}
                            <div className="emp-section">
                                <h3 className="emp-section-title">Login Details</h3>
                                <div className="emp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="emp-field">
                                        <label>Login ID</label>
                                        <input type="text" className="emp-input" placeholder="Login ID" />
                                    </div>
                                    <div className="emp-field">
                                        <label>Password</label>
                                        <input type="password" className="emp-input" placeholder="Password" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Side: Photo section */}
                        <div className="employee-photo-right">
                            <div className="photo-preview-box">
                                <div className="photo-placeholder">
                                    <User size={80} strokeWidth={1} />
                                </div>
                                <button className="btn-delete-image">Delete Image</button>
                            </div>
                            <div className="photo-label">Passport Size Photo</div>
                            <button className="emp-input" style={{ width: '100%', marginTop: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <Camera size={14} /> Upload Photo
                            </button>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="emp-form-actions">
                        <button className="btn-emp-cancel" onClick={() => navigate('/master/employee')}>Cancel</button>
                        <button className="btn-emp-save" onClick={() => navigate('/master/employee')}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAddPage;
