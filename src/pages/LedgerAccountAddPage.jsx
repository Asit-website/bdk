import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  X, 
  RefreshCcw, 
  Maximize2, 
  Plus, 
  Edit2, 
  Trash2, 
  FileDown 
} from 'lucide-react';
import './LedgerAccountMasterPage.css';
import FetchEnquiryModal from '../components/FetchEnquiryModal';

const LedgerAccountAddPage = () => {
    const navigate = useNavigate();
    const [isFetchModalOpen, setIsFetchModalOpen] = useState(false);
    
    // Form State
    const [ledgerInfo, setLedgerInfo] = useState({
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        partyType: '',
        mobile: '',
        village: '',
        gp: '',
        block: '',
        dist: '',
        state: '',
        pinCode: '',
        aadhaar: '',
        pan: ''
    });

    const [productDetail, setProductDetail] = useState({
        category: '',
        modelName: '',
        modelNo: '',
        engineNo: '',
        chassisNo: '',
        batteryNo: '',
        deliveryDate: ''
    });

    const [productList, setProductList] = useState([
        {
            id: 1,
            modelName: '9D51',
            chassisNo: 'W25015HR1225/E25018HR1222',
            batteryNo: '85212201H12552',
            deliveryDate: '22-03-2026'
        },
        {
            id: 2,
            modelName: '8D6',
            chassisNo: 'W25015HR1225/E25018HR1222',
            batteryNo: '85212201H12552',
            deliveryDate: '22-03-2026'
        }
    ]);

    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        if (section === 'ledger') {
            setLedgerInfo(prev => ({ ...prev, [name]: value }));
        } else {
            setProductDetail(prev => ({ ...prev, [name]: value }));
        }
    };

    const addProduct = () => {
        if (productDetail.modelName || productDetail.chassisNo) {
            setProductList([...productList, {
                id: Date.now(),
                ...productDetail
            }]);
            setProductDetail({
                category: '',
                modelName: '',
                modelNo: '',
                engineNo: '',
                chassisNo: '',
                batteryNo: '',
                deliveryDate: ''
            });
        }
    };

    const deleteProduct = (id) => {
        setProductList(productList.filter(p => p.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Account Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Ledger Account New</span>
            </div>

            <div className="quotation-form-card">
                {/* Header */}
                <div className="form-header">
                    <h2 className="form-main-title">Ledger Account New</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate('/master/account/ledger')} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="form-content">
                    {/* Ledger Information Section */}
                    <div className="form-section">
                        <div className="section-header-inline">
                            <h3 className="section-title">Ledger Information</h3>
                            <button className="btn-fetch" onClick={() => setIsFetchModalOpen(true)}>
                                Fetch From Enquiry List
                            </button>
                        </div>
                        
                        <div className="form-grid-4">
                            <div className="input-group">
                                <label>Title</label>
                                <select name="title" value={ledgerInfo.title} onChange={(e) => handleInputChange(e, 'ledger')}>
                                    <option value="">Select</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Mrs.">Mrs.</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" value={ledgerInfo.firstName} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>Middle Name</label>
                                <input type="text" name="middleName" value={ledgerInfo.middleName} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={ledgerInfo.lastName} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                        </div>

                        <div className="form-grid-3" style={{ marginTop: '15px' }}>
                            <div className="input-group">
                                <label>Gender</label>
                                <select name="gender" value={ledgerInfo.gender} onChange={(e) => handleInputChange(e, 'ledger')}>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Party Type</label>
                                <select name="partyType" value={ledgerInfo.partyType} onChange={(e) => handleInputChange(e, 'ledger')}>
                                    <option value="">Select</option>
                                    <option value="Debtor">Debtor</option>
                                    <option value="Creditor">Creditor</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>MOBILE No</label>
                                <input type="number" name="mobile" value={ledgerInfo.mobile} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                        </div>

                        <div className="form-grid-3" style={{ marginTop: '15px' }}>
                            <div className="input-group">
                                <label>VILLAGE</label>
                                <input type="text" name="village" value={ledgerInfo.village} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>GP</label>
                                <input type="text" name="gp" value={ledgerInfo.gp} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>BLOCK</label>
                                <input type="text" name="block" value={ledgerInfo.block} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                        </div>

                        <div className="form-grid-3" style={{ marginTop: '15px' }}>
                            <div className="input-group">
                                <label>DIST</label>
                                <input type="text" name="dist" value={ledgerInfo.dist} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>STATE</label>
                                <input type="text" name="state" value={ledgerInfo.state} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>PIN CODE</label>
                                <input type="number" name="pinCode" value={ledgerInfo.pinCode} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                        </div>

                        <div className="form-grid-3" style={{ marginTop: '15px' }}>
                            <div className="input-group">
                                <label>AADHAAR NO</label>
                                <input type="number" name="aadhaar" value={ledgerInfo.aadhaar} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                            <div className="input-group">
                                <label>PAN NO</label>
                                <input type="text" name="pan" value={ledgerInfo.pan} onChange={(e) => handleInputChange(e, 'ledger')} />
                            </div>
                        </div>
                    </div>

                    <hr className="section-divider" />

                    {/* Add Product Details Section */}
                    <div className="form-section">
                        <h3 className="section-title">Add Product Details</h3>
                        <div className="form-grid-4">
                            <div className="input-group">
                                <label>Product Category</label>
                                <select name="category" value={productDetail.category} onChange={(e) => handleInputChange(e, 'product')}>
                                    <option value="">Select</option>
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Model Name</label>
                                <input type="text" name="modelName" value={productDetail.modelName} onChange={(e) => handleInputChange(e, 'product')} />
                            </div>
                            <div className="input-group">
                                <label>Model No</label>
                                <input type="text" name="modelNo" value={productDetail.modelNo} onChange={(e) => handleInputChange(e, 'product')} />
                            </div>
                            <div className="input-group">
                                <label>Engine No</label>
                                <input type="text" name="engineNo" value={productDetail.engineNo} onChange={(e) => handleInputChange(e, 'product')} />
                            </div>
                        </div>
                        <div className="form-grid-3" style={{ marginTop: '15px' }}>
                            <div className="input-group">
                                <label>Chassis No</label>
                                <input type="text" name="chassisNo" value={productDetail.chassisNo} onChange={(e) => handleInputChange(e, 'product')} />
                            </div>
                            <div className="input-group">
                                <label>Battery No</label>
                                <input type="text" name="batteryNo" value={productDetail.batteryNo} onChange={(e) => handleInputChange(e, 'product')} />
                            </div>
                            <div className="input-group">
                                <label>Delivery Date</label>
                                <input type="date" name="deliveryDate" value={productDetail.deliveryDate} onChange={(e) => handleInputChange(e, 'product')} />
                            </div>
                        </div>
                        <div className="btn-row-right">
                            <button className="btn-add-item" onClick={addProduct}>
                                <Plus size={16} /> Add
                            </button>
                        </div>
                    </div>

                    {/* Product List Table */}
                    <div className="table-container-ledger">
                        <table className="ledger-table">
                            <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Model Name</th>
                                    <th>Chassis/Engine No</th>
                                    <th>BATTERY No</th>
                                    <th>Delivery Date</th>
                                    <th style={{ textAlign: 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.modelName}</td>
                                        <td>{item.chassisNo || item.engineNo}</td>
                                        <td>{item.batteryNo}</td>
                                        <td>{item.deliveryDate}</td>
                                        <td>
                                            <div className="action-icons">
                                                <Edit2 size={14} className="icon-edit" />
                                                <Trash2 size={14} className="icon-delete" onClick={() => deleteProduct(item.id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Actions */}
                    <div className="form-footer-ledger">
                        <div className="footer-left">
                            <button className="btn-import-excel">
                                <FileDown size={14} /> IMPORT EXCEL
                            </button>
                        </div>
                        <div className="footer-right">
                            <button className="btn-cancel" onClick={() => navigate('/master/account/ledger')}>CANCEL</button>
                            <button className="btn-save" onClick={() => navigate('/master/account/ledger')}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
            <FetchEnquiryModal 
                isOpen={isFetchModalOpen}
                onClose={() => setIsFetchModalOpen(false)}
            />
        </div>
    );
};

export default LedgerAccountAddPage;
