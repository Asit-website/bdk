import React, { useState } from "react";
import { X, Settings, Search, ChevronsUpDown } from "lucide-react";
import "./ContactListModal.css";

const ContactListModal = ({ open, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!open && !isClosing) return null;

    const contacts = [
        { id: 1, name: "Vadu Saren", village: "Mayta", contact: "+91 8000000000", block: "Garhbeta", model: "9d6+" },
        { id: 2, name: "Khokan Murmu", village: "Amlasuli", contact: "+91 8000000000", block: "Taldangra", model: "8d6" },
        { id: 3, name: "Chadni Patra", village: "Makli", contact: "+91 8000000000", block: "Vadu Saren", model: "Vadu Saren" },
        { id: 4, name: "Dipu Dule", village: "Vadu Saren", contact: "+91 8000000000", block: "Vadu Saren", model: "Vadu Saren" },
    ];

    return (
        <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`lead-modal contact-list-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

                {/* Header */}
                <div className="lead-modal-header">
                    <div className="lead-title">Contact List</div>
                    <div className="lead-header-icons">
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                {/* Modal Logic Content */}
                <div className="lead-form-wrapper">
                    <div className="bulk-table-container">
                        <div className="bulk-table-header" style={{ justifyContent: 'flex-end' }}>
                            <div className="bulk-search-box">
                                <Search size={14} color="#64748b" />
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>

                        <div className="bulk-table-wrapper">
                            <table className="bulk-inner-table">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox" /></th>
                                        <th>
                                            <div className="th-content">
                                                Name <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Village <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Contact <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Block <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                        <th>
                                            <div className="th-content">
                                                Model <ChevronsUpDown size={12} className="sort-icon" />
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((contact) => (
                                        <tr key={contact.id}>
                                            <td><input type="checkbox" /></td>
                                            <td style={{ fontWeight: '600' }}>{contact.name}</td>
                                            <td>{contact.village}</td>
                                            <td>{contact.contact}</td>
                                            <td>{contact.block}</td>
                                            <td>{contact.model}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="lead-footer">
                    <div className="share-group">
                        <button className="btn-share">Share</button>
                        <div className="btn-share-dropdown">
                            <div className="share-arrow"></div>
                        </div>
                    </div>
                    <button className="btn-save">Save</button>
                </div>

            </div>
        </div>
    );
};

// Internal icon for the share button
const ChevronDown = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);

export default ContactListModal;
