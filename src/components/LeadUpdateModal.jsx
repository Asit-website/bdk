import React, { useState } from "react";
import { X, Settings, ChevronDown } from "lucide-react";
import "./LeadUpdateModal.css";

const LeadUpdateModal = ({ open, onClose, leadData }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!open && !isClosing) return null;

  return (
    <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
      <div className={`lead-modal update-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

        {/* Header */}
        <div className="lead-modal-header">
          <div className="lead-title">Update</div>

          <div className="lead-header-icons">
            <Settings size={18} />
            <X size={18} className="close-icon" onClick={handleClose} />
          </div>
        </div>

        {/* Form Grid */}
        <div className="lead-form-wrapper">
          <div className="lead-form-grid update-grid">

            <div className="form-field">
              <label>EXECUTIVE</label>
              <div className="select-box">
                <select defaultValue="">
                  <option value="" disabled>Select Executive</option>
                  <option value="1">Executive 1</option>
                  <option value="2">Executive 2</option>
                </select>
                <ChevronDown size={14} className="select-chevron" />
              </div>
            </div>

            <div className="form-field">
              <label>DATE</label>
              <input type="date" placeholder="dd - mm - yyyy" />
            </div>

            <div className="form-field">
              <label>TIME</label>
              <input type="time" placeholder="-- : -- --" />
            </div>

            <div className="form-field">
              <label>TASK</label>
              <div className="select-box">
                <select defaultValue="">
                  <option value="" disabled>Select Task</option>
                  <option value="1">Task 1</option>
                  <option value="2">Task 2</option>
                </select>
                <ChevronDown size={14} className="select-chevron" />
              </div>
            </div>

            <div className="form-field remark-field">
              <label>REMARK</label>
              <input type="text" placeholder="Enter remark" />
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="lead-footer">
          <div className="share-group">
            <button className="btn-share">SHARE</button>
            <div className="btn-share-dropdown">
              <ChevronDown size={14} />
            </div>
          </div>
          <button className="btn-save">SAVE</button>
        </div>

      </div>
    </div>
  );
};

export default LeadUpdateModal;
