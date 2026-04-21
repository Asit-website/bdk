import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, MoreVertical, Save, X, Calendar, Plus, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddServiceKitPage.css';
import './AddPurchaseBillPage.css';

const ServiceKitActionMenu = ({ isOpen, anchorRect, onClose }) => {
    if (!isOpen || !anchorRect) return null;

    const menuHeight = 130;
    const spaceBelow = window.innerHeight - anchorRect.bottom;
    const showAbove = spaceBelow < menuHeight;

    const style = {
        position: 'fixed',
        top: showAbove ? anchorRect.top - menuHeight - 5 : anchorRect.bottom + 5,
        left: anchorRect.left - 110,
        zIndex: 10000,
    };

    return createPortal(
        <div className="action-dropdown shadow-lg" style={style}>
            <button className="dropdown-item" onClick={onClose}>Edit</button>
            <button className="dropdown-item delete" onClick={onClose}>Delete</button>
            <button className="dropdown-item" onClick={onClose}>Print</button>
        </div>,
        document.body
    );
};

const AddServiceKitPage = () => {
    const navigate = useNavigate();
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);

    const rows = [
        { id: 1, date: '03/05/2026', party: 'abcd', invoice: '0025', model: '9D6+', qty: 1 },
        { id: 2, date: '', party: '', invoice: '', model: '', qty: '' },
    ];

    useEffect(() => {
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

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Add Service Kit</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Service Kit</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="service-kit-grid">
                    <div className="form-group">
                        <label>Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Party Name</label>
                        <select className="form-input-select">
                            <option>Select Party Name</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Invoice No</label>
                        <select className="form-input-select">
                            <option>Select Invoice No</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Model</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>Kit Qty</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group" style={{ justifyContent: 'flex-end' }}>
                        <label>&nbsp;</label>
                        <button className="btn-add-part">
                            <Plus size={18} /> ADD
                        </button>
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sl No.</th>
                                <th style={{ width: '160px' }}>Date</th>
                                <th style={{ width: '180px' }}>Party Name</th>
                                <th style={{ width: '140px' }}>Invoice No</th>
                                <th style={{ width: '140px' }}>Model</th>
                                <th style={{ width: '110px' }}>Kit Qty</th>
                                <th style={{ width: '80px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={row.id}>
                                    <td>{idx + 1}</td>
                                    <td>{row.date}</td>
                                    <td>{row.party}</td>
                                    <td>{row.invoice}</td>
                                    <td>{row.model}</td>
                                    <td>{row.qty}</td>
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

                <div className="form-action-buttons opening-actions">
                    <button className="btn-cancel" onClick={() => navigate(-1)}><X size={16} /> CANCEL</button>
                    <button className="btn-save"><Save size={16} /> SAVE</button>
                </div>
            </div>

            <ServiceKitActionMenu
                isOpen={openMenuId !== null}
                anchorRect={anchorRect}
                onClose={() => setOpenMenuId(null)}
            />
        </div>
    );
};

export default AddServiceKitPage;
