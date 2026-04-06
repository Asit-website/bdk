import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
    Eye,
    Copy,
    FileText,
    Printer,
    Share2,
    Trash2
} from 'lucide-react';

const CounterChallanActionMenu = ({ isOpen, anchorRect, onClose }) => {
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

    const menuWidth = 185;
    const menuHeight = 280;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? Math.max(10, anchorRect.top - menuHeight) : anchorRect.bottom + 5,
        left: Math.max(10, anchorRect.left - menuWidth + 30),
        zIndex: 10000,
        width: `${menuWidth}px`,
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        padding: '5px 0'
    };

    const actionItems = [
        { label: 'View / Edit', icon: <Eye size={14} /> },
        { label: 'Duplicate', icon: <Copy size={14} /> },
        { label: 'Open PDF', icon: <FileText size={14} /> },
        { label: 'Print', icon: <Printer size={14} /> },
        { label: 'Convert To GST', icon: <Share2 size={14} /> },
        { label: 'Delete', icon: <Trash2 size={14} />, isDelete: true }
    ];

    return createPortal(
        <div ref={menuRef} className="action-dropdown shadow-lg" style={style}>
            {actionItems.map((item, index) => (
                <button
                    key={index}
                    className={`dropdown-item ${item.isDelete ? 'delete' : ''}`}
                    onClick={onClose}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        justifyContent: 'flex-start',
                        width: '100%',
                        padding: '10px 16px',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: item.isDelete ? '#ef4444' : '#64748b',
                        transition: 'all 0.2s ease'
                    }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', minWidth: '16px', opacity: 0.8 }}>{item.icon}</span>
                    <span>{item.label}</span>
                </button>
            ))}
        </div>,
        document.body
    );
};

export default CounterChallanActionMenu;
