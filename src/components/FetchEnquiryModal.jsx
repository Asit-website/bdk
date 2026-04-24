import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Settings, Calendar, Search, Plus, ChevronDown } from 'lucide-react';
import './FetchEnquiryModal.css';

const FetchEnquiryModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [dateFrom, setDateFrom] = useState('2025-01-01');
    const [dateTo, setDateTo] = useState('2026-12-12');

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
        }, 200);
    };

    if (!isOpen && !isClosing) return null;

    const items = [
        { id: 1, date: '22-03-2026', name: 'Vadu Saren', contact: '+91 8000000000', village: 'Mayta', block: 'Garhbeta' },
        { id: 2, date: '12-02-2026', name: 'Khokan Murmu', contact: '+91 8000000000', village: 'Amlasuli', block: 'Taldangra' },
        { id: 3, date: '03-05-2025', name: 'Chadni Patra', contact: '+91 8000000000', village: 'Makli', block: 'Vadu Saren' },
        { id: 4, date: '19-12-2026', name: 'Dipu Dule', contact: '+91 8000000000', village: 'Vadu Saren', block: 'Vadu Saren' },
    ];

    return createPortal(
        <div className={`fetch-enquiry-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div className="fetch-enquiry-modal" onClick={(e) => e.stopPropagation()}>
                <div className="fe-modal-header">
                    <div className="fe-title">Fetch From Enquiry List</div>
                    <div className="fe-header-right">
                        <Settings size={18} />
                        <X size={20} style={{ cursor: 'pointer' }} onClick={handleClose} />
                    </div>
                </div>

                <div className="fe-modal-content">
                    <div className="fe-filters">
                        <div className="fe-date-group">
                            <span className="fe-label">Date From</span>
                            <div className="fe-date-input">
                                <input type="text" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                                <Calendar size={14} color="#64748b" />
                            </div>
                        </div>
                        <div className="fe-date-group">
                            <span className="fe-label">Date To</span>
                            <div className="fe-date-input">
                                <input type="text" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                                <Calendar size={14} color="#64748b" />
                            </div>
                        </div>
                        <button className="fe-btn-search">
                            SEARCH <Search size={14} />
                        </button>
                        <div className="fe-search-box">
                            <Search size={14} color="#64748b" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="fe-table-wrapper">
                        <table className="fe-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Village</th>
                                    <th>Block</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.date}</td>
                                        <td>{item.name}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.village}</td>
                                        <td>{item.block}</td>
                                        <td>
                                            <button className="fe-btn-add">
                                                <Plus size={14} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="fe-modal-footer">
                    <div className="fe-btn-share-wrap">
                        <button className="fe-btn-share">SHARE</button>
                        <button className="fe-btn-share-toggle">
                            <ChevronDown size={14} />
                        </button>
                    </div>
                    <button className="fe-btn-save">SAVE</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default FetchEnquiryModal;
