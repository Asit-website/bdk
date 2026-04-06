import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus } from 'lucide-react';
import './ShiftSelectionModal.css';

const ShiftSelectionModal = ({ isOpen, onClose, dayName, availableShifts, currentShifts, onConfirm, onOpenAdd }) => {
    const [selectedShiftIds, setSelectedShiftIds] = useState([]);

    useEffect(() => {
        if (isOpen) {
            setSelectedShiftIds(currentShifts.map(s => s.availableId || 1));
        }
    }, [isOpen, currentShifts]);

    const toggleShift = (shiftId) => {
        setSelectedShiftIds(prev => 
            prev.includes(shiftId) 
                ? prev.filter(id => id !== shiftId) 
                : [...prev, shiftId]
        );
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container shift-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{dayName} - Shifts</h3>
                    <button className="modal-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="shift-selection-list">
                        {availableShifts.map((shift) => (
                            <div 
                                key={shift.id} 
                                className={`shift-selection-item ${selectedShiftIds.includes(shift.id) ? 'selected' : ''}`}
                                onClick={() => toggleShift(shift.id)}
                            >
                                <div className="shift-info">
                                    <span className="shift-name">{shift.name || ''}</span>
                                    {shift.name && <span className="shift-separator">|</span>}
                                    <span className="shift-time">{shift.time}</span>
                                </div>
                                <div className="shift-checkbox">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedShiftIds.includes(shift.id)} 
                                        readOnly 
                                    />
                                    <span className="checkbox-checkmark"></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        className="btn-add-modal-shift"
                        onClick={onOpenAdd}
                    >
                        <Plus size={16} /> Add Shift
                    </button>
                </div>

                <div className="modal-footer">
                    <button className="btn-modal-cancel" onClick={onClose}>Cancel</button>
                    <button 
                        className="btn-modal-confirm" 
                        onClick={() => {
                            const shiftsToApply = availableShifts
                                .filter(s => selectedShiftIds.includes(s.id))
                                .map(s => ({
                                    id: Date.now() + s.id,
                                    availableId: s.id,
                                    name: s.name || 'Custom Shift',
                                    start: s.time.split(' - ')[0],
                                    end: s.time.split(' - ')[1]
                                }));
                            onConfirm(shiftsToApply);
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ShiftSelectionModal;
