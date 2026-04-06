import React from 'react';
import { X, MessageSquare, User } from 'lucide-react';
import './SalaryDetailDrawer.css';

const SalaryDetailDrawer = ({ isOpen, onClose, employee, month, title, amount, emptyMessage, addLabel }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div 
                className={`drawer-container ${isOpen ? 'show' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="drawer-header">
                    <div className="header-left">
                        <div className="avatar-circle">
                            <User size={20} />
                        </div>
                        <div className="name-month">
                            <h3>{employee?.name}</h3>
                            <span>{month}</span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="drawer-body">
                    <div className="content-card">
                        <div className="card-header">
                            <span className="card-title">{title}</span>
                            <span className="card-amount">₹ {amount}</span>
                        </div>
                        <div className="empty-state">
                            <p>{emptyMessage}</p>
                        </div>
                    </div>
                </div>

                <div className="drawer-footer">
                    <button className="add-pay-btn">{addLabel}</button>
                    <button className="chat-btn">
                        <MessageSquare size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalaryDetailDrawer;
