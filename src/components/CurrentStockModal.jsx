import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './CurrentStockModal.css';

const CurrentStockModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const mockStockData = [
        {
            id: 1,
            partCode: 'SPMTWEBD2030',
            partName: 'FUEL PIPE ASSY',
            branchName: 'WORKSHOP',
            rackNo: 'G1',
            binNo: '18',
            qty: 50
        },
        {
            id: 2,
            partCode: 'SPMTWEBD2030',
            partName: 'FUEL PIPE ASSY',
            branchName: 'SHOP',
            rackNo: 'G4',
            binNo: '20',
            qty: 10
        }
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
        <div className={`stock-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`stock-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="stock-modal-content">
                    <div className="stock-table-container">
                        <table className="stock-table">
                            <thead>
                                <tr>
                                    <th>Part Code</th>
                                    <th>Part Name</th>
                                    <th>Branch Name</th>
                                    <th>Rack No</th>
                                    <th>Bin No</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockStockData.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.partCode}</td>
                                        <td>{row.partName}</td>
                                        <td>{row.branchName}</td>
                                        <td>{row.rackNo}</td>
                                        <td>{row.binNo}</td>
                                        <td>{row.qty}</td>
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

export default CurrentStockModal;
