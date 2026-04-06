import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, User } from 'lucide-react';
import './CustomerOverdueDetailsModal.css';

const CustomerOverdueDetailsModal = ({ customer, onClose }) => {
    const [expandedRows, setExpandedRows] = useState({});
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    const toggleRow = (index) => {
        setExpandedRows(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Mock data based on SS2 screenshot
    const transactionData = [
        {
            id: 1,
            date: '22/02/2025',
            category: 'Service',
            totalAmount: '500.00',
            paidAmount: '200.00',
            dueAmount: '300.00',
            items: [
                { si: 1, name: 'Starter Reel', rate: '300.00' },
                { si: 2, name: 'Fuel Filter Assy', rate: '100.00' },
                { si: 3, name: 'Starter Rope', rate: '50.00' },
                { si: 4, name: 'Service Charge', rate: '50.00' },
            ]
        },
        {
            id: 2,
            date: '20/02/2025',
            category: 'Parts',
            totalAmount: '1200.00',
            paidAmount: '1000.00',
            dueAmount: '200.00',
            items: [
                { si: 1, name: 'Brake Pad', rate: '800.00' },
                { si: 2, name: 'Brake Oil', rate: '400.00' },
            ]
        }
    ];

    return createPortal(
        <div className={`overdue-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div className={`overdue-modal-container ${isClosing ? 'scale-down' : ''}`} onClick={e => e.stopPropagation()}>
                {/* Header matching SS2 */}
                <div className="overdue-modal-header">
                    <div className="overdue-modal-header-left">
                        <User size={20} color="#1e293b" />
                        <span className="customer-name-header">{customer.customer}</span>
                    </div>
                    <div className="due-amount-header">
                        Total Due Amount:- ₹<span className="text-red">15000.00</span>
                    </div>
                    <button className="close-modal-btn" onClick={handleClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="overdue-modal-body">
                    <table className="overdue-details-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}>SI</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Total Amount</th>
                                <th>Paid Amount</th>
                                <th>Due Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionData.map((row, index) => (
                                <React.Fragment key={row.id}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{row.date}</td>
                                        <td>
                                            <span 
                                                className="category-link"
                                                onClick={() => toggleRow(index)}
                                            >
                                                {row.category}
                                            </span>
                                        </td>
                                        <td>{row.totalAmount}</td>
                                        <td className="text-green">{row.paidAmount}</td>
                                        <td className="text-red">{row.dueAmount}</td>
                                    </tr>
                                    {expandedRows[index] && (
                                        <tr>
                                            <td colSpan="6" className="expanded-row-details">
                                                <div className="sub-table-container">
                                                    <table className="nested-item-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="nested-si">SI</th>
                                                                <th>Item Name</th>
                                                                <th className="nested-rate">Rate</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {row.items.map((item) => (
                                                                <tr key={item.si}>
                                                                    <td className="nested-si">{item.si}</td>
                                                                    <td>{item.name}</td>
                                                                    <td className="nested-rate">{item.rate}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CustomerOverdueDetailsModal;
