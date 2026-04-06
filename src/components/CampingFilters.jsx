import React, { useState } from 'react';
import { Search, Plus, ChevronDown, Calendar, Settings } from 'lucide-react';
import './Filters.css';

const CampingFilters = ({ onNewEntry }) => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    return (
        <div className="filters-section">
            <div className="filter-row">
                <div className="search-lead" style={{ width: '300px' }}>
                    <Search className="search-icon-inline" size={18} />
                    <input
                        type="text"
                        placeholder="Search Lead & Enquiry"
                        className="search-input"
                    />
                </div>

                <div className="filter-actions">
                    <button className="btn btn-sale">
                        <Plus size={16} /> Add Sale
                    </button>
                    <button className="btn btn-purchase">
                        <Plus size={16} /> Add Purchase
                    </button>
                    <div className="btn-icon">
                        <Plus size={18} />
                    </div>
                    <button className="btn btn-primary" style={{ borderRadius: '6px', background: '#10b981' }}
                        onClick={onNewEntry}
                    >
                        + New Entry
                    </button>
                </div>
            </div>

            <div className="filter- selectors" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <div className="filter-group">
                    <label>Filter by :</label>
                    <div className="select-wrapper">
                        <select className="select-input">
                            <option>This Month</option>
                        </select>
                        <ChevronDown className="select-icon-pointer" size={14} />
                    </div>

                    <div className="date-wrapper">
                        <Calendar size={14} style={{ color: '#64748b' }} />
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

                    <div className="select-wrapper">
                        <select className="select-input">
                            <option>All Firms</option>
                        </select>
                        <ChevronDown className="select-icon-pointer" size={14} />
                    </div>

                    <div className="select-wrapper">
                        <select className="select-input">
                            <option>All Users</option>
                        </select>
                        <ChevronDown className="select-icon-pointer" size={14} />
                    </div>
                </div>

                <button className="btn-settings">
                    <Settings size={18} />
                </button>
            </div>
        </div>
    );
};

export default CampingFilters;
