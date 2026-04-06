import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './WeederUpdateModal.css';

const WeederUpdateModal = ({ isOpen, onClose, initialData = null }) => {
    const [formData, setFormData] = useState({
        hp: '',
        modelNo: '',
        wheel: '',
        mobileNo: ''
    });

    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen && initialData) {
            setFormData({
                hp: initialData.hp || '',
                modelNo: initialData.model || '',
                wheel: initialData.wheels || '',
                mobileNo: initialData.mobile || ''
            });
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else if (!isOpen) {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, initialData]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 150);
    };

    if (!isOpen && !isClosing) return null;

    return createPortal(
        <div className={`weeder-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`weeder-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="weeder-modal-grid">
                    <div className="weeder-form-group">
                        <label>HP</label>
                        <select 
                            className="weeder-form-control"
                            value={formData.hp}
                            onChange={(e) => setFormData({...formData, hp: e.target.value})}
                        >
                            <option value="">Select HP</option>
                            <option value="18HP">18HP</option>
                            <option value="9HP">9HP</option>
                            <option value="12HP">12HP</option>
                        </select>
                    </div>

                    <div className="weeder-form-group">
                        <label>Model No</label>
                        <select 
                            className="weeder-form-control"
                            value={formData.modelNo}
                            onChange={(e) => setFormData({...formData, modelNo: e.target.value})}
                        >
                            <option value="">Select Model</option>
                            <option value="9d6+">9d6+</option>
                            <option value="8d6">8d6</option>
                            <option value="7d6">7d6</option>
                        </select>
                    </div>

                    <div className="weeder-form-group">
                        <label>Wheel</label>
                        <select 
                            className="weeder-form-control"
                            value={formData.wheel}
                            onChange={(e) => setFormData({...formData, wheel: e.target.value})}
                        >
                            <option value="">Select Wheel</option>
                            <option value="5-12 BKT">5-12 BKT</option>
                            <option value='18" GNELL'>18" GNELL</option>
                            <option value="Standard">Standard</option>
                        </select>
                    </div>
                </div>

                <div className="weeder-modal-grid">
                    <div className="weeder-form-group full-width">
                        <label>Mobile No</label>
                        <input 
                            type="text" 
                            className="weeder-form-control" 
                            placeholder="Enter Mobile No"
                            value={formData.mobileNo}
                            onChange={(e) => setFormData({...formData, mobileNo: e.target.value})}
                        />
                    </div>
                </div>

                <div className="weeder-modal-footer">
                    <button className="btn-weeder cancel" onClick={handleClose}>Cancel</button>
                    <button className="btn-weeder submit" onClick={handleClose}>Submit</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default WeederUpdateModal;
