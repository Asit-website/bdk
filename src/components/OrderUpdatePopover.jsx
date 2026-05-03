import React from 'react';
import './OrderUpdatePopover.css';

const OrderUpdatePopover = ({ isOpen, anchorRect, onClose }) => {
    if (!isOpen || !anchorRect) return null;

    const popoverHeight = 220;
    const style = {
        position: 'fixed',
        top: anchorRect.top - popoverHeight - 10,
        left: anchorRect.left - 250,
        zIndex: 10001,
    };

    return (
        <>
            <div className="popover-overlay" onClick={onClose}></div>
            <div className="order-update-popover shadow-xl" style={style}>
                <div className="popover-header">
                    <h4>Update</h4>
                </div>
                <div className="popover-content">
                    <div className="popover-form-row">
                        <div className="popover-field">
                            <label>Date</label>
                            <input type="date" defaultValue="2025-03-22" />
                        </div>
                        <div className="popover-field">
                            <label>Status</label>
                            <select defaultValue="Pending">
                                <option>Pending</option>
                                <option>Delivered</option>
                                <option>Rejected</option>
                            </select>
                        </div>
                    </div>
                    <div className="popover-field full">
                        <label>Remark</label>
                        <textarea placeholder="Enter remark..."></textarea>
                    </div>
                    <div className="popover-footer">
                        <button className="btn-popover-cancel" onClick={onClose}>CANCEL</button>
                        <button className="btn-popover-save" onClick={onClose}>SAVE</button>
                    </div>
                </div>
                <div className="popover-arrow-down" style={{ left: '85%' }}></div>
            </div>
        </>
    );
};

export default OrderUpdatePopover;
