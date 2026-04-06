import React, { useState } from 'react';
import { MoreVertical, Search, Filter, Download, FileText, Share2, ChevronRight, ChevronsUpDown } from 'lucide-react';
import ActionMenu from './QuotationActionMenu';
import QuotationProductViewModal from './QuotationProductViewModal';
import './QuotationTable.css';
import './QuotationProductViewModal.css';

const QuotationTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const quotations = [
        { id: 1, date: '01/03/2026', quotationNo: '125', itemCategory: 'Weeder', partyName: 'abcd', product: 'VIEW', amount: '500', status: 'DELIVERED' },
        { id: 2, date: '02/03/2026', quotationNo: '126', itemCategory: 'Cultivator', partyName: 'abcd', product: 'VIEW', amount: '500', status: 'PAYMENT COMPLE' },
    ];

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    // Close menu on scroll or click outside
    React.useEffect(() => {
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
                            <th>
                                <div className="th-content">
                                    Sl No <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Date <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Quatation No <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Item Category <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Party Name <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Product <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Amount <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Status <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotations.map((row, idx) => (
                            <tr key={row.id}>
                                <td>{idx + 1}</td>
                                <td>{row.date}</td>
                                <td>{row.quotationNo}</td>
                                <td>{row.itemCategory}</td>
                                <td>{row.partyName}</td>
                                <td>
                                    <span 
                                        className="product-view-link"
                                        onClick={() => setIsViewModalOpen(true)}
                                    >
                                        {row.product}
                                    </span>
                                </td>
                                <td>{row.amount}</td>
                                <td>
                                    <span className={`status-badge ${row.status.toLowerCase().replace(' ', '-')}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="action-cell">
                                    <button
                                        className={`action-dots ${openMenuId === row.id ? 'active' : ''}`}
                                        onClick={(e) => toggleMenu(e, row.id)}
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

            <QuotationProductViewModal 
                isOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
            />
        </div>
    );
};

export default QuotationTable;
