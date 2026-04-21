import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const CampingDropdown = ({ isOpen, anchorRect, title, items, onClose, onSelect }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

    const itemHeight = 42; // estimated height per item
    const headerHeight = 40;
    const menuHeight = headerHeight + (items.length * itemHeight);
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left,
        zIndex: 10000,
    };

    return createPortal(
        <div className="camping-dropdown" style={style} ref={dropdownRef}>
            <div className="camping-dropdown-header">
                <div className="sl-col">Sl</div>
                <div className="title-col">{title}</div>
            </div>
            <div className="camping-dropdown-body">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="camping-dropdown-item" 
                        onClick={() => { onSelect(item); onClose(); }}
                    >
                        <div className="sl-val">{index + 1}.</div>
                        <div className="item-val">{item}</div>
                    </div>
                ))}
            </div>
        </div>,
        document.body
    );
};

export default CampingDropdown;
