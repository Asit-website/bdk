import React, { useState } from 'react';
import { ChevronRight, Calendar, Plus, X, RefreshCcw, Maximize2, Share2, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddCreditNotePage.css';

const AddCreditNotePage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([{ id: 1 }, { id: 2 }]);
    const [showPartyList, setShowPartyList] = useState(false);
    const [partyName, setPartyName] = useState('CHANDI PATRA');
    const [phoneNo, setPhoneNo] = useState('');

    const addRow = () => {
        setRows((prev) => [...prev, { id: Date.now() }]);
    };

    const deleteRow = (id) => {
        if (rows.length > 1) {
            setRows((prev) => prev.filter((row) => row.id !== id));
        }
    };

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Account</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Credit Note</span>
            </div>

            <div className="purchase-form-card credit-note-card">
                <div className="form-header">
                    <h2 className="form-main-title">Credit Note</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="credit-note-top-grid">
                    <div className="form-group credit-note-party-wrap">
                        <label>Party</label>
                        <div className="credit-party-trigger-wrap">
                            <button
                                type="button"
                                className="credit-party-trigger"
                                onClick={() => setShowPartyList((prev) => !prev)}
                            >
                                <span>{partyName}</span>
                                <span className="credit-select-arrow">▾</span>
                            </button>
                            <input
                                type="text"
                                className="form-input-text"
                                placeholder="Phone No."
                                value={phoneNo}
                                onChange={(event) => setPhoneNo(event.target.value)}
                            />
                        </div>

                        {showPartyList && (
                            <div className="credit-party-list">
                                <button type="button" className="credit-add-party">+ Add Party</button>
                                <button type="button" className="credit-party-row" onClick={() => { setPartyName('CHANDI PATRA'); setShowPartyList(false); }}>
                                    <div>
                                        <span className="name">CHANDI PATRA</span>
                                        <span className="mobile">6291739585</span>
                                    </div>
                                    <span className="balance green">1000</span>
                                </button>
                                <button type="button" className="credit-party-row" onClick={() => { setPartyName('SOURAV KUNDU'); setShowPartyList(false); }}>
                                    <div>
                                        <span className="name">SOURAV KUNDU</span>
                                        <span className="mobile">7001258072</span>
                                    </div>
                                    <span className="balance red">150</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="credit-note-right-meta">
                        <div className="credit-meta-row">
                            <label>Return No.</label>
                            <input type="text" className="form-input-text" defaultValue="2" />
                        </div>
                        <div className="credit-meta-row">
                            <label>Invoice Number</label>
                            <input type="text" className="form-input-text" />
                        </div>
                        <div className="credit-meta-row">
                            <label>Invoice Date</label>
                            <div className="date-input-wrapper">
                                <input type="date" className="form-input-date" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                                <Calendar size={16} className="date-icon" />
                            </div>
                        </div>
                        <div className="credit-meta-row">
                            <label>Date</label>
                            <div className="date-input-wrapper">
                                <input type="date" className="form-input-date" defaultValue="2026-02-15" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                                <Calendar size={16} className="date-icon" />
                            </div>
                        </div>
                        <div className="credit-meta-row">
                            <label>State of supply</label>
                            <select className="form-input-select">
                                <option>Select</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="items-table-container credit-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}>#</th>
                                <th>ITEM</th>
                                <th className="qty-col">QTY</th>
                                <th className="unit-col">UNIT</th>
                                <th className='unit-col' style={{ width: '95px' }}>PRICE/UNIT</th>
                                <th className="dis-qty">DISCOUNT</th>
                                <th style={{ width: '140px' }}>TAX</th>
                                <th style={{ width: '110px' }}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td className="qty-col"><input type="number" className="table-input" /></td>
                                    <td className="unit-col">
                                        <select className="table-input">
                                            <option>NONE</option>
                                            <option>Pcs</option>
                                            <option>Kg</option>
                                        </select>
                                    </td>
                                    <td className='unit-col'>
                                        <div className="price-input-wrapper">
                                            <span className="price-label">Without Tax</span>
                                            <input type="number" className="table-input" />
                                        </div>
                                    </td>
                                    <td className="dis-qty">
                                        <div className="discount-input-wrapper">
                                            <input type="number" className="table-input" />
                                            <span className="discount-percent">%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tax-input-wrapper">
                                            <select className="table-input">
                                                <option>Select</option>
                                            </select>
                                            <input type="number" className="table-input" placeholder="Amount" />
                                        </div>
                                    </td>
                                    <td><input type="number" className="table-input" readOnly /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="credit-table-actions-row">
                        <button className="add-row-btn" onClick={addRow}>ADD ROW</button>
                    </div>

                    <div className="table-totals-row credit-note-total-row">
                        <span>TOTAL</span>
                        <span className="total-value">0</span>
                        <span className="total-value">0</span>
                        <span className="total-value">0</span>
                    </div>
                </div>

                <div className="credit-note-bottom">
                    <div className="credit-payment-block">
                        <div className="form-group">
                            <label>Payment Type</label>
                            <select className="form-input-select small-select">
                                <option>Cash</option>
                                <option>A/C</option>
                                <option>UPI</option>
                            </select>
                        </div>
                        <button type="button" className="credit-link-btn">+ Add Payment type</button>
                        <button type="button" className="credit-muted-btn">Add Description</button>
                        <button type="button" className="credit-muted-btn">Add Image</button>
                    </div>

                    <div className="credit-total-block">
                        <label className="credit-roundoff">
                            <input type="checkbox" defaultChecked /> Round Off
                        </label>
                        <input type="number" className="credit-roundoff-input" defaultValue="0" min="0" max="1" />
                        <div className="credit-total-row">
                            <span>Total</span>
                            <input type="text" value="0" readOnly />
                        </div>
                    </div>
                </div>

                <div className="credit-footer-actions">
                    <button className="credit-share-btn"><Share2 size={14} /> Share</button>
                    <button className="credit-save-btn"><Save size={14} /> Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddCreditNotePage;