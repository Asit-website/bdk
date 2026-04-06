import React, { useState } from 'react';
import { Search, Plus, Calendar, ChevronDown, Settings, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './QuotationFilters.css';

const SaleBillFilters = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    return (
        <div className="quotation-filters-container">
            {/* Row 1: Search & Secondary Actions */}
            <div className="filter-top-bar">
                <div className="search-transactions">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search Transactions" />
                </div>
                <div className="filter-actions-group">
                    <button className="btn-secondary sale">+ Add Sale</button>
                    <button className="btn-secondary purchase">+ Add Purchase</button>
                    <button className="btn-icon-blue"><Plus size={18} /></button>
                    <button className="btn-icon-gray"><MoreVertical size={18} /></button>
                </div>
            </div>

            {/* Row 2: Title & Primary Action */}
            <div className="filter-middle-bar">
                <div className="quotation-title-group">
                    <h2 className="quotation-title">Sale Bill</h2>
                    <ChevronDown size={20} className="title-chevron" />
                </div>
                <div className="quotation-actions-right">
                    <button className="btn-add-quotation" onClick={() => navigate('/sales/weeder/bill/add')}>
                        <Plus size={18} /> Add Sale Bill
                    </button>
                    <button className="btn-settings-gray">
                        <Settings size={18} />
                    </button>
                </div>
            </div>

            {/* Row 3: Filter Selectors Bar */}
            <div className="filters-selectors-bar">
                <div className="filter-group">
                    <span className="filter-label">Filter by :</span>

                    <div className="filter-dropdown min-w-120">
                        <span>This Month</span>
                        <ChevronDown size={14} />
                    </div>

                    <div className="date-wrapper">
                        <Calendar size={14} />
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

                    <div className="filter-dropdown">
                        <span>All</span>
                        <ChevronDown size={14} />
                    </div>

                    <div className="filter-dropdown min-w-120">
                        <span>All Users</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleBillFilters;
