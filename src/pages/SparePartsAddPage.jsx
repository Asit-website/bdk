import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Plus, 
  X, 
  RefreshCcw, 
  Maximize2, 
  FileUp 
} from 'lucide-react';
import './SparePartsMasterPage.css';

const SparePartsAddPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Spare Parts Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Spare Parts Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate('/master/item/spare-parts')} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content-pm">
                    <div className="pm-create-view">
                        <div className="pm-sub-header">NEW SPARE PARTS CREATE</div>

                        <div className="pm-grid-container">
                            {/* Column 1 */}
                            <div className="pm-column">
                                <div className="form-group pm-field">
                                    <label>ITEM TYPE</label>
                                    <div className="input-with-plus">
                                        <select className="form-input-select pm-input">
                                            <option>Select Item Type</option>
                                        </select>
                                        <button className="pm-add-small-btn"><Plus size={14} /></button>
                                    </div>
                                </div>

                                <div className="form-group pm-field">
                                    <label>PART CODE</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="PART CODE" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>PRODUCT MODEL</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="PRODUCT MODEL" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>HSN CODE</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="HSN CODE" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>TCS %</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="TCS %" />
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="pm-column">
                                <div className="form-group pm-field">
                                    <label>PART NAME</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="PART NAME" />
                                </div>

                                <div className="form-group pm-field">
                                    <label>DESCRIPTION</label>
                                    <input type="text" className="form-input-text pm-input" placeholder="DESCRIPTION" />
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
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="pm-form-footer">
                            <button className="pm-btn-import">
                                <FileUp size={16} /> IMPORT EXCEL
                            </button>
                            <div className="pm-footer-right">
                                <button className="pm-btn-cancel" onClick={() => navigate('/master/item/spare-parts')}>CANCEL</button>
                                <button className="pm-btn-save" onClick={() => navigate('/master/item/spare-parts')}>SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SparePartsAddPage;
