import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './WarrantyUpdatePopover.css';

const WarrantyUpdatePopover = ({ isOpen, onClose, anchorRect, currentStatus }) => {
    const [status, setStatus] = useState(currentStatus || 'Pending');
    const [remark, setRemark] = useState('');
    const [isClosing, setIsClosing] = useState(false);

    if (!isOpen && !isClosing) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 150);
    };

    const getPosition = () => {
        if (!anchorRect) return {};
        return {
            position: 'fixed',
            top: anchorRect.top,
            left: anchorRect.left - 290, // Position to the left of the action menu
        };
    };

    return createPortal(
        <>
            <div className="warranty-update-popover-overlay" onClick={handleClose} />
            <div 
                className={`warranty-update-popover ${isClosing ? 'fade-out' : ''}`}
                style={getPosition()}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="wp-title">Update:</div>
                
                <div className="wp-form-group">
                    <label className="wp-label">Status</label>
                    <select 
                        className={`wp-select ${status.toLowerCase()}`}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="Settled">Settled</option>
                    </select>
                </div>

                <div className="wp-form-group">
                    <label className="wp-label">Remark:</label>
                    <textarea 
                        className="wp-textarea"
                        placeholder="Enter remark..."
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                    />
                </div>

                <div className="wp-actions">
                    <button className="wp-btn wp-btn-cancel" onClick={handleClose}>Cancel</button>
                    <button className="wp-btn wp-btn-save" onClick={handleClose}>Save</button>
                </div>
            </div>
        </>,
        document.body
    );
};

export default WarrantyUpdatePopover;
