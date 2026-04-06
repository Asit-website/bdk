import React, { useState } from "react";
import { X, Settings, Search, Filter, ChevronsUpDown } from "lucide-react";
import "./BulkAssignModal.css";

const BulkAssignModal = ({ open, onClose }) => {
  const [search, setSearch] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!open && !isClosing) return null;

  const data = [
    { name: "Vadu Saren", village: "Mayta", gp: "Benachapra", block: "Garhbeta", model: "9d6+" },
    { name: "Khokan Murmu", village: "Amlasuli", gp: "Amlasuli", block: "Taldangra", model: "8d6" },
    { name: "Chadni Patra", village: "Makli", gp: "Makli", block: "GBA-II", model: "7P3" },
    { name: "Dipu Dule", village: "KARSA", gp: "KADRA", block: "GBA-III", model: "SOLAR 3HP" }
  ];

  return (
    <div className={`lead-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
      <div className={`lead-modal bulk-assign-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>

        {/* Header */}
        <div className="lead-modal-header">
          <div className="lead-title">Bulk Assign</div>

          <div className="lead-header-icons">
            <Settings size={18} />
            <X size={18} className="close-icon" onClick={handleClose} />
          </div>
        </div>

        {/* Form Grid */}
        <div className="lead-form-wrapper">
          <div className="lead-form-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>

            <div className="form-field">
              <label>Executive</label>
              <div className="select-box">
                <select></select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Date</label>
              <input type="date" />
            </div>

            <div className="form-field">
              <label>Time</label>
              <input type="time" />
            </div>

            <div className="form-field">
              <label>Task</label>
              <div className="select-box">
                <select></select>
                <span className="select-arrow"></span>
              </div>
            </div>

            <div className="form-field">
              <label>Remark</label>
              <input type="text" />
            </div>

          </div>

          {/* Table Section */}
          <div className="bulk-table-container">
            <div className="bulk-table-header">
              <div className="bulk-search-box">
                <Search size={14} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="bulk-table-wrapper">
              <table className="bulk-inner-table">
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>
                      <div className="th-content">
                        Name <ChevronsUpDown size={12} className="sort-icon" />
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        Village <ChevronsUpDown size={12} className="sort-icon" />
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        GP <ChevronsUpDown size={12} className="sort-icon" />
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        Block <ChevronsUpDown size={12} className="sort-icon" />
                      </div>
                    </th>
                    <th>
                      <div className="th-content">
                        Model <ChevronsUpDown size={12} className="sort-icon" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr key={i}>
                      <td><input type="checkbox" /></td>
                      <td>{item.name}</td>
                      <td>{item.village}</td>
                      <td>{item.gp}</td>
                      <td>{item.block}</td>
                      <td>{item.model}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
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

export default BulkAssignModal;