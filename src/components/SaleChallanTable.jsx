import React, { useState } from 'react';
import { MoreVertical, ChevronsUpDown, Search, Filter, Download, FileText, Share2 } from 'lucide-react';
import SaleChallanActionMenu from './SaleChallanActionMenu';
import './QuotationTable.css';
import './SaleChallanTable.css';

const SaleChallanTable = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);

    const data = [
        {
            id: 1,
            date: '23/03/2026',
            challanNo: '15',
            category: 'weeder',
            partyName: 'ABC',
            model: '9D6+',
            amount: '110000.00',
            paymentType: 'A/c Pay',
            paymentStatus: 'Full Paidi',
            dueAmount: '3438.00',
            deliveryType: 'Cash Delivery',
            status: 'Undelivered'
        },
        {
            id: 2,
            date: '23/03/2026',
            challanNo: '15',
            category: 'Cultivator',
            partyName: 'ABC',
            model: '9D6+',
            amount: '110000.00',
            paymentType: 'Cash',
            paymentStatus: 'Due',
            dueAmount: '438.00',
            deliveryType: 'Subsidy Delivery',
            status: 'Delivered'
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
                                <div className="th-content">sl No. <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Date <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Challan No. <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Item Category <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Party Name <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Model <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Amount <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '140px' }}>
                                <div className="th-content">Payment Type <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '140px' }}>
                                <div className="th-content">Payment Status <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '140px' }}>
                                <div className="th-content">Due Amount <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '160px' }}>
                                <div className="th-content">Delivery Type <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '130px' }}>
                                <div className="th-content">Status <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{item.date}</td>
                                <td>{item.challanNo}</td>
                                <td>{item.category}</td>
                                <td>{item.partyName}</td>
                                <td>{item.model}</td>
                                <td>{item.amount}</td>
                                <td>{item.paymentType}</td>
                                <td>
                                    <span className={`status-badge ${item.paymentStatus === 'Full Paidi' ? 'delivered' : 'payment-comple'}`}>
                                        {item.paymentStatus}
                                    </span>
                                </td>
                                <td>{item.dueAmount}</td>
                                <td>{item.deliveryType}</td>
                                <td className="status-cell">
                                    <span className={`status-text ${item.status === 'Delivered' ? 'delivered' : 'undelivered'}`}>
                                        {item.status}
                                    </span>
                                </td>
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
                <SaleChallanActionMenu
                    isOpen={true}
                    anchorRect={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                />
            )}
        </div>
    );
};

export default SaleChallanTable;
