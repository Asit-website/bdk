import React from 'react';
import './QuotationStats.css';

const EstimateStats = () => {
    return (
        <div className="quotation-stats-container">
            <div className="stat-card">
                <div className="stat-info">
                    <div className="stat-header">
                        <span className="stat-label">Total Estimate</span>
                        <div className="stat-percent">
                            <span>100%</span>
                            <span>↗</span>
                        </div>
                    </div>
                    <div className="stat-main">
                        <span className="stat-value">500</span>
                        <span className="stat-subtext">vs last month</span>
                    </div>
                </div>
                <div className="stat-icon-wrapper" style={{ backgroundColor: '#fdf2f2', color: '#dc2626' }}>
                    <div className="stat-icon-box"></div>
                </div>
            </div>
        </div>
    );
};

export default EstimateStats;
