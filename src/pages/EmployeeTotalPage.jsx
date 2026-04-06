import React from 'react';
import { Search, ChevronDown, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../components/Filters.css';
import '../components/LeadTable.css';
import './EmployeeTotalPage.css';

const EmployeeTotalPage = () => {
    const navigate = useNavigate();
    const rows = [
        {
            id: 1,
            name: 'SUDHIR MURMU',
            mobile: '1234567890',
            address: 'Krishnasol,Mayta,Paschim Medinipur,721121',
            designation: 'Godown Manager',
            shift: 'General',
        },
        {
            id: 2,
            name: 'SUDHIR MURMU',
            mobile: '1234567890',
            address: 'Krishnasol,Mayta,Paschim Medinipur,721121',
            designation: 'Godown Manager',
            shift: 'General',
        },
        {
            id: 3,
            name: 'SUDHIR MURMU',
            mobile: '1234567890',
            address: 'Krishnasol,Mayta,Paschim Medinipur,721121',
            designation: 'Godown Manager',
            shift: 'General',
        },
        {
            id: 4,
            name: 'SUDHIR MURMU',
            mobile: '1234567890',
            address: 'Krishnasol,Mayta,Paschim Medinipur,721121',
            designation: 'Godown Manager',
            shift: 'General',
        },
        {
            id: 5,
            name: 'SUDHIR MURMU',
            mobile: '1234567890',
            address: 'Krishnasol,Mayta,Paschim Medinipur,721121',
            designation: 'Godown Manager',
            shift: 'General',
        },
        {
            id: 6,
            name: 'SUDHIR MURMU',
            mobile: '1234567890',
            address: 'Krishnasol,Mayta,Paschim Medinipur,721121',
            designation: 'Godown Manager',
            shift: 'General',
        },
    ];

    return (
        <div className="page-container">
            <div className="filters-section service-dashboard-filters employee-attendance-filters">
                <div className="filter-row">
                    <div className="filter-title">
                        <h2>Total Employee</h2>
                        <ChevronDown size={18} color="#64748b" />
                    </div>
                </div>
            </div>

            <div className="total-card-strip">
                <div className="employee-stat-card tone-cyan total-single-card">
                    <div className="employee-stat-top">
                        <span className="employee-stat-value">818</span>
                        <Eye size={16} />
                    </div>
                    <span className="employee-stat-title">Total Employee</span>
                </div>
            </div>

            <div className="table-container service-dashboard-table employee-attendance-table-wrap total-employee-table-wrap">
                <div className="table-header service-table-header">
                    <div className="service-table-toolbar employee-toolbar total-header-toolbar">
                        <div />
                        <div className="employee-header-search">
                            <Search size={14} color="#94a3b8" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="lead-table employee-attendance-table total-employee-table">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Employee Name</th>
                                <th>Mobile No</th>
                                <th>Address</th>
                                <th>Designation</th>
                                <th>Shift</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="employee-name-cell">
                                            <span className="employee-avatar-dot" />
                                            <button
                                                type="button"
                                                className="employee-name-btn"
                                                onClick={() => navigate('/employee/profile', { state: { employee: row, from: '/employee/attendance/total' } })}
                                            >
                                                {row.name}
                                            </button>
                                        </div>
                                    </td>
                                    <td>{row.mobile}</td>
                                    <td className="total-employee-address">{row.address}</td>
                                    <td>{row.designation}</td>
                                    <td>{row.shift}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTotalPage;