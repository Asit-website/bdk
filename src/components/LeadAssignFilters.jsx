import React, { useState } from 'react';
import { Calendar, ChevronDown, Plus, Search, Settings } from 'lucide-react';
import BulkAssignModal from "./BulkAssignModal";
import './Filters.css';

const LeadAssignFilters = () => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        <div className="filters-section">

            <div className="search-lead">
                <Search size={16} className="search-icon-inline" />
                <input type="text" placeholder="Search Lead & Enquiry" className="search-input" />
            </div>

            <div className="filter-actions">
                <button className="btn btn-sale">+ Add Sale</button>
                <button className="btn btn-purchase">+ Add Purchase</button>
                <button className="btn-icon"><Plus size={18} /></button>
                <button className="btn-icon"><Plus size={18} /></button>
            </div>

            <div className="filter-row">
                <div className="filter-title">
                    <h2>Lead & Enquiry</h2>
                    <ChevronDown size={18} />
                </div>

                <div className="filter-row-right">
                    <button
                        className="btn btn-primary btn-new-lead"
                        style={{ backgroundColor: '#22c55e' }}
                        onClick={() => setOpenModal(true)}
                    >
                        + Bulk Assign
                    </button>

                    <button className="btn-settings">
                        <Settings size={18} />
                    </button>
                </div>
            </div>

            <div className="filter-selectors">
                <div className="filter-group">
                    <label>Filter by :</label>
                    <div className="select-wrapper">
                        <select className="select-input">
                            <option>This Month</option>
                            <option>Today</option>
                        </select>
                        <ChevronDown size={14} className="select-icon-pointer" />
                    </div>
                </div>

                <div className="filter-group">
                    <div className="date-wrapper">
                        <Calendar size={14} color="#64748b" />
                        <input
                            type="date"
                            className="date-input-hidden"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                        <span className="date-separator">To</span>

                        <input
                            type="date"
                            className="date-input-hidden"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className="filter-group">
                    <div className="select-wrapper">
                        <select className="select-input">
                            <option>All Firms</option>
                        </select>
                        <ChevronDown size={14} className="select-icon-pointer" />
                    </div>
                </div>

                <div className="filter-group">
                    <div className="select-wrapper">
                        <select className="select-input">
                            <option>All Users</option>
                        </select>
                        <ChevronDown size={14} className="select-icon-pointer" />
                    </div>
                </div>
            </div>

        </div>

        {/* Modal */}
        <BulkAssignModal
            open={openModal}
            onClose={() => setOpenModal(false)}
        />

        </>
    );
};

export default LeadAssignFilters;