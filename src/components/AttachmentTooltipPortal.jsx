import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const AttachmentTooltipPortal = ({ isOpen, anchorRect, onClose }) => {
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

    const tooltipWidth = 220;
    const tooltipHeight = 350;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < tooltipHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? Math.max(10, anchorRect.top - tooltipHeight + 30) : anchorRect.bottom + 5,
        left: anchorRect.left - (tooltipWidth / 2) + (anchorRect.width / 2),
        zIndex: 10001,
        width: `${tooltipWidth}px`,
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        maxHeight: `${tooltipHeight}px`,
        overflowY: 'auto'
    };

    const attachments = [
        { name: 'WHEEL-18"\\"DIEL', status: 'GIVEN', statusClass: 'given' },
        { name: 'M.Set', status: 'GIVEN', statusClass: 'given' },
        { name: 'Tool Kit', status: 'GIVEN', statusClass: 'given' },
        { name: 'Service Kit', status: 'GIVEN', statusClass: 'given' },
        { name: 'Weeder', status: 'DUE', statusClass: 'due' },
        { name: 'Potato Planter', status: 'DUE', statusClass: 'due' },
        { name: 'Potato Digger', status: 'DUE', statusClass: 'due' },
        { name: 'Leveler', status: 'GIVEN', statusClass: 'given' },
        { name: 'H.Set', status: 'N/A', statusClass: 'na' },
    ];

    return createPortal(
        <div ref={menuRef} style={style}>
            <div className="attachment-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {attachments.map((item, idx) => (
                    <div key={idx} className="attachment-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', fontWeight: '500' }}>
                        <span className="item-name" style={{ color: '#475569' }}>{item.name}</span>
                        <span className={`item-status ${item.statusClass}`} style={{ 
                            fontSize: '10px', 
                            fontWeight: '800', 
                            padding: '2px 6px', 
                            borderRadius: '4px', 
                            textTransform: 'uppercase',
                            backgroundColor: item.statusClass === 'given' ? '#dcfce7' : item.statusClass === 'due' ? '#fee2e2' : '#f1f5f9',
                            color: item.statusClass === 'given' ? '#166534' : item.statusClass === 'due' ? '#991b1b' : '#64748b'
                        }}>
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>
            <div className="transport-info" style={{ 
                marginTop: '10px', 
                paddingTop: '10px', 
                borderTop: '1px solid #f1f5f9', 
                fontSize: '11px', 
                color: '#64748b' 
            }}>
                Transported By: <span className="transport-name" style={{ fontWeight: '700', color: '#1e293b' }}>SOMNATH MURMU</span>
            </div>
        </div>,
        document.body
    );
};

export default AttachmentTooltipPortal;
