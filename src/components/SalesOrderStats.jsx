import React from 'react';
import './QuotationStats.css';

const SalesOrderStats = () => {
    return (
        <div className="quotation-stats-container">
            <div className="stat-card" style={{ backgroundColor: '#22c55e', color: 'white', minWidth: '250px' }}>
                <div className="stat-info">
                    <div className="stat-header">
                        <span className="stat-label" style={{ color: 'rgba(255,255,255,0.9)' }}>TOTAL Order</span>
                    </div>
                    <div className="stat-main">
                        <span className="stat-value" style={{ color: 'white', fontSize: '32px' }}>₹5,000.00</span>
                    </div>
                    <div className="stat-footer" style={{ display: 'flex', gap: '10px', marginTop: '10px', fontSize: '12px', fontWeight: '600' }}>
                        <span style={{ opacity: 0.8 }}>DAY</span>
                        <span>MONTH</span>
                        <span style={{ opacity: 0.8 }}>YEAR</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesOrderStats;
