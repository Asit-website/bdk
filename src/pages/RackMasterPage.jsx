import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, X, RefreshCcw, Maximize2, Edit2, Trash2, CheckCircle2, XCircle, Plus, FileDown } from 'lucide-react';
import './SaleRateGstMasterPage.css'; // Reusing Bulk Update styles

const RackMasterPage = () => {
    const navigate = useNavigate();
    const [racks, setRacks] = useState([
        { id: 1, location: 'Jharboni SW', rackNo: 'SW1', active: true },
        { id: 2, location: 'Jharboni SW', rackNo: 'SW2', active: true },
        { id: 3, location: 'Godown', rackNo: 'G1', active: false },
        { id: 4, location: 'Godown', rackNo: 'G2', active: true }
    ]);

    const [newLocation, setNewLocation] = useState('');
    const [newRackNo, setNewRackNo] = useState('');

    const addRack = () => {
        if (newLocation && newRackNo) {
            setRacks([...racks, { 
                id: racks.length + 1, 
                location: newLocation, 
                rackNo: newRackNo, 
                active: true 
            }]);
            setNewRackNo('');
        }
    };

    const toggleActive = (id) => {
        setRacks(racks.map(r => r.id === id ? { ...r, active: !r.active } : r));
    };

    const deleteRack = (id) => {
        setRacks(racks.filter(r => r.id !== id));
    };

    return (
        <div className="page-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item">Home</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item">Location Master</span>
                <ChevronRight size={14} className="breadcrumb-separator" />
                <span className="breadcrumb-item active">Rack Master</span>
            </div>

            <div className="quotation-form-card">
                <div className="form-header">
                    <h2 className="form-main-title">Rack Master</h2>
                    <div className="form-header-icons">
                        <span className="header-icon yellow"><RefreshCcw size={14} /></span>
                        <span className="header-icon green"><Maximize2 size={14} /></span>
                        <span className="header-icon red" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}><X size={14} /></span>
                    </div>
                </div>

                <div className="category-master-content">
                    {/* Create Section */}
                    <div className="create-rack-container" style={{ display: 'flex', gap: '30px', alignItems: 'flex-end', marginBottom: '40px' }}>
                        <div className="branch-input-group" style={{ width: '300px' }}>
                            <label>LOCATION</label>
                            <select 
                                className="pm-input" 
                                value={newLocation} 
                                onChange={(e) => setNewLocation(e.target.value)}
                            >
                                <option value="">SELECT LOCATION</option>
                                <option value="Jharboni SW">Jharboni SW</option>
                                <option value="Godown">Godown</option>
                            </select>
                        </div>
                        <div className="branch-input-group" style={{ width: '250px' }}>
                            <label>RACK No</label>
                            <input 
                                type="text" 
                                className="pm-input" 
                                placeholder="ENTER RACK No" 
                                value={newRackNo}
                                onChange={(e) => setNewRackNo(e.target.value)}
                            />
                        </div>
                        <button className="btn-add-pm" onClick={addRack} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0 30px', height: '42px', display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '8px', fontSize: '13px', fontWeight: '800' }}>
                            <Plus size={16} />
                            ADD
                        </button>
                    </div>

                    {/* Rack List Table */}
                    <div className="category-list-container">
                        <table className="category-table-pm">
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>Sl No</th>
                                    <th>Location</th>
                                    <th>Rack No</th>
                                    <th style={{ width: '100px', textAlign: 'center' }}>Active</th>
                                    <th style={{ width: '120px', textAlign: 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {racks.map((rack, index) => (
                                    <tr key={rack.id}>
                                        <td>{index + 1}</td>
                                        <td>{rack.location}</td>
                                        <td>{rack.rackNo}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div onClick={() => toggleActive(rack.id)} style={{ cursor: 'pointer', display: 'inline-block' }}>
                                                {rack.active ? (
                                                    <CheckCircle2 size={18} fill="#22c55e" color="#fff" />
                                                ) : (
                                                    <XCircle size={18} fill="#ef4444" color="#fff" />
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="category-actions-pm">
                                                <button className="action-btn-pm edit"><Edit2 size={13} /></button>
                                                <button className="action-btn-pm delete" onClick={() => deleteRack(rack.id)}><Trash2 size={13} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Bulk Update Section */}
                    <div className="bulk-update-section" style={{ marginTop: '50px', marginBottom: '30px' }}>
                        <p className="bulk-label">Bulk update</p>
                        <button className="pm-btn-import">
                            <FileDown size={14} />
                            IMPORT EXCEL
                        </button>
                    </div>

                    {/* Footer Actions */}
                    <div className="pm-form-footer" style={{ marginTop: '50px' }}>
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

export default RackMasterPage;
