import React, { useState } from "react";
import { X, Settings, Search, ChevronsUpDown } from "lucide-react";
import "./BulkFollowUpModal.css";

const BulkFollowUpModal = ({ open, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!open && !isClosing) return null;

    const leads = [
        { id: 1, name: "Vadu Saren", village: "Mayta", gp: "Benachapra", block: "Garhbeta", model: "9d6+" },
        { id: 2, name: "Khokan Murmu", village: "Amlasuli", gp: "Amlasuli", block: "Taldangra", model: "8d6" },
        { id: 3, name: "Chadni Patra", village: "Makli", gp: "Makli", block: "GBA-II", model: "7P3" },
        { id: 4, name: "Dipu Dule", village: "KARSA", gp: "KADRA", block: "GBA-III", model: "SOLAR 3HP" },
    ];

    return (
        <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`lead-modal bulk-followup-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

                {/* Header */}
                <div className="lead-modal-header">
                    <div className="lead-title">Bulk Assign</div>
                    <div className="lead-header-icons">
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                {/* Form Grid */}
                <div className="lead-form-wrapper">
                    <div className="lead-form-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                        <div className="form-field">
                            <label>EXECUTIVE</label>
                            <div className="select-box">
                                <select>
                                    <option value="">Select Executive</option>
                                    <option value="1">Executive 1</option>
                                    <option value="2">Executive 2</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label>DATE</label>
                            <input type="date" placeholder="dd-mm-yyyy" />
                        </div>

                        <div className="form-field">
                            <label>TIME</label>
                            <input type="time" />
                        </div>

                        <div className="form-field">
                            <label>TASK</label>
                            <div className="select-box">
                                <select>
                                    <option value="">Select Task</option>
                                    <option value="call">Call</option>
                                    <option value="visit">Visit</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label>REMARK</label>
                            <input type="text" placeholder="Remark" className="form-input-text" />
                        </div>
                    </div>

                    <div className="bulk-table-container" style={{ marginTop: '20px' }}>
                        <div className="bulk-table-header">
                            <div className="bulk-search-box">
                                <Search size={14} color="#64748b" />
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>

                        <div className="bulk-table-wrapper">
                            <table className="bulk-inner-table">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>
                                            <div className="th-content">
                                                Name <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Village <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                GP <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Block <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Model <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead) => (
                                        <tr key={lead.id}>
                                            <td><input type="checkbox" /></td>
                                            <td>{lead.name}</td>
                                            <td>{lead.village}</td>
                                            <td>{lead.gp}</td>
                                            <td>{lead.block}</td>
                                            <td>{lead.model}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="lead-footer">
                    <div className="share-group">
                        <button className="btn-share">Share</button>
                        <div className="btn-share-dropdown">
                            <div className="share-arrow"></div>
                        </div>
                    </div>
                    <button className="btn-save">Save</button>
                </div>

            </div>
        </div>
    );
};

// Internal icon for the share button
const ChevronDown = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);

export default BulkFollowUpModal;
