import React, { useState } from 'react';
import { Search, Filter, Download, FileText, Share2, MoreVertical, ChevronsUpDown } from 'lucide-react';
import './QuotationTable.css';
import CounterChallanActionMenu from './CounterChallanActionMenu';

const CounterChallanTable = () => {
    const [actionMenu, setActionMenu] = useState({ isOpen: false, anchorRect: null });

    const toggleActionMenu = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setActionMenu({
            isOpen: !actionMenu.isOpen,
            anchorRect: rect
        });
    };

    const data = [
        {
            id: 1,
            date: '23/03/2026',
            challanNo: '15',
            partyName: 'ABC',
            model: '9D6+',
            amount: '110000.00',
            paymentType: 'A/C Pay',
            status: 'Full Paid',
            dueAmount: '3438.00'
        },
        {
            id: 2,
            date: '23/03/2026',
            challanNo: '15',
            partyName: 'ABC',
            model: '9D6+',
            amount: '110000.00',
            paymentType: 'Cash',
            status: 'Due',
            dueAmount: '3438.00'
        }
    ];

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
                            <th><div className="th-content">Challan No. <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Party Name <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Model <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Amount <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Payment Type <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Payment Status <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Due Amount <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th style={{ width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}.</td>
                                <td>{item.date}</td>
                                <td style={{ color: '#3b82f6', fontWeight: '600' }}>{item.challanNo} -</td>
                                <td>{item.partyName}</td>
                                <td>{item.model}</td>
                                <td>{item.amount}</td>
                                <td>{item.paymentType}</td>
                                <td>
                                    <span className={`status-badge ${item.status === 'Full Paid' ? 'delivered' : 'pending'}`}
                                        style={{ color: item.status === 'Full Paid' ? '#16a34a' : '#dc2626', fontWeight: '800' }}>
                                        {item.status}
                                    </span>
                                </td>
                                <td>{item.dueAmount}</td>
                                <td className="action-cell">
                                    <button className="action-dots" onClick={toggleActionMenu}>
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CounterChallanActionMenu
                isOpen={actionMenu.isOpen}
                anchorRect={actionMenu.anchorRect}
                onClose={() => setActionMenu({ ...actionMenu, isOpen: false })}
            />
        </div>
    );
};

export default CounterChallanTable;
