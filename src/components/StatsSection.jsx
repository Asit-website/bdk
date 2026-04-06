import React from 'react';
import { Target, Clock, CheckCircle } from 'lucide-react';
import './StatsSection.css';

const StatsSection = ({ title = 'Total Lead' }) => {
    const stats = [
        {
            label: title,
            value: '500',
            percent: '100%',
            subText: 'vs last month',
            pending: '500',
            delivered: '0',
            icon: <Target size={24} />,
            color: '#10b981',
            bgColor: '#ecfdf5'
        },
    ];

    return (
        <div className="stats-grid">
            {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">{stat.label}</span>
                        <div className="stat-value-group">
                            <span className="stat-value">{stat.value}</span>
                            {stat.percent && <span className="stat-percent" style={{ color: stat.color }}>{stat.percent} ↑</span>}
                        </div>
                        <div className="stat-sub-stats">
                            <span className="sub-stat-item">Pending: <strong>{stat.pending}</strong></span>
                            <span className="sub-stat-item">Delivered: <strong>{stat.delivered}</strong></span>
                        </div>
                        {stat.subText && <span className="stat-subtext">{stat.subText}</span>}
                    </div>
                    <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bgColor, color: stat.color }}>
                        {stat.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsSection;

