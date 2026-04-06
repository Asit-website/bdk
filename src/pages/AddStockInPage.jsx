import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, MoreVertical, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddStockInPage.css';
import './AddPurchaseBillPage.css';

const StockInActionMenu = ({ isOpen, anchorRect, onClose }) => {
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

const AddStockInPage = () => {
    const navigate = useNavigate();
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);

    const rows = [
        { id: 1, receiveNo: '253', partNo: 'SPMTWEBD25153', partName: 'ABCD', qty: 50, rate: 69.00, rackNo: 5, binNo: 'B-30' },
        { id: 2, receiveNo: '254', partNo: 'SPMTWEBD25158', partName: 'EFGH', qty: 26, rate: 562.00, rackNo: 8, binNo: '' },
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
                <span className="breadcrumb-item active">Add Stock In</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Add Stock In</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Date/No.</label>
                        <div className="stock-adjust-dual">
                            <input type="date" className="form-input-date" />
                            <input type="text" className="form-input-text" placeholder="No" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>From Branch</label>
                        <select className="form-input-select">
                            <option>Select Branch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Transfer No.</label>
                        <select className="form-input-select">
                            <option>Select Transfer No.</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Recive Location</label>
                        <input type="text" className="form-input-text" />
                    </div>
                    <div className="form-group">
                        <label>&nbsp;</label>
                        <button className="add-row-btn" style={{ margin: 0, height: '40px' }}>SUBMIT</button>
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sl No.</th>
                                <th style={{ width: '120px' }}>Recive No</th>
                                <th style={{ width: '160px' }}>Part No</th>
                                <th style={{ width: '200px' }}>Part Name</th>
                                <th style={{ width: '90px' }}>Qty</th>
                                <th style={{ width: '100px' }}>Rate</th>
                                <th style={{ width: '120px' }}>Rack No.</th>
                                <th style={{ width: '120px' }}>Bin No.</th>
                                <th style={{ width: '80px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={row.id}>
                                    <td>{idx + 1}</td>
                                    <td>{row.receiveNo}</td>
                                    <td>{row.partNo}</td>
                                    <td>{row.partName}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.rate}</td>
                                    <td>{row.rackNo}</td>
                                    <td>{row.binNo}</td>
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

            <StockInActionMenu
                isOpen={openMenuId !== null}
                anchorRect={anchorRect}
                onClose={() => setOpenMenuId(null)}
            />
        </div>
    );
};

export default AddStockInPage;
