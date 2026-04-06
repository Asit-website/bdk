import React from 'react';
import { FileText, TrendingUp } from 'lucide-react';
import './QuotationStats.css';

const QuotationStats = () => {
    return (
        <div className="quotation-stats-container">
            <div className="stat-card">
                <div className="stat-info">
                    {/* Top Row: Label and Percentage */}
                    <div className="stat-header">
                        <span className="stat-label">Total Quatation</span>
                        <span className="stat-percent">100% <TrendingUp size={14} /></span>
                    </div>

                    {/* Second Row: Value and Comparison */}
                    <div className="stat-main">
                        <span className="stat-value">500</span>
                        <span className="stat-subtext">vs last month</span>
                    </div>
                </div>

                {/* Icon Wrapper (Right side) */}
                <div className="stat-icon-wrapper">
                    <FileText size={24} />
                </div>
            </div>

            {/* Empty space for grid alignment if needed */}
            <div className="empty-grid-space"></div>
        </div>
    );
};

export default QuotationStats;
