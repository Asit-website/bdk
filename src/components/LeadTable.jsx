import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Filter, Printer, Download, ChevronsUpDown } from 'lucide-react';
import ActionMenu from './ActionMenu';
import LeadAssignModal from './LeadAssignModal';
import './LeadTable.css';

const LeadTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const tableRef = useRef(null);

    const leads = [
        {
            id: 1,
            date: '15/02/2026',
            name: 'ABC',
            mobile: '1234567890',
            block: 'ABC',
            model: 'BD6+',
            source: 'Phone Call',
            agent: 'abnd',
            status: 'Doc Collected',
            nextFollowUp: '20/03/2026',
            assign: 'bbbb'
        },
        {
            id: 2,
            date: '14/02/2026',
            name: 'XYZ Customers',
            mobile: '9876543210',
            block: 'Block A',
            model: 'Model X',
            source: 'Walk-in',
            agent: 'admin',
            status: 'Pending',
            nextFollowUp: '18/02/2026',
            assign: 'staff1'
        }
    ];

    const columns = [
        'Date', 'Name', 'Mobile No.', 'Block', 'Model', 'Source', 'Agent', 'Status', 'Next Follow Up & Visit', 'Assign'
    ];

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    // Close menu on scroll or click outside
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
        <div className="table-container" ref={tableRef}>
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
                                <td>{lead.block}</td>
                                <td>{lead.model}</td>
                                <td>{lead.source}</td>
                                <td>{lead.agent}</td>
                                <td>
                                    <span className={`status-badge ${lead.status.toLowerCase().replace(' ', '-')}`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td>{lead.nextFollowUp}</td>
                                <td>{lead.assign}</td>
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
            />

            <LeadAssignModal
                open={isAssignModalOpen}
                onClose={() => setIsAssignModalOpen(false)}
            />
        </div>
    );
};

export default LeadTable;
