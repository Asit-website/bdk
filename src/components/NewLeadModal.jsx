import React from "react";
import { X, Settings, Calculator } from "lucide-react";
import "./NewLeadModal.css";

const NewLeadModal = ({ closeModal }) => {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300); // Match CSS animation duration
  };

  return (
    <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
      <div className={`lead-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

        {/* HEADER */}
        <div className="lead-modal-header">
          <div className="lead-title">New Lead Entry</div>

          <div className="lead-header-icons">
            <Calculator size={18} />
            <Settings size={18} />
            <X size={18} className="close-icon" onClick={handleClose} />
          </div>
        </div>

        {/* FORM BORDER BOX */}
        <div className="lead-form-wrapper">

          <div className="lead-form-grid">

            <div className="form-field">
              <label>Camping</label>
              <div className="select-box">
                <select></select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Location/Leadsource</label>
              <div className="select-box">
                <select>
                  <option>Office</option>
                  <option>Workshop</option>
                  <option>Field</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Customer Name</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Village</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Mobile No.</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Gp</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Block</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Dist</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Pincode</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Product Model No.</label>
              <div className="select-box">
                <select></select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Lead Nature</label>
              <div className="select-box">
                <select></select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Executive/Agent</label>
              <div className="select-box">
                <select></select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Billing Source</label>
              <div className="select-box">
                <select>
                  <option>Subsidy</option>
                  <option>Cash</option>
                  <option>Finance</option>
                </select>
                <span className="select-arrow"></span>
              </div>
            </div>

          </div>

          {/* REMARK */}
          <div className="remark-section">
            <label>Remark</label>
            <textarea></textarea>
          </div>

        </div>

        {/* FOOTER */}
        <div className="lead-footer">
          <div className="share-group">
            <button className="btn-share">Share</button>
            <div className="btn-share-dropdown">
              <div className="share-arrow"></div>
            </div>
          </div>
          <button className="btn-save">Save</button>
        </div>

      </div>

    </div>


  );
};

export default NewLeadModal;
