import React, { useEffect, useState } from 'react';
import { Calculator, Settings, X, ChevronDown, Camera, Calendar } from 'lucide-react';
import './PaymentInModal.css';

const PaymentInModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showDebtorDropdown, setShowDebtorDropdown] = useState(false);
    const [showCreateDebtor, setShowCreateDebtor] = useState(false);
    const [newDebtorName, setNewDebtorName] = useState('');
    const [newDebtorMobile, setNewDebtorMobile] = useState('');
    const [debtorList, setDebtorList] = useState([
        { id: 1, name: 'CHANDI PATRA', mobile: '6291739585', balance: '1000', type: 'credit' },
        { id: 2, name: 'SOURAV KUNDU', mobile: '7001258072', balance: '1500', type: 'debit' },
    ]);
    const debtorDropdownRef = React.useRef(null);
    const [formData, setFormData] = useState({
        debtorName: 'CHANDI PATRA',
        paymentPurpose: 'Booking Advance',
        collectedBy: 'Kazi Fahim',
        receiptNo: '4',
        refNo: '',
        date: '2026-02-14',
        receivedCash: '3000',
        receivedUpi: '3000',
        receivedAc: '0',
        balance: '0',
        description: '',
    });

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!debtorDropdownRef.current?.contains(event.target)) {
                setShowDebtorDropdown(false);
                setShowCreateDebtor(false);
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

    const handleDebtorSelect = (debtorName) => {
        handleFieldChange('debtorName', debtorName);
        setShowDebtorDropdown(false);
        setShowCreateDebtor(false);
    };

    const handleCreateDebtor = () => {
        const cleanName = newDebtorName.trim();
        const cleanMobile = newDebtorMobile.trim();

        if (!cleanName) return;

        const createdDebtor = {
            id: Date.now(),
            name: cleanName.toUpperCase(),
            mobile: cleanMobile || '-',
            balance: '0',
            type: 'credit',
        };

        setDebtorList((prev) => [createdDebtor, ...prev]);
        handleDebtorSelect(createdDebtor.name);
        setNewDebtorName('');
        setNewDebtorMobile('');
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
                    <div className="lead-title">Payment-In</div>
                    <div className="lead-header-icons">
                        <Calculator size={18} />
                        <Settings size={18} />
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                <div className="lead-form-wrapper paymentin-form-wrapper">
                    <div className="paymentin-grid">
                        <div className="form-field paymentin-field debtor-field">
                            <label>Debitor Name</label>
                            <div className="paymentin-debtor-select" ref={debtorDropdownRef}>
                                <button
                                    type="button"
                                    className="paymentin-debtor-trigger"
                                    onClick={() => setShowDebtorDropdown((prev) => !prev)}
                                >
                                    <span>{formData.debtorName}</span>
                                    <ChevronDown size={16} className="paymentin-debtor-arrow" />
                                </button>

                                {showDebtorDropdown && (
                                    <div className="paymentin-debtor-menu">
                                        {!showCreateDebtor ? (
                                            <>
                                                <button
                                                    type="button"
                                                    className="paymentin-add-debtor-row"
                                                    onClick={() => setShowCreateDebtor(true)}
                                                >
                                                    <PlusIcon />
                                                    <span>Add Debitor</span>
                                                </button>

                                                {debtorList.map((debtor) => (
                                                    <button
                                                        type="button"
                                                        key={debtor.id}
                                                        className="paymentin-debtor-option"
                                                        onClick={() => handleDebtorSelect(debtor.name)}
                                                    >
                                                        <div className="paymentin-debtor-left">
                                                            <span className="paymentin-debtor-name">{debtor.name}</span>
                                                            <span className="paymentin-debtor-mobile">{debtor.mobile}</span>
                                                        </div>
                                                        <div className="paymentin-debtor-right">
                                                            <span className="paymentin-debtor-balance-label">Balance</span>
                                                            <span className={`paymentin-debtor-badge ${debtor.type === 'debit' ? 'debit' : 'credit'}`}>
                                                                {debtor.balance}
                                                            </span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </>
                                        ) : (
                                            <div className="paymentin-create-debtor">
                                                <input
                                                    type="text"
                                                    placeholder="Debitor Name"
                                                    value={newDebtorName}
                                                    onChange={(event) => setNewDebtorName(event.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Mobile No"
                                                    value={newDebtorMobile}
                                                    onChange={(event) => setNewDebtorMobile(event.target.value)}
                                                />
                                                <div className="paymentin-create-actions">
                                                    <button type="button" onClick={handleCreateDebtor}>Create</button>
                                                    <button
                                                        type="button"
                                                        className="cancel"
                                                        onClick={() => {
                                                            setShowCreateDebtor(false);
                                                            setNewDebtorName('');
                                                            setNewDebtorMobile('');
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
                                    <option>Booking Advance</option>
                                    <option>Service Payment</option>
                                    <option>Spare Parts</option>
                                </select>
                                <span className="select-arrow"></span>
                            </div>
                        </div>

                        <div className="form-field paymentin-field">
                            <label>Collected By</label>
                            <div className="select-box">
                                <select
                                    value={formData.collectedBy}
                                    onChange={(event) => handleFieldChange('collectedBy', event.target.value)}
                                >
                                    <option>Kazi Fahim</option>
                                    <option>Admin</option>
                                    <option>Cash Counter</option>
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

                        <div className="form-field paymentin-field ref-no-field">
                            <label>Ref. No</label>
                            <input
                                type="text"
                                value={formData.refNo}
                                onChange={(event) => handleFieldChange('refNo', event.target.value)}
                            />
                        </div>

                        <div className="paymentin-received-cash-wrap">
                            <label>Received Cash</label>
                            <input
                                type="number"
                                value={formData.receivedCash}
                                onChange={(event) => handleFieldChange('receivedCash', event.target.value)}
                                className="paymentin-received-input"
                            />
                        </div>

                        <div className="paymentin-received-upi-wrap">
                            <label>Received UPI</label>
                            <input
                                type="number"
                                value={formData.receivedUpi}
                                onChange={(event) => handleFieldChange('receivedUpi', event.target.value)}
                                className="paymentin-received-input"
                            />
                        </div>

                        <div className="paymentin-received-ac-wrap">
                            <label>Received A/C</label>
                            <input
                                type="number"
                                value={formData.receivedAc}
                                onChange={(event) => handleFieldChange('receivedAc', event.target.value)}
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

export default PaymentInModal;