import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './AddNewShiftModal.css';

const AddNewShiftModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        start: '08:30 AM',
        end: '08:30 PM',
        punchIn: 'anytime',
        punchOut: 'anytime'
    });

    if (!isOpen) return null;

    const handleAdd = () => {
        if (!formData.name) return;
        onAdd({
            id: Date.now(),
            name: formData.name,
            time: `${formData.start} - ${formData.end}`,
            ...formData
        });
        onClose();
    };

    return createPortal(
        <div className="modal-overlay add-shift-overlay" onClick={onClose}>
            <div className="modal-container add-shift-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Add New Shift</h3>
                    <button className="modal-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="form-group-wt full-width">
                        <label className="wt-label"><span className="required-star">*</span>Shift Name</label>
                        <input 
                            type="text" 
                            className="wt-input" 
                            placeholder="Enter shift name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="wt-form-row">
                        <div className="form-group-wt half-width">
                            <label className="wt-label"><span className="required-star">*</span>Shift Start Time</label>
                            <input 
                                type="text" 
                                className="wt-input" 
                                value={formData.start}
                                readOnly
                            />
                        </div>

                        <div className="form-group-wt half-width">
                            <label className="wt-label"><span className="required-star">*</span>Can Punch In</label>
                            <div className="wt-radio-group">
                                <label className="wt-radio-option">
                                    <input 
                                        type="radio" 
                                        name="punchIn" 
                                        checked={formData.punchIn === 'anytime'} 
                                        onChange={() => setFormData({ ...formData, punchIn: 'anytime' })}
                                    />
                                    <span className="wt-radio-circle"></span>
                                    Anytime
                                </label>
                                <label className="wt-radio-option">
                                    <input 
                                        type="radio" 
                                        name="punchIn" 
                                        checked={formData.punchIn === 'limit'} 
                                        onChange={() => setFormData({ ...formData, punchIn: 'limit' })}
                                    />
                                    <span className="wt-radio-circle"></span>
                                    Add Limit
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="wt-form-row">
                        <div className="form-group-wt half-width">
                            <label className="wt-label"><span className="required-star">*</span>Shift End Time</label>
                            <input 
                                type="text" 
                                className="wt-input" 
                                value={formData.end}
                                readOnly
                            />
                        </div>

                        <div className="form-group-wt half-width">
                            <label className="wt-label"><span className="required-star">*</span>Can Punch Out</label>
                            <div className="wt-radio-group">
                                <label className="wt-radio-option">
                                    <input 
                                        type="radio" 
                                        name="punchOut" 
                                        checked={formData.punchOut === 'anytime'} 
                                        onChange={() => setFormData({ ...formData, punchOut: 'anytime' })}
                                    />
                                    <span className="wt-radio-circle"></span>
                                    Anytime
                                </label>
                                <label className="wt-radio-option">
                                    <input 
                                        type="radio" 
                                        name="punchOut" 
                                        checked={formData.punchOut === 'limit'} 
                                        onChange={() => setFormData({ ...formData, punchOut: 'limit' })}
                                    />
                                    <span className="wt-radio-circle"></span>
                                    Add Limit
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-footer add-shift-footer">
                    <button className="btn-modal-cancel" onClick={onClose}>Cancel</button>
                    <button className="btn-modal-confirm btn-add-shift-submit" onClick={handleAdd}>Add Shift</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default AddNewShiftModal;
