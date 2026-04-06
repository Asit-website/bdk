import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    ChevronLeft, Download, Wallet, BadgePercent, Banknote,
    Gift, Timer, PlusCircle, AlertCircle, Clock,
    MinusCircle, Landmark, ChevronRight
} from 'lucide-react';
import SalaryDetailDrawer from '../components/SalaryDetailDrawer';
import OvertimeDetailDrawer from '../components/OvertimeDetailDrawer';
import EarlyFineDetailDrawer from '../components/EarlyFineDetailDrawer';
import LateFineDetailDrawer from '../components/LateFineDetailDrawer';
import LoanDetailDrawer from '../components/LoanDetailDrawer';
import './EmployeeSalaryProfilePage.css';

const historyData = [
    { month: 'Mar 2026', finalized: 'No', ctc: '3,000.00 /day', payables: '-', total: '-', paid: '-', pending: '-', shared: '-' },
    { month: 'Feb 2026', finalized: 'No', ctc: '3,000.00 /day', payables: '-', total: '-', paid: '-', pending: '-', shared: '-' },
    { month: 'Jan 2026', finalized: 'No', ctc: '3,000.00 /day', payables: '-', total: '-', paid: '-', pending: '-', shared: '-' },
    { month: 'Dec 2025', finalized: 'No', ctc: '3,000.00 /day', payables: '-', total: '-', paid: '-', pending: '-', shared: '-' },
    { month: 'Nov 2025', finalized: 'No', ctc: '3,000.00 /day', payables: '-', total: '-', paid: '-', pending: '-', shared: '-' },
    { month: 'Oct 2025', finalized: 'Yes', ctc: '3,000.00 /day', payables: '21.0 days', total: '₹ 9,000.00', paid: '₹ 9,000.00', pending: '₹ 0.00', shared: 'Yes' },
];

const EmployeeSalaryProfilePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const [selectedMonth, setSelectedMonth] = useState('2026-02');
    const [drawerConfig, setDrawerConfig] = useState(null);
    const [isOvertimeOpen, setIsOvertimeOpen] = useState(false);
    const [isEarlyFineOpen, setIsEarlyFineOpen] = useState(false);
    const [isLateFineOpen, setIsLateFineOpen] = useState(false);
    const [isLoanOpen, setIsLoanOpen] = useState(false);
    const employee = location.state?.employee || { name: 'BABURAM HEM.', pending: '2,310.57' };

    const formattedMonth = useMemo(() => {
        const [year, month] = selectedMonth.split('-');
        const date = new Date(year, parseInt(month) - 1);
        return date.toLocaleString('default', { month: 'short', year: 'numeric' });
    }, [selectedMonth]);

    const categories = [
        { label: 'Work Basis Pay', icon: Wallet, color: '#10b981' },
        { label: 'Incentives', icon: BadgePercent, color: '#3b82f6' },
        { label: 'Reimbursements', icon: RotateCw, color: '#6366f1' },
        { label: 'Bonus/Wages', icon: Gift, color: '#f59e0b' },
        { label: 'Overtime Pay', icon: Timer, color: '#8b5cf6' },
        { label: 'Other Earnings', icon: PlusCircle, color: '#10b981' },
        { label: 'Early Fine', icon: AlertCircle, color: '#ef4444' },
        { label: 'Late Fine', icon: Clock, color: '#f97316' },
        { label: 'Deductions', icon: MinusCircle, color: '#ef4444' },
        { label: 'Loans', icon: Landmark, color: '#3b82f6' },
    ];

    return (
        <div className="page-container employee-salary-page">
            <div className="salary-profile-shell">
                <div className="salary-profile-topbar">
                    <button type="button" className="back-link-btn" onClick={() => navigate('/employee/payroll')}>
                        <ChevronLeft size={16} /> Employee Salary
                    </button>
                </div>

                <div className="salary-profile-header">
                    <div className="salary-header-left">
                        <div className="employee-avatar-large"></div>
                        <div className="employee-info-main">
                            {/* Link current name to Verify Attendance Page */}
                            <h1
                                style={{ cursor: 'pointer', color: '#1e293b' }}
                                onClick={() => navigate(`/employee/payroll/verify-attendance/${id || 1}`, { state: { employee } })}
                            >
                                {employee.name}
                            </h1>
                        </div>
                    </div>

                    <div className="salary-header-right">
                        <div className="pending-status-card">
                            <div className="pending-label-row">
                                <span className="pending-label">Salary Pending for</span>
                                <div className="month-picker-inline">
                                    <span>{formattedMonth}</span>
                                    <input
                                        type="month"
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="pending-amount-row">
                                <strong className="pending-amount">₹ {employee.pending}</strong>
                                <button type="button" className="finalize-link">Finalize Now</button>
                            </div>
                        </div>
                        <div className="salary-header-actions">
                            <button type="button" className="action-btn1 pay-salary">Pay Salary</button>
                            <button type="button" className="action-btn1 pay-advance">Pay Advance</button>
                            <button type="button" className="action-btn1 salary-slip">Salary Slip</button>
                        </div>
                    </div>
                </div>

                <div className="salary-categories-grid">
                    {categories.map((cat, idx) => {
                        const IconComp = cat.icon;
                        return (
                            <div
                                key={idx}
                                className="category-card"
                                onClick={() => {
                                    const configs = {
                                        'Work Basis Pay': {
                                            title: 'Work Basis Pay',
                                            amount: '0.00',
                                            emptyMessage: 'No Work Basis Pay added',
                                            addLabel: '+ Add Work Basis Pay'
                                        },
                                        'Incentives': {
                                            title: 'Incentives',
                                            amount: '0.00',
                                            emptyMessage: 'No Incentives added',
                                            addLabel: '+ Add Incentive'
                                        },
                                        'Reimbursements': {
                                            title: 'Reimbursements',
                                            amount: '0.00',
                                            emptyMessage: 'No Reimbursements added',
                                            addLabel: '+ Add Reimbursement'
                                        },
                                        'Bonus/Wages': {
                                            title: 'Bonus',
                                            amount: '0.00',
                                            emptyMessage: 'No Bonus added',
                                            addLabel: '+ Add Bonus'
                                        },
                                        'Other Earnings': {
                                            title: 'Other Earnings',
                                            amount: '0.00',
                                            emptyMessage: 'No Other Earnings added',
                                            addLabel: '+ Add Other Earning'
                                        },
                                        'Deductions': {
                                            title: 'Other Deductions',
                                            amount: '0.00',
                                            emptyMessage: 'No Other Deductions added',
                                            addLabel: '+ Add Other Deduction'
                                        }
                                    };
                                    if (cat.label === 'Overtime Pay') {
                                        setIsOvertimeOpen(true);
                                    } else if (cat.label === 'Early Fine') {
                                        setIsEarlyFineOpen(true);
                                    } else if (cat.label === 'Late Fine') {
                                        setIsLateFineOpen(true);
                                    } else if (cat.label === 'Loans') {
                                        setIsLoanOpen(true);
                                    } else if (configs[cat.label]) {
                                        setDrawerConfig(configs[cat.label]);
                                    }
                                }}
                            >
                                <div className="category-icon-wrap" style={{ color: cat.color }}>
                                    <IconComp size={20} />
                                </div>
                                <span className="category-label">{cat.label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="salary-history-section">
                    <div className="section-head-row">
                        <h3>History</h3>
                        <div className="head-actions">
                            <div className="toggle-wrap">
                                <input type="checkbox" id="breakdown-toggle" />
                                <label htmlFor="breakdown-toggle">Show Salary Breakdown</label>
                            </div>
                            <button type="button" className="download-report-btn">
                                <Download size={14} /> Download Report
                            </button>
                        </div>
                    </div>

                    <div className="history-table-wrap">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Payroll Finalized</th>
                                    <th>CTC</th>
                                    <th>Payables</th>
                                    <th>Total Salary</th>
                                    <th>Paid</th>
                                    <th>Pending</th>
                                    <th>Slip Shared</th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.map((row, idx) => (
                                    <tr key={idx}>
                                        <td>{row.month}</td>
                                        <td>{row.finalized}</td>
                                        <td>{row.ctc}</td>
                                        <td>{row.payables}</td>
                                        <td>{row.total}</td>
                                        <td>{row.paid}</td>
                                        <td>{row.pending}</td>
                                        <td>{row.shared}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="table-footer-actions">
                        <button type="button" className="show-more-btn">Show More</button>
                    </div>
                </div>
            </div>

            <SalaryDetailDrawer
                isOpen={!!drawerConfig}
                onClose={() => setDrawerConfig(null)}
                employee={employee}
                month={formattedMonth}
                {...drawerConfig}
            />

            <OvertimeDetailDrawer
                isOpen={isOvertimeOpen}
                onClose={() => setIsOvertimeOpen(false)}
                employee={employee}
                month={formattedMonth}
            />

            <EarlyFineDetailDrawer
                isOpen={isEarlyFineOpen}
                onClose={() => setIsEarlyFineOpen(false)}
                employee={employee}
                month={formattedMonth}
            />

            <LateFineDetailDrawer
                isOpen={isLateFineOpen}
                onClose={() => setIsLateFineOpen(false)}
                employee={employee}
                month={formattedMonth}
            />

            <LoanDetailDrawer
                isOpen={isLoanOpen}
                onClose={() => setIsLoanOpen(false)}
                month={formattedMonth}
            />
        </div>
    );
};

const RotateCw = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
    </svg>
);

export default EmployeeSalaryProfilePage;
