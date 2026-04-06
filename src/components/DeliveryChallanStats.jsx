import React from 'react';
import { TrendingUp } from 'lucide-react';
import './QuotationStats.css';

const DeliveryChallanStats = () => {
    return (
        <div className="quotation-stats-container">
            <div className="stat-card">
                <div className="stat-info">
                    <div className="stat-header">
                        <span className="stat-label">Total Delivery</span>
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
                <div className="stat-icon-wrapper blue-bg">
                    <div className="stat-icon-box"></div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryChallanStats;
