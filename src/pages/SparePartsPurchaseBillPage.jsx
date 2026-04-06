import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Edit2, Trash2, Plus, Upload, Save, X, RefreshCcw, Maximize2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SerialNoPopup from '../components/SerialNoPopup';
import './SparePartsPurchaseBillPage.css';

const SparePartsPurchaseBillPage = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState([{ id: 1 }, { id: 2 }]);
    const [isSerialPopupOpen, setIsSerialPopupOpen] = useState(false);
    const [serialPopupAnchor, setSerialPopupAnchor] = useState(null);
    const [activeRowId, setActiveRowId] = useState(null);

    const addRow = () => {
        setRows([...rows, { id: Date.now() }]);
    };

    const deleteRow = (id) => {
        if (rows.length > 1) {
            setRows(rows.filter(row => row.id !== id));
        }
    };

    const handleOpenSerialPopup = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setSerialPopupAnchor(rect);
        setActiveRowId(id);
        setIsSerialPopupOpen(true);
    };

    useEffect(() => {
        if (!isSerialPopupOpen) return;
        const handleClose = (e) => {
            if (e.target.closest('.serial-popup') || e.target.closest('.action-btn')) {
                return;
            }
            if (!e.target.closest('.serial-popup')) {
                setIsSerialPopupOpen(false);
            }
        };
        const handleScroll = () => setIsSerialPopupOpen(false);
        window.addEventListener('click', handleClose);
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener('click', handleClose);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [isSerialPopupOpen]);

    return (
        <div className="page-container">
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Spare Parts/Attachment Purchase Bill</span>
            </div>

            <div className="purchase-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Spare Parts/Attachment Purchase Bill</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Bill Type</label>
                        <select className="form-input-select">
                            <option>Select Bill Type</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Party Name</label>
                        <select className="form-input-select">
                            <option>Select Party Name</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Purchase Invoice</label>
                        <input type="text" className="form-input-text" placeholder="Enter invoice no." />
                    </div>
                    <div className="form-group">
                        <label>Invoice Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Purchase Branch</label>
                        <select className="form-input-select">
                            <option>Select Branch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Receipt Date</label>
                        <div className="date-input-wrapper">
                            <input type="date" className="form-input-date" onClick={(e) => e.target.showPicker && e.target.showPicker()} />
                            <Calendar size={16} className="date-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>E-Way Bill</label>
                        <input type="text" className="form-input-text" placeholder="Enter E-Way Bill" />
                    </div>
                    <div className="form-group">
                        <label>Transport Vehicle No.</label>
                        <input type="text" className="form-input-text" placeholder="Enter Vehicle No." />
                    </div>
                    <div className="form-group">
                        <label>Product Type <span style={{ color: '#ef4444' }}>*</span></label>
                        <select className="form-input-select">
                            <option>Select Product Type</option>
                        </select>
                    </div>
                </div>

                <div className="items-table-container">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th style={{ width: '70px' }}>Sr No.</th>
                                <th style={{ width: '120px' }}>Action</th>
                                <th>ITEM</th>
                                <th>PART NO.</th>
                                <th className="qty-col">QTY</th>
                                <th className="unit-col">UNIT</th>
                                <th style={{ width: '120px' }}>PRICE/UNIT</th>
                                <th className="dis-qty">DISCOUNT</th>
                                <th style={{ width: '150px' }}>TAX</th>
                                <th style={{ width: '120px' }}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="item-actions">
                                            <button className="action-btn edit" onClick={(e) => handleOpenSerialPopup(e, row.id)}><Edit2 size={14} /></button>
                                            <button className="action-btn delete" onClick={() => deleteRow(row.id)}><Trash2 size={14} /></button>
                                            <button className="action-btn add" onClick={(e) => handleOpenSerialPopup(e, row.id)}><Plus size={14} /></button>
                                        </div>
                                    </td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td><input type="text" className="table-input" /></td>
                                    <td className="qty-col"><input type="number" className="table-input" /></td>
                                    <td className="unit-col">
                                        <select className="table-input">
                                            <option>NONE</option>
                                            <option>Pcs</option>
                                            <option>Box</option>
                                            <option>Kg</option>
                                            <option>Mtr</option>
                                        </select>
                                    </td>
                                    <td>
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
                    <button className="add-row-btn" onClick={addRow}>ADD ROW</button>

                    <div className="table-totals-row">
                        <span>TOTAL</span>
                        <span className="total-value">0</span>
                        <span className="total-value">0</span>
                        <span className="total-value">0</span>
                    </div>
                </div>

                <div className="form-footer-section">
                    <div className="footer-left">
                        <label>Attach Invoice</label>
                        <div className="file-upload-box">
                            <input type="text" readOnly placeholder="Choose File" />
                            <button className="upload-btn"><Upload size={16} /></button>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-calculation-row">
                            <label>Discount</label>
                            <div className="calc-inputs">
                                <div className="input-with-label">
                                    <input type="number" placeholder="0" />
                                    <span>(%)</span>
                                </div>
                                <span className="input-separator">-</span>
                                <div className="input-with-label">
                                    <input type="number" placeholder="0" />
                                    <span>(Rs)</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-calculation-row">
                            <label>Basic Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" />
                        </div>
                        <div className="footer-calculation-row">
                            <label>GST Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" />
                        </div>
                        <div className="footer-calculation-row total-bold">
                            <label>Total Amount</label>
                            <input type="number" className="calc-total-input" readOnly placeholder="0" />
                        </div>
                    </div>
                </div>

                <div className="form-action-buttons">
                    <button className="btn-cancel" onClick={() => navigate(-1)}><X size={16} /> CANCEL</button>
                    <button className="btn-save"><Save size={16} /> SAVE</button>
                </div>
            </div>

            <SerialNoPopup
                isOpen={isSerialPopupOpen}
                anchorRect={serialPopupAnchor}
                onClose={() => setIsSerialPopupOpen(false)}
                rowId={activeRowId}
            />
        </div>
    );
};

export default SparePartsPurchaseBillPage;
