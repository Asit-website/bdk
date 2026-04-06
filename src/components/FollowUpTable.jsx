import React, { useState } from 'react';
import { MoreVertical, ChevronsUpDown, Printer, Download, Filter } from 'lucide-react';
import ActionMenu from './ActionMenu';
import ExecutiveAssignedListModal from './ExecutiveAssignedListModal';
import './LeadTable.css';
import './ExecutiveAssignedListModal.css';

const FollowUpTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const [isAssignedListModalOpen, setIsAssignedListModalOpen] = useState(false);
    const [selectedExecutive, setSelectedExecutive] = useState('');

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const handleExecutiveClick = (name) => {
        setSelectedExecutive(name);
        setIsAssignedListModalOpen(true);
    };

    const data = [
        // ... (data remains the same)
        {
            id: 1,
            srNo: 1,
            remark: "Documents must be Collected on the 2nd Of March",
            enquiryDate: "01/02/2026",
            leadSource: "-",
            leadNature: "High",
            customerName: "Chandi Patra",
            customerPhone: "+91 852654785",
            executive: "Vadu Saren",
            followupCount: 2,
            nextFollowupDate: "10/02/2026",
            preFollowupDate: "08/02/2026",
            followupStatus: "-",
            leadStatus: "-"
        }
    ];

    return (
        <div className="table-container">
            {/* ... (table header remains the same) */}
            <div className="table-header">
                <div className="table-title">Follow Up</div>
                <div className="table-actions">
                    <button className="table-action-btn"><Filter size={18} /></button>
                    <button className="table-action-btn"><Printer size={18} /></button>
                    <button className="table-action-btn"><Download size={18} /></button>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="lead-table">
                    <thead>
                        {/* ... (thead remains the same) */}
                        <tr>
                            <th>Sr No.</th>
                            <th>
                                <div className="th-content">
                                    Remark <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Enquiry Date <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Lead Source <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Lead Nature <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Customer Details <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Executive Name <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Followup Count <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Next Followup Date <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Pre Followup Date <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Followup Status <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Lead Status <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th style={{ textAlign: 'center' }}>
                                <div className="th-content" style={{ justifyContent: 'center' }}>
                                    Action <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.srNo}</td>
                                <td style={{ maxWidth: '200px', fontSize: '11px', lineHeight: '1.2' }}>{item.remark}</td>
                                <td>{item.enquiryDate}</td>
                                <td>{item.leadSource}</td>
                                <td>
                                    <span style={{
                                        color: item.leadNature === 'High' ? '#10b981' : 'inherit',
                                        fontWeight: '700'
                                    }}>
                                        {item.leadNature}
                                    </span>
                                </td>
                                <td>
                                    <div style={{ fontWeight: '700' }}>{item.customerName}</div>
                                    <div style={{ color: '#64748b', fontSize: '12px' }}>{item.customerPhone}</div>
                                </td>
                                <td>
                                    <span 
                                        className="executive-name-link"
                                        onClick={() => handleExecutiveClick(item.executive)}
                                    >
                                        {item.executive}
                                    </span>
                                </td>
                                <td style={{ textAlign: 'center' }}>{item.followupCount}</td>
                                <td>{item.nextFollowupDate}</td>
                                <td>{item.preFollowupDate}</td>
                                <td>{item.followupStatus}</td>
                                <td>{item.leadStatus}</td>
                                <td className="action-cell">
                                    <button
                                        className={`action-dots ${openMenuId === item.id ? 'active' : ''}`}
                                        onClick={(e) => toggleMenu(e, item.id)}
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
                showUpdate={true}
            />

            <ExecutiveAssignedListModal 
                isOpen={isAssignedListModalOpen}
                onClose={() => setIsAssignedListModalOpen(false)}
                executiveName={selectedExecutive}
            />
        </div>
    );
};

export default FollowUpTable;
