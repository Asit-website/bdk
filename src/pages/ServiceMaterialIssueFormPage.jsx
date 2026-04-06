import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import './ServiceMaterialIssueFormPage.css';
import JobSearchModal from '../components/JobSearchModal';

const ServiceMaterialIssueFormPage = () => {
    const navigate = useNavigate();
    const [showJobSearch, setShowJobSearch] = useState(false);

    const rows = [
        { id: 1, date: '25/03/2026', code: 'SPMTWEDB2546542', name: 'CRANK PIN BEARING 186', type: 'PAID', qty: 2, amount: 100 },
        { id: 2, date: '25/03/2026', code: 'SPMTWEDB2546542', name: 'CRANK SHAFT 186', type: 'U/W', qty: 1, amount: 4700 },
        { id: 3, date: '25/03/2026', code: 'SPMTWEDB2546542', name: 'FUEL PIPE ASSY', type: 'PAID', qty: 1, amount: 50 },
    ];

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <span className="breadcrumb-separator">{'>'}</span>
                <span className="breadcrumb-item active">Material Issue</span>
            </div>

            <div className="material-form-card">
                <div className="material-form-header">Material Issue</div>

                <div className="material-form-body">
                    <div className="material-form-section">
                        <div className="material-section-title">Material Issue</div>
                        <div className="material-form-grid grid-5">
                            <div className="material-field">
                                <label>Issue No</label>
                                <input type="text" />
                            </div>
                            <div className="material-field">
                                <label>Issue Date</label>
                                <input type="date" />
                            </div>
                            <div className="material-field">
                                <label>Job No</label>
                                <div className="input-with-icon">
                                    <input type="text" />
                                    <button 
                                        type="button" 
                                        className="search-icon-btn"
                                        onClick={() => setShowJobSearch(true)}
                                    >
                                        <FileText size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="material-field">
                                <label>Technician</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="material-field">
                                <label>Location</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="material-form-section">
                        <div className="material-section-title">Item Details:</div>
                        <div className="material-form-grid grid-6 item-details-grid">
                            <div className="material-field span-2">
                                <label>Item Name</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="material-field">
                                <label>Qty</label>
                                <input type="text" />
                            </div>
                            <div className="material-field">
                                <label>Rate</label>
                                <input type="text" />
                            </div>
                            <div className="material-field">
                                <label>Issue Type</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="material-field material-add-wrap">
                                <button type="button" className="material-add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="material-table-wrap">
                        <table className="material-table">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Sl No</th>
                                    <th>Issue Date</th>
                                    <th>Item Code</th>
                                    <th>Item Name</th>
                                    <th>Issue Type</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>
                                            <div className="material-action-icons">
                                                <button type="button" className="material-action edit">E</button>
                                                <button type="button" className="material-action delete">D</button>
                                            </div>
                                        </td>
                                        <td>{index + 1}</td>
                                        <td>{row.date}</td>
                                        <td>{row.code}</td>
                                        <td>{row.name}</td>
                                        <td>{row.type}</td>
                                        <td>{row.qty}</td>
                                        <td>{row.amount}</td>
                                    </tr>
                                ))}
                                <tr className="material-total-row">
    <td colSpan="6">TOTAL</td>
    <td>4</td>
    <td>Rs 4,850.00</td>
</tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="material-form-footer">
                    <button
                        type="button"
                        className="material-action-btn cancel"
                        onClick={() => navigate('/service/material-issue')}
                    >
                        Cancel
                    </button>
                    <button type="button" className="material-action-btn save">Save</button>
                </div>
            </div>

            {showJobSearch && <JobSearchModal closeModal={() => setShowJobSearch(false)} />}
        </div>
    );
};

export default ServiceMaterialIssueFormPage;

