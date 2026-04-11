import React, { useState } from 'react';
import { X, MessageSquare, User, Plus, ChevronDown, Calendar } from 'lucide-react';
import './SalaryDetailDrawer.css';

const SalaryDetailDrawer = ({ isOpen, onClose, employee, month, title, amount, emptyMessage, addLabel }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    
    const [formData, setFormData] = useState({
        category: '',
        rate: '',
        quantity: '',
        date: '',
        notes: ''
    });

    const handleAddClick = () => {
        setIsAdding(true);
    };

    const handleCancel = () => {
        setIsAdding(false);
    };

    const handleSave = () => {
        // Logic to save
        setIsAdding(false);
    };

    const handleClose = () => {
        setIsAdding(false);
        setShowCategoryModal(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={`drawer-overlay ${isOpen ? 'show' : ''}`} onClick={handleClose}>
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
                    <button className="close-btn" onClick={handleClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="drawer-body">
                    {!isAdding ? (
                        <div className="content-card">
                            <div className="card-header">
                                <span className="card-title">{title}</span>
                                <span className="card-amount">₹ {amount}</span>
                            </div>
                            <div className="empty-state">
                                <p>{emptyMessage}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="add-pay-form">
                            <div className="form-sub-header">
                                <span className="form-sub-title">Add {title}</span>
                            </div>

                            {title === 'Incentives' ? (
                                <>
                                    <div className="form-field-group">
                                        <label className="form-label">Type</label>
                                        <div className="category-select-wrapper">
                                            <select 
                                                className="form-input custom-select"
                                                value={formData.category} // Reusing category field for type
                                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                            >
                                                <option value="">Select Incentive Type</option>
                                                <option value="1">Sales Incentive</option>
                                                <option value="2">Performance Bonus</option>
                                            </select>
                                            <div className="category-actions">
                                                <button className="add-cat-plus" onClick={() => setShowCategoryModal(true)}>
                                                    <Plus size={16} />
                                                </button>
                                                <ChevronDown size={14} className="select-arrow-icon" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Amount</label>
                                        <div className="input-with-prefix">
                                            <span className="prefix-icon">₹</span>
                                            <input 
                                                type="text" 
                                                className="form-input" 
                                                placeholder="0"
                                                value={formData.rate} 
                                                onChange={(e) => setFormData({...formData, rate: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Date</label>
                                        <div className="input-with-suffix">
                                            <input 
                                                type="date" 
                                                className="form-input" 
                                                value={formData.date}
                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            />
                                            <Calendar size={16} className="suffix-icon" />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Notes</label>
                                        <textarea 
                                            className="form-textarea" 
                                            placeholder="Enter notes"
                                            rows="4"
                                            value={formData.notes}
                                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                        ></textarea>
                                    </div>
                                </>
                            ) : title === 'Reimbursements' || title === 'Bonus' || title === 'Other Earnings' || title === 'Other Deductions' ? (
                                <>
                                    <div className="form-field-group">
                                        <label className="form-label">Amount</label>
                                        <div className="input-with-prefix">
                                            <span className="prefix-icon">₹</span>
                                            <input 
                                                type="text" 
                                                className="form-input" 
                                                placeholder="0"
                                                value={formData.rate} 
                                                onChange={(e) => setFormData({...formData, rate: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Date</label>
                                        <div className="input-with-suffix">
                                            <input 
                                                type="date" 
                                                className="form-input" 
                                                value={formData.date}
                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            />
                                            <Calendar size={16} className="suffix-icon" />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Notes</label>
                                        <textarea 
                                            className="form-textarea" 
                                            placeholder="Enter notes"
                                            rows="4"
                                            value={formData.notes}
                                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                        ></textarea>
                                    </div>

                                    {title === 'Reimbursements' && (
                                        <div className="form-field-group">
                                            <label className="form-label">Attachments</label>
                                            <div className="attachment-upload-box">
                                                <Plus size={20} color="#94a3b8" />
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className="form-field-group">
                                        <label className="form-label">Category</label>
                                        <div className="category-select-wrapper">
                                            <select 
                                                className="form-input custom-select"
                                                value={formData.category}
                                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                            >
                                                <option value="">Select category</option>
                                                <option value="1">Packing</option>
                                                <option value="2">Loading</option>
                                            </select>
                                            <div className="category-actions">
                                                <button className="add-cat-plus" onClick={() => setShowCategoryModal(true)}>
                                                    <Plus size={16} />
                                                </button>
                                                <ChevronDown size={14} className="select-arrow-icon" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Rate per unit</label>
                                        <div className="input-with-prefix">
                                            <span className="prefix-icon">₹</span>
                                            <input 
                                                type="text" 
                                                className="form-input" 
                                                placeholder="0"
                                                value={formData.rate}
                                                onChange={(e) => setFormData({...formData, rate: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Quantity</label>
                                        <input 
                                            type="text" 
                                            className="form-input" 
                                            placeholder="Enter quantity"
                                            value={formData.quantity}
                                            onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                        />
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Date</label>
                                        <div className="input-with-suffix">
                                            <input 
                                                type="date" 
                                                className="form-input" 
                                                value={formData.date}
                                                onChange={(e) => setFormData({...formData, date: e.target.value})}
                                            />
                                            <Calendar size={16} className="suffix-icon" />
                                        </div>
                                    </div>

                                    <div className="form-field-group">
                                        <label className="form-label">Notes</label>
                                        <textarea 
                                            className="form-textarea" 
                                            placeholder="Enter notes"
                                            rows="4"
                                            value={formData.notes}
                                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                                        ></textarea>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

                <div className="drawer-footer">
                    {!isAdding ? (
                        <>
                            <button className="add-pay-btn" onClick={handleAddClick}>{addLabel}</button>
                            <button className="chat-btn">
                                <MessageSquare size={18} />
                            </button>
                        </>
                    ) : (
                        <div className="form-actions">
                            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                            <button className="btn-save-pay" onClick={handleSave}>Save {title}</button>
                            <button className="chat-btn">
                                <MessageSquare size={18} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Add New Category/Type Modal */}
                {showCategoryModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>{title === 'Incentives' ? 'Add New Incentive Type' : 'Add New Category'}</h4>
                                <button className="modal-close" onClick={() => setShowCategoryModal(false)}>
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-field-group">
                                    <label className="form-label">
                                        {title === 'Incentives' ? 'Incentive Name' : 'Category Name'}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-input" 
                                        placeholder={title === 'Incentives' ? 'Enter incentive name' : 'Enter category name'}
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="modal-btn-cancel" onClick={() => setShowCategoryModal(false)}>Cancel</button>
                                <button className="modal-btn-save" onClick={() => {
                                    setShowCategoryModal(false);
                                }}>Save</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalaryDetailDrawer;
