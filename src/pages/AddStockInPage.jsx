import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight, Edit2, Trash2, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddStockInPage.css';
import './AddPurchaseBillPage.css';


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
                        <label>Receive Location</label>
                        <select className="form-input-select">
                            <option>Select Location</option>
                        </select>
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
                                <th className='qty-col' style={{ width: '90px' }}>Qty</th>
                                <th style={{ width: '100px' }}>Rate</th>
                                <th style={{ width: '140px' }}>Rack No.</th>
                                <th style={{ width: '140px' }}>Bin No.</th>
                                <th style={{ width: '120px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={row.id}>
                                    <td>{idx + 1}</td>
                                    <td>{row.receiveNo}</td>
                                    <td>{row.partNo}</td>
                                    <td>{row.partName}</td>
                                    <td className='qty-col'>{row.qty}</td>
                                    <td>{row.rate}</td>
                                    <td>
                                        <div className="table-input-with-list">
                                            <input list="rack-options" className="table-input-select" defaultValue={row.rackNo} />
                                            <datalist id="rack-options">
                                                <option value="5" />
                                                <option value="8" />
                                            </datalist>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="table-input-with-list">
                                            <input list="bin-options" className="table-input-select" defaultValue={row.binNo} />
                                            <datalist id="bin-options">
                                                <option value="B-30" />
                                                <option value="C-10" />
                                            </datalist>
                                        </div>
                                    </td>
                                    <td className="action-cell">
                                        <div className="item-actions">
                                            <button className="action-btn edit"><Edit2 size={14} /></button>
                                            <button className="action-btn delete"><Trash2 size={14} /></button>
                                        </div>
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
        </div>
    );
};

export default AddStockInPage;
