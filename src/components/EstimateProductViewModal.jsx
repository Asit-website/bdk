import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './EstimateProductViewModal.css';

const EstimateProductViewModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 150);
    };

    if (!isOpen && !isClosing) return null;

    const data = [
        { name: 'FUEL PIPE ASSY', rate: '50.00', qty: '20' },
        { name: 'FUEL NOZZEL ASSY 188F', rate: '3,200.00', qty: '10' },
        { name: 'FUEL FILTER ASSY', rate: '160.00', qty: '50' }
    ];

    return createPortal(
        <div className={`estimate-product-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`estimate-product-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <table className="estimate-product-table">
                    <thead>
                        <tr>
                            <th>Part Nmae</th>
                            <th>Rate/Pcs</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx}>
                                <td className="text-uppercase">{item.name}</td>
                                <td>{item.rate}</td>
                                <td>{item.qty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>,
        document.body
    );
};

export default EstimateProductViewModal;
