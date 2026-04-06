import React, { useEffect, useMemo, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import './PayrollAttendanceModal.css';

const calendarDays = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
];

const PayrollAttendanceModal = ({ isOpen, onClose, row }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const normalizedName = useMemo(() => {
        if (!row?.name) return 'BABURAM HEMROM';
        return row.name
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }, [row]);

    if (!isOpen) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => onClose(), 220);
    };

    return (
        <div className={`payroll-attendance-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
            <div
                className={`payroll-attendance-modal ${isClosing ? 'scale-down' : 'scale-up'}`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="payroll-attendance-head">
                    <h3>Edit Attendance : {normalizedName}</h3>
                    <button type="button" onClick={handleClose} aria-label="Close">
                        <X size={14} />
                    </button>
                </div>

                <div className="payroll-attendance-body">
                    <section className="attendance-left-pane">
                        <div className="attendance-stat-grid">
                            <div className="attendance-stat-card present"><span>Present</span><strong>23</strong></div>
                            <div className="attendance-stat-card absent"><span>Absent</span><strong>4</strong></div>
                            <div className="attendance-stat-card half"><span>Half day</span><strong>1</strong></div>
                            <div className="attendance-stat-card leave"><span>Paid Leave</span><strong>0.0</strong></div>
                            <div className="attendance-stat-card weekoff"><span>Week Off</span><strong>0</strong></div>
                        </div>

                        <div className="attendance-mini-calendar">
                            <div className="calendar-week-head">
                                <span>Su</span>
                                <span>Mo</span>
                                <span>Tu</span>
                                <span>We</span>
                                <span>Th</span>
                                <span>Fr</span>
                                <span>Sa</span>
                            </div>
                            <div className="calendar-grid">
                                {calendarDays.map((day) => (
                                    <span
                                        key={day}
                                        className={`calendar-day-chip ${day === 4 ? 'red' : day === 6 ? 'amber' : day === 26 ? 'danger' : 'green'}`}
                                    >
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="attendance-right-pane">
                        <div className="attendance-date-row">
                            <strong>1st February</strong>
                            <div className="attendance-pill-group">
                                <span className="attendance-pill red">Absent</span>
                                <span className="attendance-pill amber">Half Day</span>
                                <span className="attendance-pill green">Present</span>
                                <span className="attendance-pill gray">Week Off</span>
                                <span className="attendance-pill gray">Holiday</span>
                            </div>
                        </div>

                        <div className="attendance-leave-row">
                            <span className="attendance-row-title">Leaves</span>
                            <div className="attendance-pill-group">
                                <span className="attendance-pill purple">Paid Leave</span>
                                <span className="attendance-pill purple">Half Day Leave</span>
                                <span className="attendance-pill blue">Unpaid Leave</span>
                            </div>
                        </div>

                        <div className="attendance-punch-list">
                            <div className="attendance-punch-item">
                                <span className="avatar-dot" />
                                <div className="attendance-punch-meta">
                                    <strong>09:06 AM - In</strong>
                                    <span>W726+3M, Bhandirban, West Bengal 722149, India</span>
                                </div>
                                <em>No Shift</em>
                            </div>
                            <div className="attendance-punch-item">
                                <span className="avatar-dot" />
                                <div className="attendance-punch-meta">
                                    <strong>08:33 PM - Out</strong>
                                    <span>W726+3M, Bhandirban, West Bengal 722149, India</span>
                                </div>
                                <em>No Shift</em>
                            </div>
                        </div>

                        <div className="attendance-add-links">
                            <button type="button">+ ADD PUNCHIN</button>
                            <button type="button">+ ADD PUNCHOUT</button>
                        </div>

                        <textarea placeholder="Add Note" rows={3} />
                    </section>
                </div>

                <button type="button" className="attendance-chat-fab" aria-label="Open chat">
                    <MessageSquare size={14} />
                </button>
            </div>
        </div>
    );
};

export default PayrollAttendanceModal;
