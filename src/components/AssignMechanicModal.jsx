import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import './AssignMechanicModal.css';

const AssignMechanicModal = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [openRemarkId, setOpenRemarkId] = useState(null);
    const [openVoiceId, setOpenVoiceId] = useState(null);

    if (!isOpen) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    const rows = [
        { id: 1, date: '20/03/2025', category: 'DEMO', remark: 'Call Kore Jete Hobe.', voice: ['FUEL PIPE CHANGE', 'FUEL NOZZEL CHANGE', 'FUEL FILTER CHANGE'], name: 'SERMA HEMBRAM', mobile: '9632547852', village: 'METALA', area: 'GOALTORE', block: 'TALDANGRA', service: 'view', type: 'FREE', status: 'BOOKED', checked: true },
        { id: 2, date: '20/03/2025', category: 'SERVICE', remark: 'Call Kore Jete Hobe.', voice: ['STARTING PROBLEM', 'STARTER ROPE'], name: 'SERMA HEMBRAM', mobile: '9632547852', village: 'METALA', area: 'GOALTORE', block: 'TALDANGRA', service: 'view', type: 'FREE', status: 'BOOKED' },
        { id: 3, date: '20/03/2025', category: 'DEMO', remark: 'Call Kore Jete Hobe.', voice: ['CHOLTE CHOLTE GARI BONDHO HOYE JACHHE'], name: 'SERMA HEMBRAM', mobile: '9632547852', village: 'METALA', area: 'GOALTORE', block: 'TALDANGRA', service: 'view', type: 'PAID', status: 'BOOKED' },
        { id: 4, date: '20/03/2025', category: 'SERVICE', remark: 'Call Kore Jete Hobe.', voice: ['FUEL PIPE CHANGE'], name: 'ERMA HEMBRAM', mobile: '9632547852', village: 'METALA', area: 'GOALTORE', block: 'TALDANGRA', service: 'view', type: 'FREE', status: 'BOOKED' },
        { id: 5, date: '20/03/2025', category: 'DEMO', remark: 'Call Kore Jete Hobe.', voice: ['FUEL NOZZEL CHANGE'], name: 'SERMA HEMBRAM', mobile: '9632547852', village: 'METALA', area: 'GOALTORE', block: 'TALDANGRA', service: 'view', type: 'FREE', status: 'BOOKED' },
        { id: 6, date: '20/03/2025', category: 'SERVICE', remark: 'Call Kore Jete Hobe.', voice: ['FUEL FILTER CHANGE'], name: 'SERMA HEMBRAM', mobile: '9632547852', village: 'METALA', area: 'GOALTORE', block: 'TALDANGRA', service: 'view', type: 'PAID', status: 'BOOKED' },
    ];

    return (
        <div className={`booking-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`booking-modal assign-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="booking-modal-header assign-modal-header">
                    <span className="booking-title">Machanic Assign</span>
                    <X size={18} className="close-icon" onClick={handleClose} />
                </div>

                <div className="booking-modal-body assign-modal-body">
                    <div className="assign-top-row">
                        <div className="assign-field">
                            <label>Assign Date</label>
                            <input type="date" />
                        </div>
                        <div className="assign-field">
                            <label>Machanic Name</label>
                            <div className="select-box">
                                <select>
                                    <option>Vadu Saren</option>
                                    <option>Chandi Patra</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>
                        <div className="assign-field">
                            <label>Working Date</label>
                            <input type="date" />
                        </div>
                    </div>

                    <div className="assign-services-title">Services:</div>

                    <div className="assign-table-wrapper">
                        <table className="assign-table">
                            <thead>
                                <tr>
                                    <th>SELECT</th>
                                    <th>BOOKING DATE</th>
                                    <th>SERVICE CATEGORY</th>
                                    <th>REMARK</th>
                                    <th>CUSTOMER VOICE</th>
                                    <th>CUSTOMER NAME</th>
                                    <th>MOBILE NO</th>
                                    <th>VILLAGE</th>
                                    <th>AREA</th>
                                    <th>BLOCK</th>
                                    <th>SERVICE TYPE</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.id}>
                                        <td><input type="checkbox" defaultChecked={row.checked} /></td>
                                        <td>{row.date}</td>
                                        <td>{row.category}</td>
                                        <td style={{ position: 'relative' }}>
                                            <span className="assign-view" onClick={() => setOpenRemarkId(openRemarkId === row.id ? null : row.id)}>view</span>
                                            {openRemarkId === row.id && (
                                                <div className="assign-remark-popup" style={{ position: 'absolute', top: '100%', left: 0 }}>
                                                    <div className="remark-label">Remark:-</div>
                                                    <div className="remark-text">{row.remark}</div>
                                                </div>
                                            )}
                                        </td>
                                        <td style={{ position: 'relative' }}>
                                            <span className="assign-view" onClick={() => setOpenVoiceId(openVoiceId === row.id ? null : row.id)}>view</span>
                                            {openVoiceId === row.id && (
                                                <div className="assign-voice-popup" style={{ position: 'absolute', top: '100%', left: 0 }}>
                                                    {row.voice.map((v, i) => (
                                                        <div key={i} className="assign-voice-chip">
                                                            {v} <span>×</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </td>
                                        <td>{row.name}</td>
                                        <td>{row.mobile}</td>
                                        <td>{row.village}</td>
                                        <td>{row.area}</td>
                                        <td>{row.block}</td>
                                        <td className={`assign-type ${row.type === 'PAID' ? 'paid' : 'free'}`}>{row.type}</td>
                                        <td className="assign-status">{row.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="assign-modal-footer">
                    <button type="button" className="assign-cancel" onClick={handleClose}>Cancel</button>
                    <button type="button" className="assign-save">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AssignMechanicModal;
