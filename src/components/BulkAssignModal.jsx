import React, { useState } from "react";
import { X, Settings, Search, Filter } from "lucide-react";
import "./BulkAssignModal.css";

const BulkAssignModal = ({ open, onClose }) => {
  const [search, setSearch] = useState("");

  const data = [
    { name: "Vadu Saren", village: "Mayta", gp: "Benachapra", block: "Garhbeta", model: "9d6+" },
    { name: "Khokan Murmu", village: "Amlasuli", gp: "Amlasuli", block: "Taldangra", model: "8d6" },
    { name: "Chadni Patra", village: "Makli", gp: "Makli", block: "GBA-II", model: "7P3" },
    { name: "Dipu Dule", village: "KARSA", gp: "KADRA", block: "GBA-III", model: "SOLAR 3HP" }
  ];

  if (!open) return null;

  return (
    <div className="bulk-overlay">
      <div className="bulk-modal">

        {/* Header */}
        <div className="bulk-header">
          <span className="bulk-title">Bulk Assign</span>

          <div className="header-icons">
            <Settings size={16} />
            <X size={18} className="close-btn" onClick={onClose} />
          </div>
        </div>

        {/* Form */}
        <div className="bulk-form">

          <div className="form-group">
            <label>Executive</label>

            <div className="select-wrapper">
              <select></select>
              <span className="dropdown-arrow"></span>
            </div>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input type="time" />
          </div>

          <div className="form-group">
            <label>Task</label>

            <div className="select-wrapper">
              <select></select>
              <span className="dropdown-arrow"></span>
            </div>
          </div>

          <div className="form-group remark-box">
            <label>Remark</label>
            <input type="text" />
          </div>

        </div>

        {/* Table */}
        <div className="bulk-table">

          <div className="table-header">

            <div></div>

            <div className="table-search">
              <Search size={14} />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>

          </div>

          <table>

            <thead>
              <tr>
                <th></th>
                <th>Name <Filter size={12}/></th>
                <th>Village <Filter size={12}/></th>
                <th>GP <Filter size={12}/></th>
                <th>Block <Filter size={12}/></th>
                <th>Model <Filter size={12}/></th>
              </tr>
            </thead>

            <tbody>

              {data.map((item,i)=>(
                <tr key={i}>
                  <td><input type="checkbox"/></td>
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

        {/* Footer */}

        <div className="bulk-footer">

          <button className="share-btn">
          SAVE
          </button>

          <button className="save-btn">
           RESET
          </button>

        </div>

      </div>
    </div>
  );
};

export default BulkAssignModal;