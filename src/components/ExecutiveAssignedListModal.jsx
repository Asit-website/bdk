import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { UserCircle } from 'lucide-react';
import './ExecutiveAssignedListModal.css';

const ExecutiveAssignedListModal = ({ isOpen, onClose, executiveName }) => {
    const [isClosing, setIsClosing] = useState(false);

    const mockData = [
        {
            id: 1,
            enquiryDate: '27/02/2026',
            customer: 'AMIT DEY',
            mobile: '9999999999',
            village: 'MAYTA',
            gp: 'BENACHAPRA',
            block: 'GBA-II',
            remark: 'Document Must be Collected on the 2nd Of March',
            nextFollowup: '10/02/2026'
        },
        {
            id: 2,
            enquiryDate: '27/02/2026',
            customer: 'AMIT DEY',
            mobile: '9999999999',
            village: 'MAYTA',
            gp: 'BENACHAPRA',
            block: 'GBA-II',
            remark: 'Document Must be Collected on the 2nd Of March',
            nextFollowup: '10/02/2026'
        },
        {
            id: 3,
            enquiryDate: '27/02/2026',
            customer: 'AMIT DEY',
            mobile: '9999999999',
            village: 'MAYTA',
            gp: 'BENACHAPRA',
            block: 'GBA-II',
            remark: 'Document Must be Collected on the 2nd Of March',
            nextFollowup: '10/02/2026'
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
        <div className={`assigned-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`assigned-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="assigned-modal-header">
                    <div className="assigned-header-icon">
                        <UserCircle size={20} />
                    </div>
                    <h2>{executiveName || 'BHADU SAREN'}</h2>
                </div>

                <div className="assigned-modal-content">
                    <h3 className="assigned-list-title">Assinged List</h3>
                    
                    <div className="assigned-table-container">
                        <table className="assigned-table">
                            <thead>
                                <tr>
                                    <th>SI No</th>
                                    <th>Enquiry Date</th>
                                    <th>Customer Details</th>
                                    <th>Mobile No</th>
                                    <th>Village</th>
                                    <th>GP</th>
                                    <th>Block</th>
                                    <th>Remark</th>
                                    <th>Next Followup Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockData.map((row, index) => (
                                    <tr key={row.id}>
                                        <td>{index + 1}</td>
                                        <td>{row.enquiryDate}</td>
                                        <td className="bold">{row.customer}</td>
                                        <td>{row.mobile}</td>
                                        <td>{row.village}</td>
                                        <td>{row.gp}</td>
                                        <td>{row.block}</td>
                                        <td className="remark-cell">{row.remark}</td>
                                        <td>{row.nextFollowup}</td>
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

export default ExecutiveAssignedListModal;
