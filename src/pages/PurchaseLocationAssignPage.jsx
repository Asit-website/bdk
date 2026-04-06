import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Calendar, ChevronDown, Printer, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServiceDashboardPage.css';
import './PurchaseLocationAssignPage.css';

const PurchaseLocationAssignPage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('2026-01-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    const rows = [
        { id: 1, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'BTL EPC LTD', partCode: 'SPMTWEB0010254', partName: 'FUEL PIPE ASSY', rackNo: 'G2', binNo: '25', qty: '20', balancedQty: '220', preparedBy: 'SUJOY HANSDA' },
        { id: 2, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'DEY AUTOMOBILE', partCode: 'SPMTWEB0010254', partName: 'FUEL NOZZLE ASSY', rackNo: 'G2', binNo: '25', qty: '1', balancedQty: '50', preparedBy: 'SUJOY HANSDA' },
        { id: 3, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'BTL EPC LTD', partCode: 'SPMTWEB0010254', partName: 'STARTER REEL 186F', rackNo: 'G3', binNo: '15', qty: '11', balancedQty: '22', preparedBy: 'SUJOY HANSDA' },
        { id: 4, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'MAA TARA ENTERPRISE', partCode: 'SPMTWEB0010254', partName: 'BALL BEARING 6208', rackNo: 'G6', binNo: '24', qty: '20', balancedQty: '78', preparedBy: 'SUJOY HANSDA' },
        { id: 5, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'GARAI AUTOMOBILE', partCode: 'SPMTWEB0010254', partName: 'CRANK SHAFT 186F', rackNo: 'G1', binNo: '25', qty: '20', balancedQty: '95', preparedBy: 'SUJOY HANSDA' },
        { id: 6, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'BTL EPC LTD', partCode: 'SPMTWEB0010254', partName: 'CIRCLIP 2', rackNo: 'G2', binNo: '18', qty: '20', balancedQty: '100', preparedBy: 'SUJOY HANSDA' },
        { id: 7, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'BTL EPC LTD', partCode: 'SPMTWEB0010254', partName: 'CIRCLIP 2', rackNo: 'G2', binNo: '25', qty: '20', balancedQty: '21', preparedBy: 'SUJOY HANSDA' },
        { id: 8, receivedDate: '25/03/2026', assignDate: '20/03/2025', supplier: 'BTL EPC LTD', partCode: 'SPMTWEB0010254', partName: 'CIRCLIP 2', rackNo: 'G2', binNo: '25', qty: '20', balancedQty: '23', preparedBy: 'SUJOY HANSDA' },
    ];

    return (
        <div className="page-container">
            <div className="filters-section service-dashboard-filters">
                <div className="service-dashboard-top">
                    <div className="service-dashboard-search">
                        <Search size={16} color="#64748b" />
                        <input type="text" placeholder="Search Transactions" />
                    </div>

                    <div className="filter-actions">
                        <button className="btn btn-sale">+ Add Sale</button>
                        <button className="btn btn-purchase">+ Add Purchase</button>
                        <button className="btn-icon"><Plus size={18} /></button>
                        <button className="btn-icon muted"><MoreVertical size={18} /></button>
                    </div>
                </div>
            </div>

            <div className="table-container purchase-location-assign-wrap">
                <div className="purchase-location-header-bar">
                    <h3>Product Location Assign Dashboard</h3>
                    <button
                        type="button"
                        className="btn-assign-now purchase-assign-btn"
                        onClick={() => navigate('/purchase/location-assign/add')}
                    >
                        Assign Now
                    </button>
                </div>

                <div className="purchase-location-filter-row">
                    <div className="purchase-filter-item date">
                        <label>Select Date</label>
                        <div className="date-wrapper">
                            <Calendar size={14} color="#64748b" />
                            <input
                                type="date"
                                className="date-input-hidden"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                            />
                            <span className="date-separator">To</span>
                            <input
                                type="date"
                                className="date-input-hidden"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                            />
                        </div>
                    </div>

                    <div className="purchase-filter-item">
                        <label>Invoice Date</label>
                        <input type="date" className="purchase-input" />
                    </div>

                    <div className="purchase-filter-item">
                        <label>Supplier Name</label>
                        <div className="purchase-select-wrap">
                            <select className="purchase-input">
                                <option>Select</option>
                            </select>
                            <ChevronDown size={14} className="purchase-select-icon" />
                        </div>
                    </div>

                    <div className="purchase-filter-item">
                        <label>Invoice No</label>
                        <div className="purchase-select-wrap">
                            <select className="purchase-input">
                                <option>Select</option>
                            </select>
                            <ChevronDown size={14} className="purchase-select-icon" />
                        </div>
                    </div>

                    <div className="purchase-filter-item search-btn-wrap">
                        <button type="button" className="purchase-search-btn">SEARCH</button>
                    </div>
                </div>

                <div className="purchase-location-toolbar">
                    <div />
                    <div className="purchase-toolbar-right">
                        <div className="purchase-inline-search">
                            <Search size={14} color="#94a3b8" />
                            <input type="text" placeholder="Search..." />
                        </div>
                        <button className="table-action-btn"><Printer size={17} color="#22c55e" /></button>
                        <button className="table-action-btn"><Download size={17} color="#3b82f6" /></button>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table purchase-location-table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Recived Date</th>
                                <th>Assign Date</th>
                                <th>Supplier Name</th>
                                <th>Part Code</th>
                                <th>Part Name</th>
                                <th>Rack No</th>
                                <th>Bin No</th>
                                <th>Qty</th>
                                <th>Balanced Qty</th>
                                <th>Prepared By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.receivedDate}</td>
                                    <td>{row.assignDate}</td>
                                    <td>{row.supplier}</td>
                                    <td>{row.partCode}</td>
                                    <td>{row.partName}</td>
                                    <td>{row.rackNo}</td>
                                    <td>{row.binNo}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.balancedQty}</td>
                                    <td>{row.preparedBy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PurchaseLocationAssignPage;