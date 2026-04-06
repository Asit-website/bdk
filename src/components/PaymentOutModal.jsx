import React, { useEffect, useState } from 'react';
import { Calculator, Settings, X, ChevronDown, Camera, Calendar } from 'lucide-react';
import './PaymentOutModal.css';

const PaymentOutModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showCreditorDropdown, setShowCreditorDropdown] = useState(false);
    const [showCreateCreditor, setShowCreateCreditor] = useState(false);
    const [newCreditorName, setNewCreditorName] = useState('');
    const [newCreditorMobile, setNewCreditorMobile] = useState('');
    const [creditorList, setCreditorList] = useState([
        { id: 1, name: 'CHANDI PATRA', mobile: '6291739585', balance: '500', type: 'debit' },
        { id: 2, name: 'SOURAV KUNDU', mobile: '7001258072', balance: '1500', type: 'debit' },
    ]);
    const creditorDropdownRef = React.useRef(null);
    const [formData, setFormData] = useState({
        creditorName: 'CHANDI PATRA',
        paymentPurpose: 'Supplier Payment',
        receiptNo: '1',
        refNo: '',
        date: '2026-02-15',
        paidCash: '3000',
        paidUpi: '3000',
        paidAc: '0',
        balance: '0',
        description: '',
    });

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!creditorDropdownRef.current?.contains(event.target)) {
                setShowCreditorDropdown(false);
                setShowCreateCreditor(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => closeModal(), 300);
    };

    const handleOverlayClick = (event) => {
        if (event.target.classList.contains('lead-modal-overlay')) {
            handleClose();
        }
    };

    const handleFieldChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleCreditorSelect = (creditorName) => {
        handleFieldChange('creditorName', creditorName);
        setShowCreditorDropdown(false);
        setShowCreateCreditor(false);
    };

    const handleCreateCreditor = () => {
        const cleanName = newCreditorName.trim();
        const cleanMobile = newCreditorMobile.trim();

        if (!cleanName) return;

        const createdCreditor = {
            id: Date.now(),
            name: cleanName.toUpperCase(),
            mobile: cleanMobile || '-',
            balance: '0',
            type: 'debit',
        };

        setCreditorList((prev) => [createdCreditor, ...prev]);
        handleCreditorSelect(createdCreditor.name);
        setNewCreditorName('');
        setNewCreditorMobile('');
    };

    const handleSave = () => {
        handleClose();
    };

    return (
        <div
            className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}
            onClick={handleOverlayClick}
        >
            <div className={`lead-modal paymentin-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="lead-modal-header">
                    <div className="lead-title">Payment-Out</div>
                    <div className="lead-header-icons">
                        <Calculator size={18} />
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                <div className="lead-form-wrapper paymentin-form-wrapper">
                    <div className="paymentin-grid">
                        <div className="form-field paymentin-field debtor-field">
                            <label>Creditor Name</label>
                            <div className="paymentin-debtor-select" ref={creditorDropdownRef}>
                                <button
                                    type="button"
                                    className="paymentin-debtor-trigger"
                                    onClick={() => setShowCreditorDropdown((prev) => !prev)}
                                >
                                    <span>{formData.creditorName}</span>
                                    <ChevronDown size={16} className="paymentin-debtor-arrow" />
                                </button>

                                {showCreditorDropdown && (
                                    <div className="paymentin-debtor-menu">
                                        {!showCreateCreditor ? (
                                            <>
                                                <button
                                                    type="button"
                                                    className="paymentin-add-debtor-row"
                                                    onClick={() => setShowCreateCreditor(true)}
                                                >
                                                    <PlusIcon />
                                                    <span>Add Creditor</span>
                                                </button>

                                                {creditorList.map((creditor) => (
                                                    <button
                                                        type="button"
                                                        key={creditor.id}
                                                        className="paymentin-debtor-option"
                                                        onClick={() => handleCreditorSelect(creditor.name)}
                                                    >
                                                        <div className="paymentin-debtor-left">
                                                            <span className="paymentin-debtor-name">{creditor.name}</span>
                                                            <span className="paymentin-debtor-mobile">{creditor.mobile}</span>
                                                        </div>
                                                        <div className="paymentin-debtor-right">
                                                            <span className="paymentin-debtor-balance-label">Balance</span>
                                                            <span className={`paymentin-debtor-badge ${creditor.type === 'debit' ? 'debit' : 'credit'}`}>
                                                                {creditor.balance}
                                                            </span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="paymentin-create-debtor">
                                                <input
                                                    type="text"
                                                    placeholder="Creditor Name"
                                                    value={newCreditorName}
                                                    onChange={(event) => setNewCreditorName(event.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Mobile No"
                                                    value={newCreditorMobile}
                                                    onChange={(event) => setNewCreditorMobile(event.target.value)}
                                                />
                                                <div className="paymentin-create-actions">
                                                    <button type="button" onClick={handleCreateCreditor}>Create</button>
                                                    <button
                                                        type="button"
                                                        className="cancel"
                                                        onClick={() => {
                                                            setShowCreateCreditor(false);
                                                            setNewCreditorName('');
                                                            setNewCreditorMobile('');
                                                        }}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="form-field paymentin-field">
                            <label>Payment Purpose</label>
                            <div className="select-box">
                                <select
                                    value={formData.paymentPurpose}
                                    onChange={(event) => handleFieldChange('paymentPurpose', event.target.value)}
                                >
                                    <option>Supplier Payment</option>
                                    <option>Expense Settlement</option>
                                    <option>Return Adjustment</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="paymentin-meta-wrap">
                            <div className="paymentin-meta-row">
                                <label>Receipt No</label>
                                <input
                                    type="number"
                                    value={formData.receiptNo}
                                    onChange={(event) => handleFieldChange('receiptNo', event.target.value)}
                                    className="paymentin-meta-input"
                                />
                            </div>

                            <div className="paymentin-meta-row">
                                <label>Date</label>
                                <div className="paymentin-date-wrap">
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(event) => handleFieldChange('date', event.target.value)}
                                        className="paymentin-meta-input"
                                        onClick={(event) => event.target.showPicker && event.target.showPicker()}
                                    />
                                    <Calendar size={14} className="paymentin-date-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="form-field paymentin-field ref-no-field paymentout-refno-field">
                            <label>Ref. No</label>
                            <input
                                type="text"
                                value={formData.refNo}
                                onChange={(event) => handleFieldChange('refNo', event.target.value)}
                            />
                        </div>

                        <div className="paymentin-received-cash-wrap">
                            <label>Paid Cash</label>
                            <input
                                type="number"
                                value={formData.paidCash}
                                onChange={(event) => handleFieldChange('paidCash', event.target.value)}
                                className="paymentin-received-input"
                            />
                        </div>

                        <div className="paymentin-received-upi-wrap">
                            <label>Paid UPI</label>
                            <input
                                type="number"
                                value={formData.paidUpi}
                                onChange={(event) => handleFieldChange('paidUpi', event.target.value)}
                                className="paymentin-received-input"
                            />
                        </div>

                        <div className="paymentin-received-ac-wrap">
                            <label>Paid A/C</label>
                            <input
                                type="number"
                                value={formData.paidAc}
                                onChange={(event) => handleFieldChange('paidAc', event.target.value)}
                                className="paymentin-received-input"
                            />
                        </div>

                        <div className="paymentin-balance-wrap">
                            <label>Balance</label>
                            <input
                                type="number"
                                value={formData.balance}
                                onChange={(event) => handleFieldChange('balance', event.target.value)}
                                className="paymentin-received-input"
                            />
                        </div>
                    </div>

                    <div className="paymentin-actions-row">
                        <button
                            type="button"
                            className="paymentin-description-btn"
                            onClick={() => setShowDescription((prev) => !prev)}
                        >
                            <PlusIcon /> Add Description
                        </button>
                        <button type="button" className="paymentin-camera-btn" aria-label="Attachment">
                            <Camera size={16} />
                        </button>
                    </div>

                    {showDescription && (
                        <div className="remark-section paymentin-remark">
                            <label>Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(event) => handleFieldChange('description', event.target.value)}
                            ></textarea>
                        </div>
                    )}
                </div>

                <div className="lead-footer paymentin-footer">
                    <div className="share-group">
                        <button className="btn-share" type="button">Share</button>
                        <div className="btn-share-dropdown">
                            <div className="share-arrow"></div>
                        </div>
                    </div>
                    <button className="btn-save" type="button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

const PlusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default PaymentOutModal;