import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
    Eye,
    FileText,
    Printer,
    RefreshCw,
    Trash2,
    History
} from 'lucide-react';

const DeliveryChallanActionMenu = ({ isOpen, anchorRect, onClose, onUpdate }) => {
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

    const menuWidth = 180;
    const menuHeight = 260; // Pruned for 6 items
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? Math.max(10, anchorRect.top - menuHeight) : anchorRect.bottom + 5,
        left: Math.max(10, anchorRect.left - menuWidth + 30),
        zIndex: 10000,
        width: `${menuWidth}px`,
        maxHeight: `${menuHeight}px`,
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        padding: '5px 0',
        overflowY: 'auto'
    };

    const actionItems = [
        { label: 'View/Edit', icon: <Eye size={14} />, onClick: onClose },
        { label: 'Open PDF', icon: <FileText size={14} />, onClick: onClose },
        { label: 'Print', icon: <Printer size={14} />, onClick: onClose },
        { label: 'Update', icon: <RefreshCw size={14} />, onClick: onUpdate },
        { label: 'Delete', icon: <Trash2 size={14} />, isDelete: true, onClick: onClose },
        { label: 'View History', icon: <History size={14} />, onClick: onClose }
    ];

    return createPortal(
        <div ref={menuRef} className="action-dropdown shadow-lg" style={style}>
            {actionItems.map((item, index) => (
                <button
                    key={index}
                    className={`dropdown-item ${item.isDelete ? 'delete' : ''}`}
                    onClick={() => { item.onClick(); onClose(); }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        justifyContent: 'flex-start',
                        width: '100%',
                        padding: '10px 15px',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: item.isDelete ? '#ef4444' : '#1e293b'
                    }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', minWidth: '16px' }}>{item.icon}</span>
                    <span>{item.label}</span>
                </button>
            ))}
        </div>,
        document.body
    );
};

export default DeliveryChallanActionMenu;
