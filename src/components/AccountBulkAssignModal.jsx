import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Settings, Search, ChevronsUpDown } from 'lucide-react';
import './AccountBulkAssignModal.css';

const AccountBulkAssignModal = ({ open, onClose }) => {
    const [search, setSearch] = useState("");
    const [isClosing, setIsClosing] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [rowRemarks, setRowRemarks] = useState({});

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!open && !isClosing) return null;

    const data = [
        { id: 1, name: "Vadu Saren", mobile: "9999999999", address: "VILLAGE, GP, BLOCK", due: "500.00" },
        { id: 2, name: "Khokan Murmu", mobile: "9999999999", address: "VILLAGE, GP, BLOCK", due: "500.00" },
        { id: 3, name: "Chadni Patra", mobile: "9999999999", address: "VILLAGE, GP, BLOCK", due: "500.00" },
        { id: 4, name: "Dipu Dule", mobile: "9999999999", address: "VILLAGE, GP, BLOCK", due: "500.00" },
    ];

    const toggleSelect = (id) => {
        setSelectedIds(prev => 
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleRowRemark = (id, value) => {
        setRowRemarks(prev => ({ ...prev, [id]: value }));
    };

    return createPortal(
        <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
            <div 
                className={`lead-modal bulk-assign-modal account-bulk-assign ${isClosing ? 'scale-down' : 'scale-up'}`} 
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="lead-modal-header">
                    <div className="lead-title">Bulk Assign</div>
                    <div className="lead-header-icons">
                        <Settings size={18} color="#64748b" style={{ cursor: 'pointer' }} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                {/* Form Group - 4 Columns */}
                <div className="lead-form-wrapper">
                    <div className="lead-form-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        <div className="form-field">
                            <label>EXECUTIVE</label>
                            <div className="select-box">
                                <select defaultValue="">
                                    <option value="" disabled>Select Executive</option>
                                    <option value="1">Executive 1</option>
                                    <option value="2">Executive 2</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="form-field">
                            <label>DATE</label>
                            <input type="date" />
                        </div>

                        <div className="form-field">
                            <label>TIME</label>
                            <input type="time" />
                        </div>

                        <div className="form-field">
                            <label>TASK</label>
                            <div className="select-box">
                                <select defaultValue="">
                                    <option value="" disabled>Select Task</option>
                                    <option value="1">Task 1</option>
                                    <option value="2">Task 2</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bulk-table-container">
                        <div className="bulk-table-header">
                            <div className="bulk-search-box">
                                <Search size={14} color="#64748b" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="bulk-table-wrapper">
                            <table className="bulk-inner-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                        <th>
                                            <div className="th-content">
                                                Customer Name <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>Mobile No</th>
                                        <th>Address</th>
                                        <th>Total Due Amount</th>
                                        <th style={{ width: '200px' }}>Remark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <input 
                                                    type="checkbox" 
                                                    checked={selectedIds.includes(item.id)}
                                                    onChange={() => toggleSelect(item.id)}
                                                />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.address}</td>
                                            <td>₹<span className="due-amount-red">{item.due}</span></td>
                                            <td>
                                                <input 
                                                    type="text" 
                                                    className="inline-remark-input"
                                                    placeholder="Enter remark"
                                                    value={rowRemarks[item.id] || ""}
                                                    onChange={(e) => handleRowRemark(item.id, e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer Group */}
                <div className="lead-footer">
                    <div className="share-group">
                        <button className="btn-share">SHARE</button>
                        <div className="btn-share-dropdown">
                            <div className="share-arrow"></div>
                        </div>
                    </div>
                    <button className="btn-save">SAVE</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default AccountBulkAssignModal;
