import React from 'react';
import { createPortal } from 'react-dom';
import { Eye, UserPlus, XCircle, Trash2, History, RefreshCw } from 'lucide-react';

const ActionMenu = ({ isOpen, anchorRect, onClose, onAssign, onUpdate, showUpdate = false }) => {
    if (!isOpen || !anchorRect) return null;

    const baseHeight = 220;
    const menuHeight = showUpdate ? baseHeight + 40 : baseHeight;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 130,
        zIndex: 10000,
    };

    const handleAssignClick = () => {
        onAssign();
        onClose();
    };

    return createPortal(
        <div className="action-dropdown shadow-lg" style={style}>
            <button className="dropdown-item" onClick={onClose}><Eye size={14} /> View/Edit</button>
            <button className="dropdown-item" onClick={handleAssignClick}><UserPlus size={14} /> Assign</button>
            <button className="dropdown-item" onClick={onClose}><XCircle size={14} /> Cancel</button>
            <button className="dropdown-item delete" onClick={onClose}><Trash2 size={14} /> Delete</button>
            {showUpdate && (
                <button className="dropdown-item" onClick={() => { onUpdate(); onClose(); }}><RefreshCw size={14} /> Update</button>
            )}
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={onClose}><History size={14} /> View History</button>
        </div>,
        document.body
    );
};

export default ActionMenu;
