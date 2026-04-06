import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Plus, X, RefreshCcw, Maximize2, FileUp } from 'lucide-react';
import './ProductMasterPage.css';
import './AddQuotationPage.css';

const ProductAddPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Product Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Product Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate('/master/item/product')} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content-pm">
                    <div className="pm-create-view">
                        <div className="pm-sub-header">NEW PRODUCT CREATE</div>
                        <div className="pm-grid-container">
                            {/* Column 1 */}
                            <div className="pm-column">
                                <div className="form-group pm-field">
                                    <label>ITEM CATEGORY</label>
                                    <div className="input-with-plus">
                                        <select className="form-input-select pm-input">
                                            <option>Select Category</option>
                                        </select>
                                        <button className="pm-add-small-btn"><Plus size={14} /></button>
                                    </div>
                                </div>

                                <div className="form-group pm-field">
                                    <label>MODEL NO</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="MODEL NO" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>UOM</label>
                                    <div className="input-with-plus">
                                        <select className="form-input-select pm-input">
                                            <option>Select UOM</option>
                                        </select>
                                        <button className="pm-add-small-btn"><Plus size={14} /></button>
                                    </div>
                                </div>

                                <div className="form-group pm-field">
                                    <label>GST %</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="GST %" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>WARRANTY PERIOD</label>
                                    <input 
                                        type="text" 
                                        className="form-input-text pm-input pm-input-readonly" 
                                        placeholder="WARRANTY PERIOD" 
                                        value="1year 6 months" 
                                        readOnly 
                                    />
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="pm-column">
                                <div className="form-group pm-field">
                                    <label>MODEL NAME</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="MODEL NAME" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>MODEL DESCRIPTION</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="MODEL DESCRIPTION" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>HSN CODE</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="HSN CODE" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>TCS %</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="TCS %" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>SERVICE WARRANTY PERIOD</label>
                                    <input 
                                        type="text" 
                                        className="form-input-text pm-input pm-input-readonly" 
                                        placeholder="SERVICE WARRANTY PERIOD" 
                                        value="1year 6 months" 
                                        readOnly 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="pm-form-footer">
                            <button className="pm-btn-import">
                                <FileUp size={16} /> IMPORT EXCEL
                            </button>
                            <div className="pm-footer-right">
                                <button className="pm-btn-cancel" onClick={() => navigate('/master/item/product')}>CANCEL</button>
                                <button className="pm-btn-save" onClick={() => navigate('/master/item/product')}>SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAddPage;
