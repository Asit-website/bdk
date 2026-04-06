import React, { useState } from 'react';
import { Search, Filter, Download, FileText, Share2, MoreVertical, ChevronsUpDown } from 'lucide-react';
import TrainingWarrantyActionMenu from './TrainingWarrantyActionMenu';
import './QuotationTable.css'; // Reusing established table styles

const TrainingWarrantyTable = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);

    const data = [
        {
            id: 1,
            date: '23/03/2026',
            appId: 'F8004586',
            scheme: 'FSSM',
            category: 'ABC',
            partyName: 'xyz',
            vill: 'pqr',
            gp: 'abc',
            block: 'Garhbeta',
            engineNo: '25632532',
            chassisNo: '2658562',
            model: '9D6+'
        },
        {
            id: 2,
            date: '23/03/2026',
            appId: 'F8004586',
            scheme: 'FMB',
            category: 'ABC',
            partyName: 'xyz',
            vill: 'pqr',
            gp: 'abc',
            block: 'Garhbeta',
            engineNo: '25632532',
            chassisNo: '2658562',
            model: '9D6+'
        }
    ];

    const handleActionClick = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (menuAnchor && menuAnchor.id === id) {
            setMenuAnchor(null);
        } else {
            setMenuAnchor({
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.width,
                id: id
            });
        }
    };

    return (
        <div className="quotation-table-section">
            <div className="table-header-toolbar">
                <h3 className="section-title">Transactions</h3>
                <div className="toolbar-actions">
                    <Search size={18} className="toolbar-icon" />
                    <Filter size={18} className="toolbar-icon" />
                    <Download size={18} className="toolbar-icon" />
                    <FileText size={18} className="toolbar-icon" />
                    <Share2 size={18} className="toolbar-icon" />
                </div>
            </div>

            <div className="table-wrapper">
                <table className="quotation-data-table">
                    <thead>
                        <tr>
                            <th><div className="th-content">sl No. <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Date <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Application ID <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Scheme <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Category <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Party Name <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Vill <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">GP <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Block <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Engine No. <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Chassis No <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Model <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th style={{ width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}.</td>
                                <td>{item.date}</td>
                                <td style={{ color: '#3b82f6', fontWeight: '600', cursor: 'pointer' }}>{item.appId}</td>
                                <td>{item.scheme}</td>
                                <td>{item.category}</td>
                                <td>{item.partyName}</td>
                                <td>{item.vill}</td>
                                <td>{item.gp}</td>
                                <td>{item.block}</td>
                                <td>{item.engineNo}</td>
                                <td>{item.chassisNo}</td>
                                <td style={{ fontWeight: '700', color: '#3b82f6', cursor: 'pointer' }}>{item.model}</td>
                                <td className="action-cell">
                                    <button className="action-dots" onClick={(e) => { e.stopPropagation(); handleActionClick(e, item.id); }}>
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {menuAnchor && (
                <TrainingWarrantyActionMenu
                    isOpen={true}
                    anchorRect={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                />
            )}
        </div>
    );
};

export default TrainingWarrantyTable;
