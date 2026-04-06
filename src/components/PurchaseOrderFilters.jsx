import React, { useState } from 'react';
import { Search, Plus, ChevronDown, Calendar, Settings, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Filters.css';

const PurchaseOrderFilters = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('2026-02-01');
    const [endDate, setEndDate] = useState('2026-02-28');

    return (
        <div className="filters-section">
            <div
                className="filter-top-bar"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}
            >
                <div
                    className="search-transactions"
                    style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '8px 15px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '300px'
                    }}
                >
                    <Search size={16} color="#64748b" style={{ marginRight: '10px' }} />
                    <input
                        type="text"
                        placeholder="Search Transactions"
                        style={{ background: 'none', border: 'none', outline: 'none', fontSize: '14px', width: '100%' }}
                    />
                </div>

                <div className="filter-actions" style={{ display: 'flex', gap: '10px' }}>
                    <button
                        className="btn btn-sale"
                        style={{
                            color: '#ef4444',
                            backgroundColor: '#fee2e2',
                            border: 'none',
                            padding: '8px 15px',
                            borderRadius: '6px',
                            fontWeight: '500',
                            fontSize: '13px'
                        }}
                    >
                        + Add Sale
                    </button>
                    <button
                        className="btn btn-purchase"
                        style={{
                            color: '#3b82f6',
                            backgroundColor: '#dbeafe',
                            border: 'none',
                            padding: '8px 15px',
                            borderRadius: '6px',
                            fontWeight: '500',
                            fontSize: '13px'
                        }}
                    >
                        + Add Purchase
                    </button>
                    <button
                        className="btn-icon"
                        style={{
                            backgroundColor: '#dbeafe',
                            color: '#3b82f6',
                            border: 'none',
                            padding: '8px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Plus size={18} />
                    </button>
                    <button
                        className="btn-icon"
                        style={{
                            backgroundColor: '#f1f5f9',
                            color: '#64748b',
                            border: 'none',
                            padding: '8px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <MoreVertical size={18} />
                    </button>
                </div>
            </div>

            <div className="filter-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div className="filter-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', margin: 0 }}>Purchase Order</h2>
                    <ChevronDown size={18} color="#64748b" />
                </div>

                <div className="filter-row-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                        className="btn btn-primary btn-new-lead"
                        style={{ backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '6px', fontWeight: '600', fontSize: '14px' }}
                        onClick={() => navigate('/purchase/order/add')}
                    >
                        + Add Purchase Order
                    </button>

                    <button
                        className="btn-settings"
                        style={{ background: '#f1f5f9', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer' }}
                    >
                        <Settings size={18} color="#64748b" />
                    </button>
                </div>
            </div>

            <div className="filter-selectors" style={{ display: 'flex', alignItems: 'center', gap: '15px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                <div className="filter-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '500', color: '#64748b' }}>Filter by :</label>
                    <div className="select-wrapper" style={{ position: 'relative' }}>
                        <select
                            className="select-input"
                            style={{
                                backgroundColor: '#f1f5f9',
                                border: 'none',
                                padding: '6px 30px 6px 15px',
                                borderRadius: '6px',
                                fontSize: '13px',
                                appearance: 'none',
                                fontWeight: '500',
                                color: '#1e293b'
                            }}
                        >
                            <option>This Month</option>
                        </select>
                        <ChevronDown size={14} style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                </div>

                <div className="filter-group">
                    <div className="date-wrapper" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', padding: '2px 10px', borderRadius: '6px' }}>
                        <Calendar size={14} color="#64748b" style={{ marginRight: '8px' }} />
                        <input
                            type="date"
                            className="date-input-hidden"
                            style={{ background: 'none', border: 'none', fontSize: '12px', padding: '4px', outline: 'none' }}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            onClick={(e) => e.target.showPicker && e.target.showPicker()}
                        />
                        <span className="date-separator" style={{ margin: '0 8px', color: '#64748b', fontSize: '12px' }}>To</span>
                        <input
                            type="date"
                            className="date-input-hidden"
                            style={{ background: 'none', border: 'none', fontSize: '12px', padding: '4px', outline: 'none' }}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            onClick={(e) => e.target.showPicker && e.target.showPicker()}
                        />
                    </div>
                </div>

                <div className="filter-group">
                    <div className="select-wrapper" style={{ position: 'relative' }}>
                        <select
                            className="select-input"
                            style={{
                                backgroundColor: '#f1f5f9',
                                border: 'none',
                                padding: '6px 30px 6px 15px',
                                borderRadius: '6px',
                                fontSize: '13px',
                                appearance: 'none',
                                fontWeight: '500',
                                color: '#1e293b'
                            }}
                        >
                            <option>All Branch</option>
                        </select>
                        <ChevronDown size={14} style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                </div>

                <div className="filter-group">
                    <div className="select-wrapper" style={{ position: 'relative' }}>
                        <select
                            className="select-input"
                            style={{
                                backgroundColor: '#f1f5f9',
                                border: 'none',
                                padding: '6px 30px 6px 15px',
                                borderRadius: '6px',
                                fontSize: '13px',
                                appearance: 'none',
                                fontWeight: '500',
                                color: '#1e293b'
                            }}
                        >
                            <option>All Users</option>
                        </select>
                        <ChevronDown size={14} style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseOrderFilters;
