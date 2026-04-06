import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './UpdateCommitmentModal.css';

const UpdateCommitmentModal = ({ open, onClose, rowData }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 200);
    };

    if (!open && !isClosing) return null;

    return createPortal(
        <div className="commitment-modal-overlay" onClick={handleClose}>
            <div 
                className={`commitment-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={e => e.stopPropagation()}
            >
                <div className="commitment-field">
                    <label>Comentment Date</label>
                    <input type="date" className="commitment-input" placeholder="Comentment Date" />
                </div>

                <div className="commitment-field">
                    <label>Remark:-</label>
                    <textarea className="commitment-textarea" placeholder="Enter remark"></textarea>
                </div>

                <div className="commitment-footer">
                    <button className="btn-commitment cancel" onClick={handleClose}>CANCEL</button>
                    <button className="btn-commitment save">SAVE</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default UpdateCommitmentModal;
