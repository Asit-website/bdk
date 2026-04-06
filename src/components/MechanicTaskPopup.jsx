import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './MechanicTaskPopup.css';

const MechanicTaskPopup = ({ isOpen, anchorRect, onSelect, onClose }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
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

    const popupWidth = 240;
    const popupHeight = 160;
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - anchorRect.bottom;
    const openAbove = spaceBelow < popupHeight + 12;

    const style = {
        position: 'fixed',
        top: openAbove ? anchorRect.top - popupHeight - 8 : anchorRect.bottom + 8,
        left: anchorRect.left - popupWidth - 10, // Positioned to the left of the action menu
        zIndex: 10002
    };

    const tasks = [
        { sl: 1, name: 'ASIT SAHU', village: 'MAYTA' },
        { sl: 2, name: 'BIKASH DE', village: 'CHADIKA' },
        { sl: 3, name: 'RAM MANDI', village: 'DHADIKA' },
        { sl: 4, name: 'AKSHI MAITY', village: 'NEREALDI' }
    ];

    return createPortal(
        <div ref={popupRef} className="ma-task-popup" style={style}>
            <table className="ma-task-popup-table">
                <thead>
                    <tr className="ma-task-popup-thead-row">
                        <th style={{ width: '40px' }}>Sl</th>
                        <th style={{ width: '100px' }}>Name</th>
                        <th style={{ width: '100px' }}>Village</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr 
                            key={task.sl} 
                            className="ma-task-popup-row"
                            onClick={() => {
                                onSelect(task);
                                onClose();
                            }}
                        >
                            <td>{task.sl}</td>
                            <td>{task.name}</td>
                            <td>{task.village}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>,
        document.body
    );
};

export default MechanicTaskPopup;
