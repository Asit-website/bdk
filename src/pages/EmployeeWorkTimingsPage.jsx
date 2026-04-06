import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Minus, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ShiftSelectionModal from '../components/ShiftSelectionModal';
import AddNewShiftModal from '../components/AddNewShiftModal';
import './EmployeeWorkTimingsPage.css';

const EmployeeWorkTimingsPage = () => {
    const navigate = useNavigate();
    const [timingType, setTimingType] = useState('fixed');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [activeDayId, setActiveDayId] = useState(null);
    const [activeDayName, setActiveDayName] = useState('');
    
    const initialDays = [
        { id: 'Mon', label: 'Monday', isWeekoff: false, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
        { id: 'Tue', label: 'Tuesday', isWeekoff: false, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
        { id: 'Wed', label: 'Wednesday', isWeekoff: false, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
        { id: 'Thu', label: 'Thursday', isWeekoff: false, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
        { id: 'Fri', label: 'Friday', isWeekoff: false, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
        { id: 'Sat', label: 'Saturday', isWeekoff: false, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
        { id: 'Sun', label: 'Sunday', isWeekoff: true, shifts: [{ id: 1, availableId: 1, name: 'General Shift', start: '08:30 AM', end: '08:30 PM' }] },
    ];

    const [days, setDays] = useState(initialDays);
    const [globalAvailableShifts, setGlobalAvailableShifts] = useState([
        { id: 1, name: 'General Shift', time: '08:30 AM - 08:30 PM' },
        { id: 2, name: '', time: '10:00 AM - 07:00 PM' },
    ]);

    const toggleWeekoff = (dayId) => {
        setDays(days.map(day => 
            day.id === dayId ? { ...day, isWeekoff: !day.isWeekoff } : day
        ));
    };

    const handleOpenModal = (dayId, dayName) => {
        setActiveDayId(dayId);
        setActiveDayName(dayName);
        setIsModalOpen(true);
    };

    const handleSwitchToAdd = () => {
        setIsModalOpen(false);
        setIsAddModalOpen(true);
    };

    const handleAddNewShift = (newShift) => {
        setGlobalAvailableShifts([...globalAvailableShifts, newShift]);
        setIsAddModalOpen(false);
        setIsModalOpen(true); // Go back to selection after adding
    };

    const handleConfirmShifts = (newShifts) => {
        setDays(days.map(day => {
            if (day.id === activeDayId) {
                return { ...day, shifts: newShifts.length > 0 ? newShifts : day.shifts };
            }
            return day;
        }));
        setIsModalOpen(false);
    };

    const removeShift = (dayId, shiftId) => {
        setDays(days.map(day => {
            if (day.id === dayId && day.shifts.length > 1) {
                return { ...day, shifts: day.shifts.filter(s => s.id !== shiftId) };
            }
            return day;
        }));
    };

    return (
        <div className="page-container">
            <div className="service-dashboard-top mb-16">
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

            <div className="wt-content-card">
                <div className="wt-header">
                    <div className="wt-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/attendance')}>Attendance Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Work Timings</span>
                    </div>
                    <button className="btn-update-details">Update Details</button>
                </div>

                <div className="wt-type-selector">
                    <span className="type-label">Select Type</span>
                    <div className="type-radios">
                        <label className="radio-container">
                            <input 
                                type="radio" 
                                name="timingType" 
                                checked={timingType === 'fixed'} 
                                onChange={() => setTimingType('fixed')}
                            />
                            <span className="radio-mark"></span>
                            Fixed
                        </label>
                        <label className="radio-container">
                            <input 
                                type="radio" 
                                name="timingType" 
                                checked={timingType === 'flexible'} 
                                onChange={() => setTimingType('flexible')}
                            />
                            <span className="radio-mark"></span>
                            Flexible
                        </label>
                    </div>
                </div>

                <div className="wt-table-container">
                    <div className="wt-table-head">
                        <div className="col-day">Day</div>
                        <div className="col-weekoff">Weekoff</div>
                        <div className="col-shifts">Shifts</div>
                    </div>

                    <div className="wt-table-body">
                        {days.map((day) => (
                            <div key={day.id} className={`wt-row ${day.isWeekoff ? 'is-weekoff' : ''}`}>
                                <div className="col-day">
                                    <span className="required-star">*</span>{day.label}
                                </div>
                                <div className="col-weekoff">
                                    <input 
                                        type="checkbox" 
                                        checked={day.isWeekoff} 
                                        onChange={() => toggleWeekoff(day.id)}
                                        className="wt-checkbox"
                                    />
                                </div>
                                <div className="col-shifts">
                                    {day.shifts.map((shift, sIdx) => (
                                        <div key={shift.id} className="shift-entry">
                                            <div className="shift-name-box">
                                                <span>{shift.name}</span>
                                            </div>
                                            <div className="shift-time-box">
                                                <span>{shift.start} - {shift.end}</span>
                                            </div>
                                            <div className="shift-actions">
                                                <button 
                                                    className="btn-shift-minus"
                                                    onClick={() => removeShift(day.id, shift.id)}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                {sIdx === day.shifts.length - 1 && (
                                                    <button 
                                                        className="btn-shift-plus"
                                                        onClick={() => handleOpenModal(day.id, day.label)}
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ShiftSelectionModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                dayName={activeDayName}
                availableShifts={globalAvailableShifts}
                currentShifts={days.find(d => d.id === activeDayId)?.shifts || []}
                onConfirm={handleConfirmShifts}
                onOpenAdd={handleSwitchToAdd}
            />

            <AddNewShiftModal 
                isOpen={isAddModalOpen}
                onClose={() => {
                    setIsAddModalOpen(false);
                    setIsModalOpen(true);
                }}
                onAdd={handleAddNewShift}
            />
        </div>
    );
};

export default EmployeeWorkTimingsPage;
