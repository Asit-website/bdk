import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MoreVertical, Filter, Printer, Download, ChevronsUpDown, Eye, Edit2, UserPlus, XCircle, Trash2, History } from 'lucide-react';
import './LeadTable.css';

import ActionMenu from './ActionMenu';
import LeadAssignModal from './LeadAssignModal';
import LeadUpdateModal from './LeadUpdateModal';

const LeadAssignTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

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
                                    <button
                                        className="btn-assign-now"
                                        onClick={() => setIsAssignModalOpen(true)}
                                    >
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
                onAssign={() => setIsAssignModalOpen(true)}
                onUpdate={() => setIsUpdateModalOpen(true)}
                showUpdate={true}
            />

            <LeadAssignModal
                open={isAssignModalOpen}
                onClose={() => setIsAssignModalOpen(false)}
            />

            <LeadUpdateModal
                open={isUpdateModalOpen}
                onClose={() => setIsUpdateModalOpen(false)}
            />
        </div>
    );
};

export default LeadAssignTable;
