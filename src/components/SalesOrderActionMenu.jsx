import React from 'react';
import { createPortal } from 'react-dom';
import { Eye, Trash2, Printer, RefreshCcw } from 'lucide-react';

const SalesOrderActionMenu = ({ isOpen, anchorRect, onClose, onUpdate }) => {
    if (!isOpen || !anchorRect) return null;

    const menuHeight = 160;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 160,
        width: '160px',
        zIndex: 10000,
        whiteSpace: 'nowrap'
    };

    return createPortal(
        <>
            <div 
                className="popover-overlay" 
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }} 
                onClick={onClose}
            ></div>
            <div className="action-dropdown shadow-lg" style={style}>
                <button className="dropdown-item" onClick={onClose}>
                    <Eye size={14} /> View / Edit
                </button>
                <button className="dropdown-item" onClick={onClose}>
                    <Printer size={14} /> Print
                </button>
                <button className="dropdown-item" onClick={onClose}>
                    <RefreshCcw size={14} /> Convert to Challan
                </button>
                <button className="dropdown-item" onClick={() => { onUpdate(); onClose(); }}>
                    <RefreshCcw size={14} /> Update
                </button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item delete" onClick={onClose}>
                    <Trash2 size={14} /> Delete
                </button>
            </div>
        </>,
        document.body
    );
};

export default SalesOrderActionMenu;
