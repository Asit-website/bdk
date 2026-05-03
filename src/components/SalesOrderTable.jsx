import React, { useState } from 'react';
import { MoreVertical, ChevronsUpDown, Search, Filter, Download, FileText, Share2 } from 'lucide-react';
import SalesOrderActionMenu from './SalesOrderActionMenu';
import PaymentStatusPopover from './PaymentStatusPopover';
import OrderUpdatePopover from './OrderUpdatePopover';
import './QuotationTable.css';
import './SaleChallanTable.css';

const SalesOrderTable = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [paymentAnchor, setPaymentAnchor] = useState(null);
    const [updateAnchor, setUpdateAnchor] = useState(null);

    const data = [
        {
            id: 1,
            orderDate: '02/02/2026',
            bookingDate: '02/02/2026',
            name: 'Ram Sen',
            mobile: '1234567890',
            address: 'Abcd',
            model: '9d6+',
            paymentStatus: 'Full Paid',
            status: 'Pending'
        },
        {
            id: 2,
            orderDate: '20/02/2026',
            bookingDate: '20/02/2026',
            name: 'Bikash Pratihar',
            mobile: '234567890',
            address: 'Abcd',
            model: '8D6',
            paymentStatus: 'Due',
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
                                <div className="th-content">SL No <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Order Date <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Booking Date <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Name <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Mobile No <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Addrsess <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Model <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '140px' }}>
                                <div className="th-content">Payment Status <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '130px' }}>
                                <div className="th-content">Status <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '80px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.orderDate}</td>
                                <td>{item.bookingDate}</td>
                                <td className="product-view-link">{item.name}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                                <td>{item.model}</td>
                                <td>
                                    <span 
                                        className={`status-badge ${item.paymentStatus === 'Full Paid' ? 'delivered' : 'payment-comple'}`}
                                        style={{ cursor: 'pointer' }}
                                        onClick={(e) => {
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            setPaymentAnchor(rect);
                                        }}
                                    >
                                        {item.paymentStatus}
                                    </span>
                                </td>
                                <td className="status-cell">
                                    <span className={`status-text ${item.status === 'Delivered' ? 'delivered' : 'pending'}`}>
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
                <SalesOrderActionMenu
                    isOpen={true}
                    anchorRect={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                    onUpdate={() => {
                        setUpdateAnchor(menuAnchor);
                        setMenuAnchor(null);
                    }}
                />
            )}

            <PaymentStatusPopover 
                isOpen={!!paymentAnchor}
                anchorRect={paymentAnchor}
                onClose={() => setPaymentAnchor(null)}
            />

            <OrderUpdatePopover 
                isOpen={!!updateAnchor}
                anchorRect={updateAnchor}
                onClose={() => setUpdateAnchor(null)}
            />
        </div>
    );
};

export default SalesOrderTable;
