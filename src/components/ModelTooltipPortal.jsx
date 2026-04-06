import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ModelTooltipPortal = ({ isOpen, anchorRect, onClose }) => {
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

    const tooltipWidth = 240;
    const tooltipHeight = 160;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < tooltipHeight;
    
    // Position to the left of the anchor
    const style = {
        position: 'fixed',
        top: showAbove ? Math.max(10, anchorRect.top - tooltipHeight + 50) : anchorRect.top,
        left: Math.max(10, anchorRect.left - tooltipWidth - 10),
        zIndex: 10001,
        width: `${tooltipWidth}px`,
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    };

    return createPortal(
        <div ref={menuRef} style={style}>
            <div className="model-info-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="model-info-label" style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Engine No.</span>
                <span className="model-info-value" style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>E2501SHR1256</span>
            </div>
            <div className="model-info-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="model-info-label" style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Chassis No.</span>
                <span className="model-info-value" style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>W2501SHR1325</span>
            </div>
            <div className="model-info-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="model-info-label" style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Battery No.</span>
                <span className="model-info-value" style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>B52152650025</span>
            </div>
        </div>,
        document.body
    );
};

export default ModelTooltipPortal;
