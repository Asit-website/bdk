import React from 'react';
import { Target, TrendingUp } from 'lucide-react';
import './BookingStats.css';

const BookingStats = () => {
    return (
        <div className="booking-stats-container">
            <div className="stat-card">
                <div className="stat-info">
                    {/* Top Row: Label and Percentage */}
                    <div className="stat-header">
                        <span className="stat-label">Total Booking Amount</span>
                        <span className="stat-percent">100% <TrendingUp size={14} /></span>
                    </div>

                    {/* Second Row: Value and Comparison */}
                    <div className="stat-main">
                        <span className="stat-value">₹ 500</span>
                        <span className="stat-subtext">vs last month</span>
                    </div>

                </div>

                {/* Icon Wrapper (Right side) */}
                <div className="stat-icon-wrapper">
                    <Target size={24} />
                </div>
            </div>

            {/* Maintaining grid alignment if needed */}
            <div className="empty-grid-space"></div>
        </div>
    );
};

export default BookingStats;
