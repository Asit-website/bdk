import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './BlockUnblockPopover.css';

const BlockUnblockPopover = ({ isOpen, onClose, anchorRect, currentStatus }) => {
    const [status, setStatus] = useState(currentStatus || 'Block');
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
        const viewportHeight = window.innerHeight;
        const popoverHeight = 280; // Approximate height
        const spaceBelow = viewportHeight - anchorRect.top;
        
        let top = anchorRect.top;
        if (spaceBelow < popoverHeight) {
            top = Math.max(10, anchorRect.bottom - popoverHeight);
        }

        return {
            position: 'fixed',
            top: top,
            left: anchorRect.left - 290,
        };
    };

    return createPortal(
        <>
            <div className="block-unblock-popover-overlay" onClick={handleClose} />
            <div 
                className={`block-unblock-popover ${isClosing ? 'fade-out' : ''}`}
                style={getPosition()}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="bu-title">Block/Unblock:</div>
                
                <div className="bu-form-group">
                    <label className="bu-label">Status</label>
                    <select 
                        className={`bu-select ${status.toLowerCase()}`}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Block">Block</option>
                        <option value="Unblock">Unblock</option>
                    </select>
                </div>

                <div className="bu-form-group">
                    <label className="bu-label">Remark:</label>
                    <textarea 
                        className="bu-textarea"
                        placeholder="Enter remark..."
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                    />
                </div>

                <div className="bu-actions">
                    <button className="bu-btn bu-btn-cancel" onClick={handleClose}>Cancel</button>
                    <button className="bu-btn bu-btn-save" onClick={handleClose}>Save</button>
                </div>
            </div>
        </>,
        document.body
    );
};

export default BlockUnblockPopover;
