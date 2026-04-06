import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Calendar, ChevronDown, Download } from 'lucide-react';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './ServiceDashboardPage.css';
import './ServicePartsEnquiryPage.css';

const ServicePartsEnquiryPage = () => {
    const [startDate, setStartDate] = useState('2026-01-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    const rows = [
        { id: 1, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 2, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL NOZZEL ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 3, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL TANK ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 4, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'STARTER HANDLE', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 5, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'SPIRAL SPRING', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 6, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 7, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 8, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 9, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 10, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 11, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 12, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
        { id: 13, date: '25/03/2025', partCode: 'SPMTWEBD0020564', partName: 'FUEL PIPE ASSY', openQty: '100', currentQty: '50', rackNo: 'G1', binNo: '18', rate: '60.00', preparedBy: 'SUJOY HANSDA' },
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

            <div className="table-container service-parts-enquiry-wrap">
                <div className="service-parts-header-bar">
                    <h3>Parts Enquiry</h3>
                </div>

                <div className="service-parts-filter-row">
                    <div className="service-parts-filter-item date">
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

                    <div className="service-parts-filter-item">
                        <label>Select Branch</label>
                        <div className="service-parts-select-wrap">
                            <select className="service-parts-input">
                                <option>Select</option>
                            </select>
                            <ChevronDown size={14} className="service-parts-select-icon" />
                        </div>
                    </div>

                    <div className="service-parts-filter-item search-btn-wrap">
                        <button type="button" className="service-parts-search-btn">SEARCH</button>
                    </div>

                    <div className="service-parts-filter-item tools-right-wrap">
                        <label>&nbsp;</label>
                        <div className="service-parts-toolbar-right in-row">
                        <div className="service-parts-inline-search">
                            <Search size={14} color="#94a3b8" />
                            <input type="text" placeholder="Search..." />
                        </div>
                        <button className="service-parts-download-btn"><Download size={13} /></button>
                    </div>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table service-parts-table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Date</th>
                                <th>Part Code</th>
                                <th>Part Name</th>
                                <th>Open Qty</th>
                                <th>Curren Qty</th>
                                <th>Rack No</th>
                                <th>Bin No</th>
                                <th>Rate</th>
                                <th>Prepared By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.date}</td>
                                    <td>{row.partCode}</td>
                                    <td>{row.partName}</td>
                                    <td>{row.openQty}</td>
                                    <td>{row.currentQty}</td>
                                    <td>{row.rackNo}</td>
                                    <td>{row.binNo}</td>
                                    <td>₹{row.rate}</td>
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

export default ServicePartsEnquiryPage;