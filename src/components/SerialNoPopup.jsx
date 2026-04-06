import React from 'react';
import { createPortal } from 'react-dom';
import './SerialNoPopup.css';

const SerialNoPopup = ({ isOpen, anchorRect, onClose }) => {
    if (!isOpen || !anchorRect) return null;

    const popupWidth = 220;
    const popupHeight = 280;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const spaceRight = window.innerWidth - anchorRect.left;

    const top = spaceBelow < popupHeight ? anchorRect.top - popupHeight - 8 : anchorRect.bottom + 8;
    const left = spaceRight < popupWidth ? anchorRect.right - popupWidth : anchorRect.left - 40;

    const style = {
        position: 'fixed',
        top,
        left,
        zIndex: 11000,
    };

    const serials = [
        '85215558H50021',
        '85215558H50030',
        '85215558H50025',
    ];

    return createPortal(
        <div className="serial-popup" style={style}>
            <div className="serial-popup-header">Serial No.</div>
            <div className="serial-popup-list">
                {serials.map((s, idx) => (
                    <button
                        key={s}
                        className={`serial-popup-item ${idx === 2 ? 'active' : ''}`}
                        onClick={onClose}
                    >
                        {s}
                    </button>
                ))}
            </div>
            <div className="serial-popup-input">
                <input type="text" placeholder="" />
            </div>
        </div>,
        document.body
    );
};

export default SerialNoPopup;
