import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, Filter, Printer, Download, ChevronsUpDown, Eye, Edit2, UserPlus, XCircle, Trash2, History } from 'lucide-react';
import './LeadTable.css';

const ActionMenu = ({ isOpen, anchorRect, onClose }) => {
    if (!isOpen || !anchorRect) return null;

    const menuHeight = 220;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 130,
        zIndex: 10000,
    };

    return createPortal(
        <div className="action-dropdown shadow-lg" style={style}>
            <button className="dropdown-item" onClick={onClose}><Eye size={14} /> View/Edit</button>
            <button className="dropdown-item" onClick={onClose}><UserPlus size={14} /> Assign</button>
            <button className="dropdown-item" onClick={onClose}><XCircle size={14} /> Cancel</button>
            <button className="dropdown-item delete" onClick={onClose}><Trash2 size={14} /> Delete</button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={onClose}><History size={14} /> View History</button>
        </div>,
        document.body
    );
};

const LeadAssignTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);

    const leads = [
        {
            id: 1,
            date: '15/02/2026',
            name: 'ABC',
            mobile: '1234567890',
            village: 'ABC',
            model: 'BD6+',
            remark: 'Phone Call',
            executive: 'abcd',
            status: '...',
            assign: 'Assign Now'
        }
    ];

    const columns = [
        'Date', 'Name', 'Mobile No.', 'Vill/Block', 'Model', 'Remark', 'Assign Exective', 'Lead Status', 'Assing'
    ];

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    useEffect(() => {
        const handleEvent = () => setOpenMenuId(null);
        window.addEventListener('scroll', handleEvent, true);
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.action-dots')) handleEvent();
        });
        return () => {
            window.removeEventListener('scroll', handleEvent, true);
            window.removeEventListener('click', handleEvent);
        };
    }, []);

    return (
        <div className="table-container">
            <div className="table-header">
                <h3 className="table-title">Transactions</h3>
                <div className="table-actions">
                    <button className="table-action-btn"><Filter size={16} /></button>
                    <button className="table-action-btn"><Printer size={16} /></button>
                    <button className="table-action-btn"><Download size={16} /></button>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="lead-table">
                    <thead>
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx}>
                                    <div className="th-content">
                                        {col}
                                        <ChevronsUpDown size={12} className="sort-icon" />
                                    </div>
                                </th>
                            ))}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id}>
                                <td>{lead.date}</td>
                                <td>{lead.name}</td>
                                <td>{lead.mobile}</td>
                                <td>{lead.village}</td>
                                <td>{lead.model}</td>
                                <td>{lead.remark}</td>
                                <td>{lead.executive}</td>
                                <td>
                                    <div className="status-with-dot">
                                        <span className="dot yellow"></span>
                                        {lead.status}
                                    </div>
                                </td>
                                <td>
                                    <button className="btn-assign-now">
                                        Assign Now
                                    </button>
                                </td>
                                <td className="action-cell">
                                    <button
                                        className={`action-dots ${openMenuId === lead.id ? 'active' : ''}`}
                                        onClick={(e) => toggleMenu(e, lead.id)}
                                    >
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ActionMenu
                isOpen={openMenuId !== null}
                anchorRect={anchorRect}
                onClose={() => setOpenMenuId(null)}
            />
        </div>
    );
};

export default LeadAssignTable;
