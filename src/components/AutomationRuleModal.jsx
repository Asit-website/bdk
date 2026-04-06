import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './AutomationRuleModal.css';

const AutomationRuleModal = ({ isOpen, onClose, title, initialValue, onConfirm, onTurnOff }) => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    useEffect(() => {
        if (isOpen && initialValue) {
            setHours(initialValue.hours || '');
            setMinutes(initialValue.minutes || '');
        } else if (isOpen) {
            setHours('');
            setMinutes('');
        }
    }, [isOpen, initialValue]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm({ hours, minutes });
    };

    return createPortal(
        <div className="modal-overlay ar-modal-overlay" onClick={onClose}>
            <div className="modal-container ar-rule-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="modal-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-body">
                    <p className="ar-modal-label">Select Duration</p>
                    <div className="duration-inputs">
                        <div className="duration-field">
                            <input 
                                type="text" 
                                placeholder="00" 
                                value={hours}
                                onChange={(e) => setHours(e.target.value)}
                            />
                            <span>hours</span>
                        </div>
                        <div className="duration-field">
                            <input 
                                type="text" 
                                placeholder="00" 
                                value={minutes}
                                onChange={(e) => setMinutes(e.target.value)}
                            />
                            <span>minutes</span>
                        </div>
                    </div>
                </div>

                <div className="modal-footer ar-footer">
                    <button className="btn-ar-turnoff" onClick={onTurnOff}>Turn Off</button>
                    <button className="btn-ar-confirm" onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default AutomationRuleModal;
