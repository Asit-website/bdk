import React from 'react';
import { X, MessageSquare, User } from 'lucide-react';
import './WorkBasisPayDrawer.css';

const WorkBasisPayDrawer = ({ isOpen, onClose, employee, month }) => {
    return (
        <div className={`drawer-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div 
                className={`drawer-container ${isOpen ? 'show' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="drawer-header">
                    <div className="header-left">
                        <div className="avatar-circle">
                            <User size={20} />
                        </div>
                        <div className="name-month">
                            <h3>{employee.name}</h3>
                            <span>{month}</span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="drawer-body">
                    <div className="content-card">
                        <div className="card-header">
                            <span className="card-title">Work Basis Pay</span>
                            <span className="card-amount">₹ 0.00</span>
                        </div>
                        <div className="empty-state">
                            <p>No Work Basis Pay added</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="drawer-footer">
                    <button className="add-pay-btn">+ Add Work Basis Pay</button>
                    <button className="chat-btn">
                        <MessageSquare size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkBasisPayDrawer;
