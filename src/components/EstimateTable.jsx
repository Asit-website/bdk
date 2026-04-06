import React, { useState } from 'react';
import { Search, Filter, Download, FileText, Share2, MoreVertical, ChevronsUpDown } from 'lucide-react';
import EstimateProductViewModal from './EstimateProductViewModal';
import './QuotationTable.css';

const EstimateTable = () => {
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const data = [
        {
            id: 1,
            date: '01/03/2026',
            estimateNo: '125',
            partyName: 'abcd',
            product: 'VIEW',
            amount: '500',
            chassisNo: 'W250015HR1253',
            status: 'DELIVERED'
        },
        {
            id: 2,
            date: '02/03/2026',
            estimateNo: '126',
            partyName: 'abcd',
            product: 'VIEW',
            amount: '500',
            chassisNo: 'W250015HR1253',
            status: 'PAYMENT COMPLE'
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
                            <th><div className="th-content">Estimate No <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Party Name <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Product <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Amount <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Chassis No. <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th><div className="th-content">Status <ChevronsUpDown size={14} className="sort-icon" /></div></th>
                            <th style={{ width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}.</td>
                                <td>{item.date}</td>
                                <td style={{ color: '#3b82f6', fontWeight: '600', cursor: 'pointer' }}>{item.estimateNo}</td>
                                <td>{item.partyName}</td>
                                <td style={{ color: '#3b82f6', cursor: 'pointer' }} onClick={() => setIsProductModalOpen(true)}>{item.product}</td>
                                <td>{item.amount}</td>
                                <td>{item.chassisNo}</td>
                                <td>
                                    <span className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="action-cell">
                                    <button className="action-dots">
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <EstimateProductViewModal 
                isOpen={isProductModalOpen} 
                onClose={() => setIsProductModalOpen(false)} 
            />
        </div>
    );
};

export default EstimateTable;
