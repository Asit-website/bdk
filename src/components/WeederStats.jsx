import React from 'react';
import { Target } from 'lucide-react';
import './StatsSection.css';

const WeederStats = () => {
    return (
        <div className="stats-grid" style={{ paddingTop: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="stat-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '24px' }}>
                <div className="stat-info" style={{ width: '100%' }}>
                    {/* Top Row: Amount Label and Percentage */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span className="stat-label" style={{ margin: 0 }}>Total Purchase Amount</span>
                        <span className="stat-percent" style={{ color: '#22c55e', fontSize: '14px' }}>100% ↗</span>
                    </div>

                    {/* Second Row: Amount Value and Comparison Text */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
                        <span className="stat-value" style={{ fontSize: '28px' }}>₹ 500</span>
                        <span className="stat-subtext" style={{ margin: 0 }}>vs last month</span>
                    </div>

                    {/* Third Row: Qty Label */}
                    <div className="stat-label" style={{ marginBottom: '4px' }}>Total Purchase Qty.</div>

                    {/* Fourth Row: Qty Value */}
                    <div className="stat-value" style={{ fontSize: '24px' }}>100</div>
                </div>

                {/* Icon Wrapper (Right side) */}
                <div className="stat-icon-wrapper" style={{ backgroundColor: '#ecfdf5', color: '#10b981', marginLeft: '20px' }}>
                    <Target size={24} />
                </div>
            </div>

            {/* Empty space for the rest of the grid to maintain alignment */}
            <div></div>
        </div>
    );
};

export default WeederStats;
