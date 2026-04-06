import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreVertical, ChevronRight } from 'lucide-react';
import '../components/Filters.css';
import './EmployeeAttendanceDetailsPage.css';

const EmployeeAttendanceDetailsPage = () => {
    const navigate = useNavigate();
    const [isStaffViewEnabled, setIsStaffViewEnabled] = useState(true);

    const detailItems = [
        { label: 'Work Timings', isNew: true, path: '/master/employee/attendance/work-timings' },
        { label: 'Attendance Modes', isNew: true, path: '/master/employee/attendance/modes' },
        { label: 'Automation Rules', isNew: true, path: '/master/employee/attendance/automation' },
    ];

    return (
        <div className="page-container">
            {/* Top Bar - Consistent across app */}
            <div className="service-dashboard-top mb-12">
                <div className="service-dashboard-search">
                    <Search size={16} color="#64748b" />
                    <input type="text" placeholder="Search Transactions" />
                </div>

                <div className="filter-actions">
                    <button className="btn btn-new-service">+ Add New Service</button>
                    <button className="btn btn-sale">+ Add Sale</button>
                    <button className="btn btn-purchase">+ Add Purchase</button>
                    <button className="btn-icon"><Plus size={18} /></button>
                    <button className="btn-icon muted"><MoreVertical size={18} /></button>
                </div>
            </div>

            {/* Content Area */}
            <div className="attendance-details-content">
                <h2 className="section-title-master">Attendance Details</h2>

                <div className="details-list-container">
                    {detailItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="details-list-item"
                            onClick={() => item.path && navigate(item.path)}
                        >
                            <div className="details-item-left">
                                <span className="item-label">{item.label}</span>
                                {item.isNew && <span className="new-badge">New</span>}
                            </div>
                            <ChevronRight size={18} color="#94a3b8" />
                        </div>
                    ))}

                    <div className="details-list-toggle">
                        <span className="item-label">Staff can view own attendance</span>
                        <label className="bdk-switch">
                            <input 
                                type="checkbox" 
                                checked={isStaffViewEnabled} 
                                onChange={() => setIsStaffViewEnabled(!isStaffViewEnabled)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAttendanceDetailsPage;
