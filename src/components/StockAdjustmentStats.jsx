import React from 'react';
import { Target } from 'lucide-react';
import './StatsSection.css';

const StockAdjustmentStats = () => {
    return (
        <div className="stats-grid" style={{ paddingTop: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="stat-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px' }}>
                <div className="stat-info" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span className="stat-label" style={{ margin: 0 }}>Total Stock</span>
                        <span className="stat-percent" style={{ color: '#22c55e', fontSize: '14px' }}>100% up</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                        <span className="stat-value" style={{ fontSize: '28px' }}>500</span>
                        <span className="stat-subtext" style={{ margin: 0 }}>vs last month</span>
                    </div>
                </div>

                <div className="stat-icon-wrapper" style={{ backgroundColor: '#ecfdf5', color: '#10b981', marginLeft: '20px' }}>
                    <Target size={24} />
                </div>
            </div>

            <div></div>
        </div>
    );
};

export default StockAdjustmentStats;
