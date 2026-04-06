import React, { useState } from 'react';
import { MoreVertical, ChevronsUpDown, Printer, Download, Filter, Search } from 'lucide-react';
import ActionMenu from './ActionMenu';
import './LeadTable.css';

const CampingTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const data = [
        {
            id: 1,
            srNo: 1,
            date: "01/02/2026",
            dateFrom: "01/02/2026",
            dateTo: "28/02/2026",
            campingName: "Winter Carnival",
            leadGenerated: 45,
            executiveName: "Vadu Saren",
            area: "Medinipur",
            totalCost: "5,500",
            vehicleNo: "WB 12 AB 3456"
        }
    ];

    return (
        <div className="table-container">
            <div className="table-header">
                <div className="table-title">Campaning</div>
                <div className="table-actions">
                    <button className="table-action-btn"><Filter size={18} /></button>
                    <button className="table-action-btn"><Printer size={18} /></button>
                    <button className="table-action-btn"><Download size={18} /></button>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="lead-table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>
                                <div className="th-content">
                                    Date <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Date From <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Date To <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Campaning Name <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Lead Generated <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Executive Name <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Area <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Total Cost <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Vehicle No. <ChevronsUpDown size={12} className="sort-icon" />
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
                                <td>{item.date}</td>
                                <td>{item.dateFrom}</td>
                                <td>{item.dateTo}</td>
                                <td style={{ fontWeight: '600' }}>{item.campingName}</td>
                                <td style={{ textAlign: 'center' }}>{item.leadGenerated}</td>
                                <td>
                                    <span style={{ color: '#3b82f6', fontWeight: '600' }}>{item.executiveName}</span>
                                </td>
                                <td>{item.area}</td>
                                <td style={{ fontWeight: '700' }}>{item.totalCost}</td>
                                <td>{item.vehicleNo}</td>
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
        </div>
    );
};

export default CampingTable;
