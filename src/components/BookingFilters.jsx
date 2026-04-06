import React, { useState } from 'react';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical } from 'lucide-react';
import AddBookingModal from './AddBookingModal';
import './BookingFilters.css';

const BookingFilters = () => {
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div className="booking-filters-container">
            {/* Row 1: Search & Secondary Actions */}
            <div className="filter-top-bar">
                <div className="search-transactions">
                    <Search size={16} color="#64748b" />
                    <input
                        type="text"
                        placeholder="Search Transactions"
                    />
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
                <div className="booking-title-group">
                    <h1 className="booking-title">Booking</h1>
                    <ChevronDown size={20} className="title-chevron" />
                </div>
                <div className="booking-actions-right">
                    <button className="btn-add-booking" onClick={() => setIsAddModalOpen(true)}>
                        <Plus size={16} /> Add New Booking
                    </button>
                    <button className="btn-settings-gray">
                        <Settings size={18} />
                    </button>
                </div>
            </div>

            {/* Row 3: Filter Selectors */}
            <div className="filters-selectors-bar">
                <div className="filter-group">
                    <span className="filter-label">Filter by :</span>
                    <div className="filter-dropdown">
                        <span>This Month</span>
                        <ChevronDown size={14} />
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
                <div className="filter-group">
                    <div className="filter-dropdown min-w-80">
                        <span>All</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
                <div className="filter-group">
                    <div className="filter-dropdown min-w-120">
                        <span>All Users</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
            </div>

            {isAddModalOpen && (
                <AddBookingModal closeModal={() => setIsAddModalOpen(false)} />
            )}
        </div>
    );
};

export default BookingFilters;
