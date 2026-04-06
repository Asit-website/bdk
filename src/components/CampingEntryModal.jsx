import React, { useState, useEffect } from 'react';
import { X, Settings, Plus, ChevronDown } from 'lucide-react';
import './CampingEntryModal.css';

const CampingEntryModal = ({ open, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [executives, setExecutives] = useState(['1. abcd', '2. abcd', '3. abcd', '4. abcd']);
    const [areas, setAreas] = useState(['1. abcd', '2. abcd', '3. abcd', '4. abcd']);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!open && !isClosing) return null;

    const removeItem = (list, setList, index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    return (
        <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`lead-modal camping-entry-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

                {/* Header */}
                <div className="lead-modal-header">
                    <div className="lead-title">Campaning Entry</div>
                    <div className="lead-header-icons">
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                <div className="lead-form-wrapper">
                    {/* Top Section - 5 Fields */}
                    <div className="lead-form-grid">
                        <div className="form-field">
                            <label>Campaning Name</label>
                            <input type="text" placeholder="Enter name" />
                        </div>
                        <div className="form-field">
                            <label>Description</label>
                            <input type="text" placeholder="Enter description" />
                        </div>
                        <div className="form-field">
                            <label>Date From</label>
                            <input type="date" />
                        </div>
                        <div className="form-field">
                            <label>Date To</label>
                            <input type="date" />
                        </div>
                        <div className="form-field">
                            <label>Expected Lead</label>
                            <input type="text" placeholder="Enter number" />
                        </div>
                    </div>

                    {/* Middle Section - Executive and Area Lists */}
                    <div className="camping-list-grid">
                        {/* Executive Column */}
                        <div className="list-column-field">
                            <label>Executive</label>
                            <div className="list-action-row">
                                <div className="select-box">
                                    <select>
                                        <option>Select Executive</option>
                                    </select>
                                    <div className="select-arrow"></div>
                                </div>
                                <button className="add-item-btn"><Plus size={16} /></button>
                            </div>
                            <div className="items-list-box">
                                {executives.map((exec, idx) => (
                                    <div key={idx} className="list-item-row">
                                        <span>{exec}</span>
                                        <X size={14} className="remove-item-icon" onClick={() => removeItem(executives, setExecutives, idx)} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Area Column */}
                        <div className="list-column-field">
                            <label>Area</label>
                            <div className="list-action-row">
                                <div className="select-box">
                                    <select>
                                        <option>Select Area</option>
                                    </select>
                                    <div className="select-arrow"></div>
                                </div>
                                <button className="add-item-btn"><Plus size={16} /></button>
                            </div>
                            <div className="items-list-box">
                                {areas.map((area, idx) => (
                                    <div key={idx} className="list-item-row">
                                        <span>{area}</span>
                                        <X size={14} className="remove-item-icon" onClick={() => removeItem(areas, setAreas, idx)} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cost and Vehicle Column */}
                        <div className="side-inputs-group">
                            <div className="form-field">
                                <label>Total Cost</label>
                                <input type="text" placeholder="Enter cost" />
                            </div>
                            <div className="form-field">
                                <label>Vehicle No</label>
                                <input type="text" placeholder="Enter vehicle no" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Remark */}
                    <div className="remark-section">
                        <label>Remark</label>
                        <textarea placeholder="Enter remark"></textarea>
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

export default CampingEntryModal;
