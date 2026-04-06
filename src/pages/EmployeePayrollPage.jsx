import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Filter, ListFilter, MoreVertical, Search } from 'lucide-react';
import '../components/LeadTable.css';
import PayrollAttendanceModal from '../components/PayrollAttendanceModal';
import SalaryBreakdownModal from '../components/SalaryBreakdownModal';
import PayrollPaidHistoryModal from '../components/PayrollPaidHistoryModal';
import './EmployeePayrollPage.css';

const payrollRows = [
    { id: 1, name: 'BABURAM HEM.', title: '', finalized: 'No', ctc: '9,00,000 /month', payables: '23.5 days', total: '7,553.57', paid: '5,243.00', pending: '2,310.57' },
    { id: 2, name: 'BHADU SAREN', title: '', finalized: 'No', ctc: '3,000.00 /day', payables: '23.5 days', total: '6,858.16', paid: '4,732.00', pending: '2,126.17' },
    { id: 3, name: 'CHANDAN MAN.', title: '', finalized: 'No', ctc: '3,000.00 /day', payables: '5.5 days', total: '1,650.00', paid: '940.00', pending: '710.00' },
    { id: 4, name: 'CHANDI PATRA', title: '', finalized: 'No', ctc: '3,000.00 /day', payables: '27.0 days', total: '7,860.89', paid: '3,120.00', pending: '4,740.89' },
    { id: 5, name: 'DIPU DULE', title: '', finalized: 'No', ctc: '6,500.00 /month', payables: '21.0 days', total: '4,771.17', paid: '2,200.00', pending: '2,571.17' },
    { id: 6, name: 'KHOKAN MURMU', title: '', finalized: 'No', ctc: '3,000.00 /day', payables: '25.0 days', total: '7,500.00', paid: '3,000.00', pending: '4,500.00' },
    { id: 7, name: 'KUSH PATRA', title: '', finalized: 'No', ctc: '3,000.00 /day', payables: '19.5 days', total: '5,510.36', paid: '5,935.00', pending: '-424.64' },
    { id: 8, name: 'RAJIB MANDI', title: '', finalized: 'No', ctc: '3,000.00 /day', payables: '17.5 days', total: '5,059.55', paid: '4,480.00', pending: '579.55' },
    { id: 9, name: 'SANDIP SINGH', title: '', finalized: 'No', ctc: '10,000.00 /month', payables: '19.0 days', total: '6,671.68', paid: '3,000.00', pending: '3,671.68' },
    { id: 10, name: 'SERMA HEMROM', title: '', finalized: 'No', ctc: '15,000.00 /month', payables: '23.0 days', total: '4,107.14', paid: '1,500.00', pending: '2,607.14' },
    { id: 11, name: 'SOMNATH MURMU', title: '', finalized: 'No', ctc: '10,000.00 /month', payables: '22.5 days', total: '6,653.09', paid: '2,000.00', pending: '4,653.09' },
    { id: 12, name: 'Sudhir Murmu', title: 'GODOWN MANAGER', finalized: 'No', ctc: '13,000.00 /month', payables: '22.0 days', total: '9,706.21', paid: '21,800.00', pending: '-12,093.79' },
    { id: 13, name: 'SUJOY HANSDA', title: '', finalized: 'No', ctc: '7,200.00 /month', payables: '26.0 days', total: '5,500.00', paid: '4,550.00', pending: '1,950.00' },
    { id: 14, name: 'SWARUP NAG', title: '', finalized: 'No', ctc: 'Not Set', payables: '7.0 days', total: '0.00', paid: '3,000.00', pending: '-3,000.00' },
    { id: 15, name: 'Utpal Makur', title: '', finalized: 'No', ctc: '5,000.00 /day', payables: '26.0 days', total: '10,915.66', paid: '15,475.00', pending: '-4,559.34' },
];

const EmployeePayrollPage = () => {
    const navigate = useNavigate();
    const [openActionId, setOpenActionId] = useState(null);
    const [actionAnchor, setActionAnchor] = useState(null);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [selectedPayableRow, setSelectedPayableRow] = useState(null);
    const [selectedBreakdownRow, setSelectedBreakdownRow] = useState(null);
    const [selectedPaidHistoryRow, setSelectedPaidHistoryRow] = useState(null);

    const allSelected = selectedRowIds.length === payrollRows.length;

    const toggleSelectAll = (checked) => {
        if (checked) {
            setSelectedRowIds(payrollRows.map((row) => row.id));
        } else {
            setSelectedRowIds([]);
        }
    };

    const toggleSelectRow = (rowId, checked) => {
        if (checked) {
            setSelectedRowIds((prev) => (prev.includes(rowId) ? prev : [...prev, rowId]));
            return;
        }
        setSelectedRowIds((prev) => prev.filter((id) => id !== rowId));
    };

    const getMenuPosition = (anchorRect, menuHeight, menuWidth) => {
        if (!anchorRect) return null;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const spaceBelow = viewportHeight - anchorRect.bottom;
        const openAbove = spaceBelow < menuHeight + 12;

        const top = openAbove
            ? Math.max(anchorRect.top - menuHeight - 8, 12)
            : anchorRect.bottom + 8;

        let left = anchorRect.right - menuWidth;
        left = Math.min(Math.max(left, 12), viewportWidth - menuWidth - 12);
        return { top, left };
    };

    useEffect(() => {
        const handleClose = (event) => {
            if (event.target.closest('.service-action-wrap')) return;
            if (event.target.closest('.service-action-menu')) return;
            setOpenActionId(null);
        };

        const handleScroll = () => setOpenActionId(null);

        window.addEventListener('click', handleClose);
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('click', handleClose);
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className="page-container employee-payroll-page">
            <div className="employee-payroll-shell">
                <aside className="payroll-filter-panel">
                    <div className="payroll-filter-head">
                        <h3>Run Payroll</h3>
                    </div>

                    <div className="payroll-filter-controls">
                        <button type="button" className="payroll-filter-icon-btn" aria-label="Filter options">
                            <ListFilter size={13} />
                        </button>
                        <button type="button" className="payroll-reset-btn">Reset</button>
                    </div>

                    <div className="payroll-filter-group">
                        <label>Payroll Month</label>
                        <div className="payroll-month-picker-wrap">
                            <input
                                type="month"
                                defaultValue="2026-02"
                                className="payroll-month-picker"
                            />
                        </div>
                    </div>

                    <div className="payroll-filter-group">
                        <label>Salary Type</label>
                        <div className="payroll-select-wrap">
                            <select><option>All Salary Type</option></select>
                            <ChevronDown size={14} />
                        </div>
                    </div>

                    <div className="payroll-filter-group">
                        <label>Company Branches</label>
                        <div className="payroll-select-wrap">
                            <select><option>All Branches</option></select>
                            <ChevronDown size={14} />
                        </div>
                    </div>

                    <div className="payroll-filter-group">
                        <label>Departments</label>
                        <div className="payroll-select-wrap">
                            <select><option>All Departments</option></select>
                            <ChevronDown size={14} />
                        </div>
                    </div>

                    <div className="payroll-filter-group">
                        <label>Date of Joining</label>
                        <div className="payroll-date-grid">
                            <input type="date" defaultValue="2026-02-01" />
                            <input type="date" defaultValue="2026-02-28" />
                        </div>
                    </div>

                    <div className="payroll-filter-group">
                        <label>Date of Leaving</label>
                        <div className="payroll-date-grid">
                            <input type="date" />
                            <input type="date" />
                        </div>
                    </div>

                    <label className="payroll-inactive-check">
                        <input type="checkbox" defaultChecked />
                        Show inactive staff
                    </label>
                </aside>

                <section className="payroll-main-panel">
                    <div className="payroll-toolbar-row">
                        <div className="payroll-action-strip">
                            <button type="button">Salary Sheet</button>
                            <button type="button">Finalize Payroll</button>
                            <button type="button">Save Payment</button>
                            <button type="button">Pay Online</button>
                            <button type="button">Pay Slips</button>
                        </div>
                        <label className="payroll-breakdown-check">
                            <input type="checkbox" /> Show Salary Breakdown
                        </label>
                    </div>

                    <div className="payroll-search-row">
                        <div className="payroll-search-box">
                            <Search size={13} />
                            <input type="text" placeholder="Search Staff" />
                        </div>
                        <div className="payroll-meta-note">Showing 15 staff <button type="button">Reset Filters</button></div>
                    </div>

                    <div className="table-wrapper payroll-table-wrap">
                        <table className="lead-table payroll-table">
                            <thead>
                                <tr>
                                    <th className="payroll-checkbox-col">
                                        <input
                                            type="checkbox"
                                            checked={allSelected}
                                            onChange={(event) => toggleSelectAll(event.target.checked)}
                                            aria-label="Select all rows"
                                        />
                                    </th>
                                    <th><span className="payroll-th-with-filter">Name <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">Job Title <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">Payroll Finalized <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">CTC <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">Payables <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">Total Salary <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">Paid <Filter size={11} /></span></th>
                                    <th><span className="payroll-th-with-filter">Pending <Filter size={11} /></span></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {payrollRows.map((row) => (
                                    <tr key={row.id}>
                                        <td className="payroll-checkbox-col">
                                            <input
                                                type="checkbox"
                                                checked={selectedRowIds.includes(row.id)}
                                                onChange={(event) => toggleSelectRow(row.id, event.target.checked)}
                                                aria-label={`Select ${row.name}`}
                                            />
                                        </td>
                                        <td>
                                            <button 
                                                type="button" 
                                                className="employee-name-link"
                                                onClick={() => navigate(`/employee/payroll/salary/${row.id}`, { state: { employee: row, from: '/employee/payroll' } })}
                                            >
                                                {row.name}
                                            </button>
                                        </td>
                                        <td>{row.title || '-'}</td>
                                        <td>{row.finalized}</td>
                                        <td>{row.ctc}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="payroll-payable-btn"
                                                onClick={() => setSelectedPayableRow(row)}
                                            >
                                                {row.payables}
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="payroll-total-btn"
                                                onClick={() => setSelectedBreakdownRow(row)}
                                            >
                                                {row.total}
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="payroll-total-btn"
                                                onClick={() => setSelectedPaidHistoryRow(row)}
                                            >
                                                {row.paid}
                                            </button>
                                        </td>
                                        <td>{row.pending}</td>
                                        <td className="action-cell">
                                            <div className="service-action-wrap">
                                                <button
                                                    type="button"
                                                    className={`action-dots ${openActionId === row.id ? 'active' : ''}`}
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setOpenActionId(openActionId === row.id ? null : row.id);
                                                        setActionAnchor(event.currentTarget.getBoundingClientRect());
                                                    }}
                                                >
                                                    <MoreVertical size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {openActionId && actionAnchor && createPortal(
                <div
                    className="service-action-menu"
                    style={{ position: 'fixed', ...(getMenuPosition(actionAnchor, 180, 160) || {}) }}
                >
                    <button type="button" className="service-action-item">View / Edit</button>
                    <button type="button" className="service-action-item">Print</button>
                    <button type="button" className="service-action-item">View Pay Slip</button>
                    <button type="button" className="service-action-item">History</button>
                    <button type="button" className="service-action-item">Share</button>
                </div>,
                document.body
            )}

            <PayrollAttendanceModal
                isOpen={Boolean(selectedPayableRow)}
                onClose={() => setSelectedPayableRow(null)}
                row={selectedPayableRow}
            />

            <SalaryBreakdownModal
                isOpen={Boolean(selectedBreakdownRow)}
                onClose={() => setSelectedBreakdownRow(null)}
                row={selectedBreakdownRow}
            />

            <PayrollPaidHistoryModal
                isOpen={Boolean(selectedPaidHistoryRow)}
                onClose={() => setSelectedPaidHistoryRow(null)}
                row={selectedPaidHistoryRow}
            />
        </div>
    );
};

export default EmployeePayrollPage;
