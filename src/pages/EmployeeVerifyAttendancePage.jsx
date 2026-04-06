import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
    ChevronLeft, Search, Printer
} from 'lucide-react';
import './EmployeeVerifyAttendancePage.css';

const EmployeeVerifyAttendancePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const employee = location.state?.employee || { id: 1, name: 'BABURAM HEM.', pending: '2,310.57' };
    
    // Detailed breakdown data (mock)
    const attendanceData = {
        employeeId: 'EMP001',
        name: employee.name,
        workedOn: '23.5 days',
        absent: '4 days',
        payable: '23.5',
        breakdown: {
            weekOff: 0,
            publicHoliday: 0,
            daysOff: 0,
            privilegedLeave: 0,
            sickLeave: 0,
            casualLeave: 0,
            halfDayLeave: 0.5,
            paidLeaves: 0,
            fullPresent: 23,
            doublePresent: 0,
            halfDay: 0.5,
            workedOnManual: 23.5,
            totalWorking: 28,
            unpaidLeave: 0,
            absentManual: 4
        }
    };

    return (
        <div className="page-container employee-payroll-detail-page">
            {/* 1. WIZARD BANNER */}
            <div className="payroll-wizard-banner">
                <div className="wizard-banner-content">
                    <button type="button" className="wizard-back-btn" onClick={() => navigate(-1)}>
                        <ChevronLeft size={16} /> Employee Salary
                    </button>
                    
                    <div className="payroll-stepper">
                        <div className="step active">
                            <span className="step-number">1</span>
                            <span className="step-label">Attendance</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step inactive">
                            <span className="step-number">2</span>
                            <span className="step-label">Salary</span>
                        </div>
                    </div>

                    <div className="payroll-banner-info">
                        <div className="info-item">
                            <span className="info-label">Payroll Month :</span>
                            <span className="info-value">February 2026</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Days in Attendance Cycle :</span>
                            <span className="info-value">28 <span className="info-icon">i</span></span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Period Type :</span>
                            <span className="info-value">Calendar Month</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT - VERIFY ATTENDANCE */}
            <div className="payroll-detail-container">
                <div className="verify-attendance-section">
                    <h2 className="section-title">Verify Attendance</h2>
                    
                    <div className="verify-search-row">
                        <div className="verify-search-box">
                            <Search size={14} />
                            <input type="text" placeholder="Search by person name" />
                        </div>
                    </div>

                    <div className="attendance-table-wrap">
                        <table className="attendance-main-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                    <th>EMPLOYEE ID</th>
                                    <th>NAME</th>
                                    <th>WORKED ON</th>
                                    <th>ABSENT</th>
                                    <th>PAYABLE</th>
                                    <th style={{ width: '100px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="employee-main-row">
                                    <td><input type="checkbox" defaultChecked /></td>
                                    <td>
                                        <div className="emp-id-cell">
                                            <div className="small-avatar"></div>
                                            {attendanceData.employeeId}
                                        </div>
                                    </td>
                                    <td className="emp-name-cell">{attendanceData.name}</td>
                                    <td>{attendanceData.workedOn}</td>
                                    <td>{attendanceData.absent}</td>
                                    <td className="emp-payable-cell">{attendanceData.payable}</td>
                                    <td>
                                        <button type="button" className="row-edit-btn">EDIT <ChevronDown size={12} /></button>
                                    </td>
                                </tr>
                                <tr className="detail-expand-row">
                                    <td colSpan="7">
                                        <div className="attendance-breakdown-grid">
                                            <div className="breakdown-col col-gray">
                                                <div className="bd-item"><span>Week Off</span> <strong>{attendanceData.breakdown.weekOff}</strong></div>
                                                <div className="bd-item"><span>Public Holiday</span> <strong>{attendanceData.breakdown.publicHoliday}</strong></div>
                                                <div className="bd-item"><span>Days Off</span> <strong>{attendanceData.breakdown.daysOff}</strong></div>
                                            </div>
                                            <div className="breakdown-col col-purple">
                                                <div className="bd-item"><span>Privileged Leave</span> <strong>{attendanceData.breakdown.privilegedLeave}</strong></div>
                                                <div className="bd-item"><span>Sick Leave</span> <strong>{attendanceData.breakdown.sickLeave}</strong></div>
                                                <div className="bd-item"><span>Casual Leave</span> <strong>{attendanceData.breakdown.casualLeave}</strong></div>
                                                <div className="bd-item"><span>0.5 Day</span> <strong>{attendanceData.breakdown.halfDayLeave}</strong></div>
                                                <div className="bd-item"><span>Paid Leaves</span> <strong>{attendanceData.breakdown.paidLeaves}</strong></div>
                                            </div>
                                            <div className="breakdown-col col-green">
                                                <div className="bd-item"><span>Full Present</span> <strong>{attendanceData.breakdown.fullPresent}</strong></div>
                                                <div className="bd-item"><span>Double Present</span> <strong>{attendanceData.breakdown.doublePresent}</strong></div>
                                                <div className="bd-item"><span>Half Day</span> <strong>{attendanceData.breakdown.halfDay}</strong></div>
                                                <div className="bd-item"><span>Worked On</span> <strong>{attendanceData.breakdown.workedOnManual}</strong></div>
                                                <div className="bd-item"><span>Total Working</span> <strong>{attendanceData.breakdown.totalWorking}</strong></div>
                                            </div>
                                            <div className="breakdown-col col-red">
                                                <div className="bd-item"><span>Unpaid Leave</span> <strong>{attendanceData.breakdown.unpaidLeave}</strong></div>
                                                <div className="bd-item"><span>Absent</span> <strong>{attendanceData.breakdown.absentManual}</strong></div>
                                            </div>
                                            <div className="payable-summary-box">
                                                <div className="days-number">{attendanceData.payable}</div>
                                                <div className="days-label">Payable Days</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. FOOTER BUTTONS */}
                <div className="payroll-wizard-footer">
                    <button type="button" className="footer-cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
                    <div className="footer-right-btns">
                        <button type="button" className="footer-print-btn"><Printer size={16} /> Print</button>
                        <button 
                            type="button" 
                            className="footer-next-btn"
                            onClick={() => navigate(`/employee/payroll/verify-salary/${employee.id || 1}`, { state: { employee } })}
                        >
                            Next: Verify Salary
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChevronDown = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6"/>
    </svg>
);

export default EmployeeVerifyAttendancePage;
