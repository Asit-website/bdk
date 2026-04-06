import React from 'react';
import './QuotationStats.css';

const SaleChallanStats = () => {
    return (
        <div className="quotation-stats-container">
            <div className="stat-card">
                <div className="stat-info">
                    <div className="stat-header">
                        <span className="stat-label">Total</span>
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
                <div className="stat-icon-wrapper" style={{ backgroundColor: '#ebf5ff', color: '#3b82f6' }}>
                    <div style={{ width: '24px', height: '24px', border: '2px solid currentColor', borderRadius: '4px' }}></div>
                </div>
            </div>
            {/* Added empty cards to match grid layout if needed, or leave as is if only one card is wanted */}
        </div>
    );
};

export default SaleChallanStats;
