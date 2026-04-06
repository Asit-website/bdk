import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Eye, Copy, FileText, Printer, ChevronRight, Trash2, Share2 } from 'lucide-react';

const QuotationActionMenu = ({ isOpen, anchorRect, onClose }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    if (!isOpen || !anchorRect) return null;

    const menuHeight = 220;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 130,
        zIndex: 10000,
    };

    return createPortal(
        <div
            className="action-dropdown shadow-lg"
            style={style}
            onMouseLeave={() => setShowSubMenu(false)}
        >
            <button className="dropdown-item" onClick={onClose}>
                <Eye size={14} /> View / Edit
            </button>
            <button className="dropdown-item" onClick={onClose}>
                <Copy size={14} /> Duplicate
            </button>
            <button className="dropdown-item" onClick={onClose}>
                <FileText size={14} /> Open PDF
            </button>
            <button className="dropdown-item" onClick={onClose}>
                <Printer size={14} /> Print
            </button>

            <div
                className="dropdown-item sub-menu-trigger"
                onMouseEnter={() => setShowSubMenu(true)}
            >
                <div className="trigger-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Share2 size={14} /> Convert
                    </div>
                    <ChevronRight size={14} />
                </div>

                {showSubMenu && (
                    <div className="action-sub-menu shadow-lg">
                        <button className="sub-item" onClick={onClose}>Convert to Sale Order</button>
                        <button className="sub-item" onClick={onClose}>Convert to Sale</button>
                    </div>
                )}
            </div>

            <div className="dropdown-divider"></div>
            <button className="dropdown-item delete" onClick={onClose}>
                <Trash2 size={14} /> Delete
            </button>
        </div>,
        document.body
    );
};

export default QuotationActionMenu;
