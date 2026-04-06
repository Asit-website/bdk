import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, Download, RotateCw, Send, X } from 'lucide-react';
import RequestDetailsModal from '../components/RequestDetailsModal';
import './EmployeeProfilePage.css';

const EmployeeProfilePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [calendarMonth, setCalendarMonth] = useState(2);
    const [calendarYear, setCalendarYear] = useState(2026);
    const [selectedDate, setSelectedDate] = useState(18);
    const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const selectedDay = 18;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const employee = location.state?.employee || {
        id: 1,
        name: 'SUDHIR MURMU',
        mobile: '1234567890',
        address: 'Krishnasol, Mayta, Paschim Medinipur',
        designation: 'Godown Manager',
        shift: 'General',
    };

    const fromPath = location.state?.from || '/employee/attendance';

    const dayCells = useMemo(() => {
        const highlightStatuses = {
            1: 'absent',
            2: 'present',
            3: 'present',
            4: 'present',
            5: 'unpaid',
            6: 'present',
            7: 'present',
            8: 'holiday',
            9: 'present',
            10: 'present',
            11: 'paid',
            12: 'present',
            13: 'half',
            14: 'absent',
            15: 'present',
            16: 'unpaid',
            17: 'present',
            18: 'present',
        };

        const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
        const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();

        const leadingBlankCells = Array.from({ length: firstDayIndex }, () => ({
            day: null,
            status: 'empty',
        }));

        const monthDays = Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const status = calendarYear === 2026 && calendarMonth === 2
                ? (highlightStatuses[day] || 'empty')
                : 'empty';

            return { day, status };
        });

        const filledCellCount = leadingBlankCells.length + monthDays.length;
        const trailingCellCount = (7 - (filledCellCount % 7)) % 7;
        const trailingBlankCells = Array.from({ length: trailingCellCount }, () => ({
            day: null,
            status: 'empty',
        }));

        return [...leadingBlankCells, ...monthDays, ...trailingBlankCells];
    }, [calendarMonth, calendarYear]);

    const handlePrevMonth = () => {
        setCalendarMonth((prevMonth) => {
            if (prevMonth === 0) {
                setCalendarYear((prevYear) => prevYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    };

    const handleNextMonth = () => {
        setCalendarMonth((prevMonth) => {
            if (prevMonth === 11) {
                setCalendarYear((prevYear) => prevYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    };

    const handleDateClick = (day) => {
        if (!day) return;
        setSelectedDate(day);
        setIsEditDrawerOpen(true);
    };

    const summary = [
        { label: 'Present', count: 11, tone: 'present' },
        { label: 'Absent', count: 2, tone: 'absent' },
        { label: 'Half Day', count: 1, tone: 'half' },
        { label: 'Unpaid Leave', count: 1, tone: 'unpaid' },
        { label: 'Paid Leave', count: 2, tone: 'paid' },
        { label: 'Holiday', count: 1, tone: 'holiday' },
    ];

    return (
        <div className="page-container employee-profile-page">
            <div className="employee-profile-shell">
                <div className="employee-profile-topbar">
                    <button
                        type="button"
                        className="employee-back-btn"
                        onClick={() => navigate(fromPath)}
                    >
                        Back
                    </button>
                    <button type="button" className="employee-download-btn">
                        <Download size={15} /> Download Report
                    </button>
                </div>

                <div className="employee-profile-main">
                    <div className="employee-calendar-panel">
                        <div className="employee-profile-header">
                            <span className="employee-profile-avatar" />
                            <span className="employee-profile-name">{employee.name}</span>
                            <ChevronDown size={18} color="#9ca3af" />
                        </div>

                        <div className="employee-calendar-box">
                            <div className="employee-calendar-toolbar">
                                <button type="button" className="month-nav-btn" onClick={handlePrevMonth}><ChevronLeft size={16} /></button>
                                <div className="month-selector">{selectedDay} {monthNames[calendarMonth]}</div>
                                <div className="year-selector">{calendarYear}</div>
                                <button type="button" className="month-nav-btn" onClick={handleNextMonth}><ChevronRight size={16} /></button>
                            </div>

                            <div className="employee-days-head">
                                <span>Sun</span>
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                            </div>

                            <div className="employee-days-grid">
                                {dayCells.map((item, index) => (
                                    <button
                                        key={`${item.day || 'blank'}-${index}`}
                                        type="button"
                                        className={`employee-day-chip status-${item.status} ${item.day ? 'clickable' : 'blank'}`}
                                        onClick={() => handleDateClick(item.day)}
                                        disabled={!item.day}
                                    >
                                        {item.day ? String(item.day).padStart(2, '0') : ''}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="employee-right-panel">
                        <div className="employee-time-card">
                            <div><span>First In Time</span><strong>08:30 AM</strong></div>
                            <div><span>Last Out Time</span><strong>08:30 PM</strong></div>
                            <div><span>Work Hours</span><strong>11:45</strong></div>
                        </div>

                        <div className="employee-attendance-card">
                            <h4>Attendance</h4>
                            <div className="employee-attendance-legend">
                                {summary.map((item) => (
                                    <div key={item.label} className="legend-item">
                                        <span className={`legend-count legend-${item.tone}`}>{item.count}</span>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="employee-request-card">
                            <h4>Request</h4>
                            <button
                                type="button"
                                className="request-row"
                                onClick={() => setIsRequestModalOpen(true)}
                            >
                                <span className="employee-profile-avatar small" />
                                <div>
                                    <div className="request-name">{employee.name}</div>
                                    <div className="request-meta">18 June 2026 | 1 Day</div>
                                </div>
                            </button>
                        </div>

                        <div className="employee-message-card">
                            <h4>Message</h4>
                            <div className="chat-bubble left">Ami ajke punch korte vule gechi</div>
                            <div className="chat-bubble right">Okay</div>
                            <div className="chat-bubble right">Done</div>
                            <div className="chat-input-row">
                                <input type="text" placeholder="Type a message" />
                                <button type="button"><Send size={14} /></button>
                            </div>
                        </div>
                    </aside>
                </div>

                <div
                    className={`employee-edit-overlay ${isEditDrawerOpen ? 'open' : ''}`}
                    onClick={() => setIsEditDrawerOpen(false)}
                >
                    <div
                        className={`employee-edit-drawer ${isEditDrawerOpen ? 'open' : ''}`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="employee-edit-header">
                            <h3>Edit Attendance : {employee.name}</h3>
                            <button type="button" onClick={() => setIsEditDrawerOpen(false)}>
                                <X size={16} />
                            </button>
                        </div>

                        <div className="employee-edit-date-row">
                            <strong>{selectedDate} {monthNames[calendarMonth]}</strong>
                            <button type="button" className="refresh-mini-btn"><RotateCw size={14} /></button>
                        </div>

                        <div className="employee-tag-group">
                            <span className="employee-tag absent">ABSENT</span>
                            <span className="employee-tag half">HALF DAY</span>
                            <span className="employee-tag present">PRESENT</span>
                            <span className="employee-tag weekoff">WEEK OFF</span>
                            <span className="employee-tag holiday">HOLIDAY</span>
                        </div>

                        <div className="employee-divider" />

                        <div className="employee-edit-subtitle">Leaves</div>
                        <div className="employee-tag-group leaves">
                            <span className="employee-tag paid-leave">PAID LEAVE</span>
                            <span className="employee-tag half-leave">HALF DAY LEAVE</span>
                            <span className="employee-tag unpaid-leave">UNPAID LEAVE</span>
                        </div>

                        <div className="employee-divider" />

                        <div className="employee-punch-log">
                            <div className="punch-row">
                                <span className="employee-profile-avatar small" />
                                <div className="punch-body">
                                    <div className="punch-time">8.30AM <span className="in">IN</span></div>
                                    <div className="punch-address">W726+3M8, Bhandirban, West Bengal 722149, India</div>
                                </div>
                                <span className="punch-shift">General Shift</span>
                            </div>
                            <div className="punch-row">
                                <span className="employee-profile-avatar small" />
                                <div className="punch-body">
                                    <div className="punch-time">8.30PM <span className="out">OUT</span></div>
                                    <div className="punch-address">W726+3M8, Bhandirban, West Bengal 722149, India</div>
                                </div>
                                <span className="punch-shift">General Shift</span>
                            </div>
                        </div>

                        <div className="employee-edit-links">
                            <button type="button">+ ADD PUNCHOUT</button>
                            <button type="button">+ ADD BREAK START</button>
                        </div>

                        <textarea className="employee-edit-note" placeholder="Add Note" rows={3} />
                    </div>
                </div>

                <RequestDetailsModal
                    isOpen={isRequestModalOpen}
                    onClose={() => setIsRequestModalOpen(false)}
                    employeeName={employee.name}
                />
            </div>
        </div>
    );
};

export default EmployeeProfilePage;