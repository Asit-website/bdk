import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './QuotationProductViewModal.css';

const QuotationProductViewModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const mockProductData = [
        { id: 1, itemName: 'Sharachi 8D6 Power weeder', rate: '1,00,000.00', qty: 5 },
        { id: 2, itemName: 'Cultivator 9 Tines', rate: '23,000.00', qty: 3 },
        { id: 3, itemName: 'Sharachi 9D6+ Power weeder', rate: '1,05,000.00', qty: 1 }
    ];

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsClosing(false);
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

    return createPortal(
        <div className={`product-view-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`product-view-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="product-view-content">
                    <div className="product-view-table-container">
                        <table className="product-view-table">
                            <thead>
                                <tr>
                                    <th className="text-center" style={{ width: '80px' }}>SI No</th>
                                    <th>Item Name</th>
                                    <th className="text-right">Rate/Pcs</th>
                                    <th className="text-center">Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockProductData.map((row, index) => (
                                    <tr key={row.id}>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="bold">{row.itemName}</td>
                                        <td className="text-right">{row.rate}</td>
                                        <td className="text-center">{row.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default QuotationProductViewModal;
