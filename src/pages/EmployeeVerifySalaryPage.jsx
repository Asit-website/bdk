import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
    ChevronLeft, Search, Printer, CheckCircle2, MoreVertical, Edit2
} from 'lucide-react';
import './EmployeeVerifySalaryPage.css';

const EmployeeVerifySalaryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const employee = location.state?.employee || { id: 1, name: 'BHADU SAREN', pending: '2,126.16' };
    
    // Detailed salary data (mock based on SS2)
    const salaryData = {
        employeeId: 'EMP001',
        name: employee.name,
        payableDays: '23.5',
        ctcDay: '300.00',
        payableAmount: '6,858.16',
        paid: '4,732.00',
        remaining: '2,126.16',
        earnings: {
            basic: '7,050.00',
            bonus: '0.00',
            overtime: '0.00',
            otherEarnings: '0.00',
            incentive: '0.00',
            workBasis: '0.00',
            reimbursement: '0.00',
            total: '7,050.00'
        },
        deductions: {
            loanDebit: '0',
            earlyLeaveFine: '0',
            lateComingFine: '191.84',
            tds: '0.00',
            otherDeductions: '0.00',
            total: '191.84'
        }
    };

    return (
        <div className="page-container employee-payroll-salary-verify-page">
            {/* 1. WIZARD BANNER */}
            <div className="payroll-wizard-banner">
                <div className="wizard-banner-content">
                    <button type="button" className="wizard-back-btn" onClick={() => navigate(-1)}>
                        <ChevronLeft size={16} /> Employee Salary
                    </button>
                    
                    <div className="payroll-stepper">
                        <div className="step completed">
                            <span className="step-check"><CheckCircle2 size={16} /></span>
                            <span className="step-label">Attendance</span>
                        </div>
                        <div className="step-line active"></div>
                        <div className="step active">
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

            {/* 2. MAIN CONTENT - VERIFY SALARY */}
            <div className="payroll-detail-container">
                <div className="verify-salary-section">
                    <h2 className="section-title">Verify Salary</h2>
                    
                    <div className="verify-search-row">
                        <div className="verify-search-box">
                            <Search size={14} />
                            <input type="text" placeholder="Search by person name" />
                        </div>
                    </div>

                    <div className="salary-table-wrap">
                        <table className="salary-main-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                    <th>EMP ID</th>
                                    <th>NAME</th>
                                    <th>PAYABLE DAYS</th>
                                    <th>CTC / DAY</th>
                                    <th>PAYABLE AMOUNT</th>
                                    <th>PAID</th>
                                    <th>REMAINING</th>
                                    <th style={{ width: '80px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="employee-main-row active">
                                    <td><input type="checkbox" defaultChecked /></td>
                                    <td>
                                        <div className="emp-id-cell">
                                            <div className="small-avatar"></div>
                                            {salaryData.employeeId}
                                        </div>
                                    </td>
                                    <td className="emp-name-cell">{salaryData.name}</td>
                                    <td>{salaryData.payableDays}</td>
                                    <td>{salaryData.ctcDay}</td>
                                    <td>{salaryData.payableAmount}</td>
                                    <td>{salaryData.paid}</td>
                                    <td className="emp-remaining-cell">{salaryData.remaining}</td>
                                    <td>
                                        <button type="button" className="row-edit-btn"><Edit2 size={12} /> EDIT <ChevronDown size={12} /></button>
                                    </td>
                                </tr>
                                <tr className="salary-expand-row">
                                    <td colSpan="9">
                                        <div className="salary-breakdown-container">
                                            {/* Earnings Column */}
                                            <div className="breakdown-box earnings-box">
                                                <div className="box-header">Earnings <span className="box-total">{salaryData.earnings.total}</span></div>
                                                <div className="box-content">
                                                    <div className="bd-row"><span>Basic</span> <strong>{salaryData.earnings.basic}</strong></div>
                                                    <div className="bd-row"><span>Bonus</span> <strong>{salaryData.earnings.bonus}</strong></div>
                                                    <div className="bd-row"><span>Overtime</span> <strong>{salaryData.earnings.overtime}</strong></div>
                                                    <div className="bd-row"><span>Other Earnings</span> <strong>{salaryData.earnings.otherEarnings}</strong></div>
                                                    <div className="bd-row"><span>Incentive</span> <strong>{salaryData.earnings.incentive}</strong></div>
                                                    <div className="bd-row"><span>Work Basis</span> <strong>{salaryData.earnings.workBasis}</strong></div>
                                                    <div className="bd-row"><span>Reimbursement</span> <strong>{salaryData.earnings.reimbursement}</strong></div>
                                                </div>
                                            </div>

                                            {/* Deductions Column */}
                                            <div className="breakdown-box deductions-box">
                                                <div className="box-header">Deductions <span className="box-total">{salaryData.deductions.total}</span></div>
                                                <div className="box-content">
                                                    <div className="bd-row"><span>Loan Debit</span> <strong>{salaryData.deductions.loanDebit}</strong></div>
                                                    <div className="bd-row"><span>Early Leave Fine</span> <strong>{salaryData.deductions.earlyLeaveFine}</strong></div>
                                                    <div className="bd-row"><span>Late Coming Fine</span> <strong>{salaryData.deductions.lateComingFine}</strong></div>
                                                    <div className="bd-row"><span>TDS</span> <strong>{salaryData.deductions.tds}</strong></div>
                                                    <div className="bd-row"><span>Other Deductions</span> <strong>{salaryData.deductions.otherDeductions}</strong></div>
                                                </div>
                                            </div>

                                            {/* Quick Links Column */}
                                            <div className="breakdown-links">
                                                <button className="link-item"><span className="dot purple"></span> Late Fine</button>
                                                <button className="link-item"><span className="dot blue"></span> Overtime Pay</button>
                                                <button className="link-item"><span className="dot light-blue"></span> Early Leaving Fine</button>
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
                        <button type="button" className="footer-back-btn" onClick={() => navigate(-1)}>Back</button>
                        <button type="button" className="footer-finalize-btn" onClick={() => navigate('/employee/payroll')}>Finalize Calculation</button>
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

export default EmployeeVerifySalaryPage;
