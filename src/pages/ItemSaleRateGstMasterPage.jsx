import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X, RefreshCcw, Maximize2, Edit2, Check, FileDown } from 'lucide-react';
import './SaleRateGstMasterPage.css'; // Reusing SaleRate styles

const ItemSaleRateGstMasterPage = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([
        { id: 1, category: 'PARTS', name: 'FUEL PIPE ASSY', number: 'SPMTWEBD002546', hsn: '84329090', gst: '5', rate: '1,08,435.00' },
        { id: 2, category: 'OIL', name: 'SERVO 20W-40 1L', number: 'ENGINE OIL 1L', hsn: '84329090', gst: '18', rate: '280.00' },
        { id: 3, category: 'LABOUR', name: 'SERVICE CHARGE', number: '', hsn: '84329090', gst: '5', rate: '300.00' }
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ hsn: '', gst: '', rate: '' });

    const startEditing = (item) => {
        setEditingId(item.id);
        setEditForm({ hsn: item.hsn, gst: item.gst, rate: item.rate });
    };

    const saveChanges = (id) => {
        setItems(items.map(i => i.id === id ? { ...i, ...editForm } : i));
        setEditingId(null);
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Item Sale Rate & GST Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Item Sale Rate & GST Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="salerate-master-content">
                    {/* Data Table */}
                    <div className="salerate-table-container">
                        <table className="salerate-table-pm">
                            <thead>
                                <tr>
                                    <th>CATEGORY</th>
                                    <th>PART NAME</th>
                                    <th>PART NUMBER</th>
                                    <th>HSN CODE</th>
                                    <th>GST %</th>
                                    <th style={{ width: '220px' }}>SALE RATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.category}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>
                                            {editingId === item.id ? (
                                                <input 
                                                    type="text" 
                                                    className="inline-edit-input" 
                                                    value={editForm.hsn}
                                                    onChange={(e) => setEditForm({...editForm, hsn: e.target.value})}
                                                />
                                            ) : item.hsn}
                                        </td>
                                        <td>
                                            {editingId === item.id ? (
                                                <input 
                                                    type="text" 
                                                    className="inline-edit-input small" 
                                                    value={editForm.gst}
                                                    onChange={(e) => setEditForm({...editForm, gst: e.target.value})}
                                                />
                                            ) : item.gst}
                                        </td>
                                        <td>
                                            <div className="rate-cell-pm">
                                                {editingId === item.id ? (
                                                    <div className="rate-edit-group">
                                                        <span className="currency-prefix">₹</span>
                                                        <input 
                                                            type="text" 
                                                            className="rate-edit-input" 
                                                            value={editForm.rate}
                                                            onChange={(e) => setEditForm({...editForm, rate: e.target.value})}
                                                            autoFocus
                                                        />
                                                        <button className="rate-action-btn check" onClick={() => saveChanges(item.id)}>
                                                            <Check size={14} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="rate-display-group">
                                                        <span className="rate-value">₹{item.rate}</span>
                                                        <button className="rate-action-btn edit" onClick={() => startEditing(item)}>
                                                            <Edit2 size={14} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bulk Update Section */}
                    <div className="bulk-update-section">
                        <p className="bulk-label">Bulk update</p>
                        <button className="pm-btn-import">
                            <FileDown size={14} />
                            IMPORT EXCEL
                        </button>
                    </div>

                    {/* Footer Actions */}
                    <div className="pm-form-footer">
                        <div></div>
                        <div className="pm-footer-right">
                            <button className="pm-btn-cancel" onClick={() => navigate(-1)}>CANCEL</button>
                            <button className="pm-btn-save">SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemSaleRateGstMasterPage;
