import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './AddPurchaseLocationAssignPage.css';

const AddPurchaseLocationAssignPage = () => {
    const navigate = useNavigate();

    const rows = [
        { id: 1, receivedDate: '25/03/2026', invoiceDate: '20/03/2025', partCode: 'SPMTWEB0010254', partName: 'FUEL PIPE ASSY' },
        { id: 2, receivedDate: '25/03/2026', invoiceDate: '20/03/2025', partCode: 'SPMTWEB0010254', partName: 'FUEL NOZZEL ASSSY' },
        { id: 3, receivedDate: '25/03/2026', invoiceDate: '20/03/2025', partCode: 'SPMTWEB0010254', partName: 'STARTER REEL 186F' },
        { id: 4, receivedDate: '25/03/2026', invoiceDate: '20/03/2025', partCode: 'SPMTWEB0010254', partName: 'BALL BEARING 62008' },
        { id: 5, receivedDate: '25/03/2026', invoiceDate: '20/03/2025', partCode: 'SPMTWEB0010254', partName: 'CRANK SHAFT 186F' },
        { id: 6, receivedDate: '25/03/2026', invoiceDate: '20/03/2025', partCode: 'SPMTWEB0010254', partName: 'CIRCLIP 2' },
    ];

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <span className="breadcrumb-separator">{'>'}</span>
                <span className="breadcrumb-item active">Product Location Assign</span>
            </div>

            <div className="location-assign-form-card">
                <div className="location-assign-form-header">Location Assign</div>

                <div className="location-assign-form-body">
                    <div className="location-assign-top-grid">
                        <div className="location-field">
                            <label>Assign Date</label>
                            <input type="date" />
                        </div>
                        <div className="location-field">
                            <label>Assign No</label>
                            <input type="text" />
                        </div>
                        <div className="location-field">
                            <label>Branch</label>
                            <div className="location-select-wrap">
                                <select>
                                    <option>Select Branch</option>
                                </select>
                                <ChevronDown size={14} className="location-select-icon" />
                            </div>
                        </div>
                        <div className="location-field">
                            <label>Invoice Date</label>
                            <input type="date" />
                        </div>
                        <div className="location-field">
                            <label>Supplier Name</label>
                            <div className="location-select-wrap">
                                <select>
                                    <option>Select</option>
                                </select>
                                <ChevronDown size={14} className="location-select-icon" />
                            </div>
                        </div>
                        <div className="location-field">
                            <label>Invoice No</label>
                            <div className="location-select-wrap">
                                <select>
                                    <option>Select</option>
                                </select>
                                <ChevronDown size={14} className="location-select-icon" />
                            </div>
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table className="lead-table location-assign-edit-table">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Recived Date</th>
                                    <th>Invoice Date</th>
                                    <th>Part Code</th>
                                    <th>Part Name</th>
                                    <th>Branch</th>
                                    <th>Rack No</th>
                                    <th>Bin No</th>
                                    <th>Qty</th>
                                    <th>Balanced Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}</td>
                                        <td>{row.receivedDate}</td>
                                        <td>{row.invoiceDate}</td>
                                        <td>{row.partCode}</td>
                                        <td>{row.partName}</td>
                                        <td>
                                            <div className="location-select-wrap compact branch-select-wrap">
                                                <select>
                                                    <option>Select Branch</option>
                                                </select>
                                                <ChevronDown size={12} className="location-select-icon" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="location-select-wrap compact rack-select-wrap">
                                                <select>
                                                    <option> </option>
                                                </select>
                                                <ChevronDown size={12} className="location-select-icon" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="location-select-wrap compact bin-select-wrap">
                                                <select>
                                                    <option> </option>
                                                </select>
                                                <ChevronDown size={12} className="location-select-icon" />
                                            </div>
                                        </td>
                                        <td><input className="cell-input qty-cell-input" type="text" /></td>
                                        <td><input className="cell-input balance-cell-input" type="text" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="location-assign-form-footer">
                    <button type="button" className="location-action-btn cancel" onClick={() => navigate('/purchase/location-assign')}>
                        Cancel
                    </button>
                    <button type="button" className="location-action-btn save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddPurchaseLocationAssignPage;