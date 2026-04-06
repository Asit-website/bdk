import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicePdiFormPage.css';

const ServicePdiFormPage = () => {
    const navigate = useNavigate();

    const rows = [
        { id: 1, issueDate: '25/03/2026', batteryName: 'TATA GREEN 12V 35A', partName: '', serialNo: '852114545F54856', qty: 1 },
        { id: 2, issueDate: '25/03/2026', batteryName: '', partName: 'FUEL PUMP ASSY 186F', serialNo: '', qty: 1 },
        { id: 3, issueDate: '25/03/2026', batteryName: '', partName: 'FUEL NOZZEL ASSY 186F', serialNo: '', qty: 1 },
    ];

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <span className="breadcrumb-separator">{'>'}</span>
                <span className="breadcrumb-item active">PDI Entry</span>
            </div>

            <div className="pdi-form-card">
                <div className="pdi-form-header">PDI</div>

                <div className="pdi-form-body">
                    <div className="pdi-form-section">
                        <div className="pdi-form-grid grid-5">
                            <div className="pdi-field">
                                <label>PDI Date</label>
                                <input type="date" />
                            </div>
                            <div className="pdi-field">
                                <label>PDI No</label>
                                <input type="text" />
                            </div>
                            <div className="pdi-field">
                                <label>Manual PDI No</label>
                                <input type="text" />
                            </div>
                            <div className="pdi-field">
                                <label>Location</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>

                        <div className="pdi-form-grid grid-6">
                            <div className="pdi-field">
                                <label>Chassis No</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="pdi-field">
                                <label>Engine No</label>
                                <input type="text" />
                            </div>
                            <div className="pdi-field">
                                <label>Model No</label>
                                <input type="text" />
                            </div>
                            <div className="pdi-field">
                                <label>Supervisor Name</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="pdi-field">
                                <label>Technician Name</label>
                                <select>
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="pdi-assign-wrap">
                        <div className="pdi-assign-card">
                            <div className="pdi-assign-title">Battery Assign:</div>
                            <div className="pdi-form-grid grid-assign">
                                <div className="pdi-field">
                                    <label>Battery Name</label>
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </div>
                                <div className="pdi-field">
                                    <label>Battery Serial No</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="pdi-assign-actions">
                                <button type="button" className="pdi-add-btn">+ Add</button>
                            </div>
                        </div>

                        <div className="pdi-assign-card">
                            <div className="pdi-assign-title">Parts Assign:(U/W)</div>
                            <div className="pdi-form-grid grid-parts">
                                <div className="pdi-field span-2">
                                    <label>Part Name</label>
                                    <input type="text" />
                                </div>
                                <div className="pdi-field">
                                    <label>QTY</label>
                                    <input type="text" />
                                </div>
                                <div className="pdi-field span-2">
                                    <label>Part Code</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="pdi-assign-actions">
                                <button type="button" className="pdi-add-btn">+ Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="pdi-table-wrap">
                        <table className="pdi-table">
                            <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Action</th>
                                    <th>Issue Date</th>
                                    <th>Battery Name</th>
                                    <th>Part Name</th>
                                    <th>Battery Serial No</th>
                                    <th>QTY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="pdi-action-icons">
                                                <button type="button" className="pdi-action edit">E</button>
                                                <button type="button" className="pdi-action delete">D</button>
                                            </div>
                                        </td>
                                        <td>{row.issueDate}</td>
                                        <td>{row.batteryName}</td>
                                        <td>{row.partName}</td>
                                        <td>{row.serialNo}</td>
                                        <td>{row.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="pdi-form-footer">
                    <button type="button" className="pdi-action-btn cancel" onClick={() => navigate('/service/pdi')}>
                        Cancel
                    </button>
                    <button type="button" className="pdi-action-btn save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default ServicePdiFormPage;
