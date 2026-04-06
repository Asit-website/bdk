import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './MechanicTaskDetailModal.css';

const MechanicTaskDetailModal = ({ isOpen, onClose, taskData }) => {
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

    const problems = [
        'FUEL PIPE CHANGE',
        'FUEL NOZZEL CHANGE',
        'FUEL FILTER CHANGE',
        'STARTING PROBLEM',
        'STARTER ROPE',
        'CHOLTE CHOLTE GARI BONDHO HOYE JACHHE'
    ];

    const history = [
        { booking: '22/11/2025', working: '24/11/2025', tech: 'VADU SAREN', service: 'FUEL PIPE CHANGE', remark: '' },
        { booking: '23/07/2025', working: '29/07/2025', tech: 'CHANDI PATRA', service: 'SELF MOTOR REPAIR', remark: '' },
        { booking: '20/01/2025', working: '24/01/2025', tech: 'SANDIP SINGH', service: 'STARTER ROPE CHANGE', remark: '' },
        { booking: '12/01/2025', working: '14/01/2025', tech: 'UTPAL MAKUR', service: 'FUEL NOZZEL ASSY', remark: '' }
    ];

    return createPortal(
        <div className={`ma-detail-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`ma-detail-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="ma-detail-modal-content">
                    {/* Header Row: Customer Info + Voice */}
                    <div className="ma-detail-header-row">
                        <div className="ma-detail-left-col">
                            <h4 className="ma-detail-section-title">Customer Details</h4>
                            <div className="ma-detail-info-grid">
                                <div className="ma-detail-info-item"><strong>Customer Name:-</strong> {taskData?.name || 'ASIT SALUI'}</div>
                                <div className="ma-detail-info-item"><strong>Mobile No:-</strong> 9999999999</div>
                                <div className="ma-detail-info-item"><strong>Village:-</strong> {taskData?.village || 'MAYTA'}</div>
                                <div className="ma-detail-info-item"><strong>GP:-</strong> BENACHAPRA</div>
                                <div className="ma-detail-info-item"><strong>Block:-</strong> GARHBETA-I</div>
                                <div className="ma-detail-info-item"><strong>Area:-</strong> AMLAGORA</div>
                                <div className="ma-detail-info-item"><strong>Chassis No:-</strong> W2505SHR1266</div>
                                <div className="ma-detail-info-item"><strong>Model No:-</strong> 9D6+</div>
                            </div>
                        </div>

                        <div className="ma-detail-right-col">
                            <h4 className="ma-detail-section-title">Customer Voice/Problem</h4>
                            <div className="ma-problem-area">
                                {problems.map((p, idx) => (
                                    <div key={idx} className="ma-problem-tag">
                                        {p} <span>×</span>
                                    </div>
                                ))}
                            </div>
                            <div className="ma-caution-remark">
                                <span className="ma-caution-label">Remark:-</span>
                                <span className="ma-caution-text">Customer Ko Call Kore Jete Hobe.</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Previous Service History */}
                    <div className="ma-detail-history-section">
                        <h4 className="ma-detail-section-title">Previous Service</h4>
                        <table className="ma-history-table">
                            <thead>
                                <tr>
                                    <th>Booking Date</th>
                                    <th>Working Date</th>
                                    <th>Technician</th>
                                    <th>Service</th>
                                    <th style={{ width: '150px' }}>Reamark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((row, idx) => (
                                    <tr key={idx}>
                                        <td>{row.booking}</td>
                                        <td>{row.working}</td>
                                        <td>{row.tech}</td>
                                        <td>{row.service}</td>
                                        <td>{row.remark}</td>
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

export default MechanicTaskDetailModal;
