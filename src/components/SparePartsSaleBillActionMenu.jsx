import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Eye, FileText, Printer, Trash2, History } from 'lucide-react';
import './ActionMenu.css';

const SparePartsSaleBillActionMenu = ({ isOpen, anchorRect, onClose }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !anchorRect) return null;

    const menuHeight = 260; // Approximate height for 5 items + dividers
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const menuStyle = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 150,
        zIndex: 10000,
    };

    return createPortal(
        <div
            ref={menuRef}
            className="action-menu-dropdown show"
            style={menuStyle}
        >
            <div className="action-item" onClick={onClose}>
                <Eye size={16} className="action-icon" />
                <span>View/Edit</span>
            </div>
            <div className="divider"></div>
            <div className="action-item" onClick={onClose}>
                <FileText size={16} className="action-icon" />
                <span>Open PDF</span>
            </div>
            <div className="divider"></div>
            <div className="action-item" onClick={onClose}>
                <Printer size={16} className="action-icon" />
                <span>Print</span>
            </div>
            <div className="divider"></div>
            <div className="action-item delete" onClick={onClose}>
                <Trash2 size={16} className="action-icon" />
                <span>Delete</span>
            </div>
            <div className="divider"></div>
            <div className="action-item" onClick={onClose}>
                <History size={16} className="action-icon" />
                <span>View History</span>
            </div>
        </div>,
        document.body
    );
};

export default SparePartsSaleBillActionMenu;
