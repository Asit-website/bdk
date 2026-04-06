import React, { useState } from 'react';
import { MoreVertical, ChevronsUpDown, Search, Filter, Download, FileText, Share2 } from 'lucide-react';
import SparePartsSaleBillActionMenu from './SparePartsSaleBillActionMenu';
import './QuotationTable.css';

const SparePartsSaleBillTable = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);

    const data = [
        {
            id: 1,
            date: '13/03/2026',
            orderNo: '0025',
            invoiceNo: '225',
            partyName: 'ABCD 22',
            branch: 'abcd',
            product: 'Parts',
            billAmount: '500'
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
                id: id
            });
        }
    };

    return (
        <div className="quotation-table-section">
            <div className="table-header-toolbar">
                <h3 className="section-title">Transactions</h3>
                <div className="toolbar-actions">
                    <span style={{ marginRight: '10px', fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Bill: Type</span>
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
                            <th style={{ width: '60px' }}>
                                <div className="th-content">SI No. <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Date <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '100px' }}>
                                <div className="th-content">Order No <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Invoice No <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '180px' }}>
                                <div className="th-content">Party Name <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Branch <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Product <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Bill Amount <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '80px' }}>
                                <div className="th-content">Action</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.date}</td>
                                <td>{item.orderNo}</td>
                                <td>{item.invoiceNo}</td>
                                <td>{item.partyName}</td>
                                <td>{item.branch}</td>
                                <td>{item.product}</td>
                                <td style={{ fontWeight: '600' }}>{item.billAmount}</td>
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
                <SparePartsSaleBillActionMenu
                    isOpen={true}
                    anchorRect={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                />
            )}
        </div>
    );
};

export default SparePartsSaleBillTable;
