import React from 'react';
import { X, Save } from 'lucide-react';
import './EngineChassisModal.css';

const EngineChassisModal = ({ isOpen, onClose, rowId }) => {
    if (!isOpen) return null;

    // Mock data for initial rows - in real app would come from state or props
    const engineChassisList = [
        { id: 1, engine: 'E2501SHR2514', chassis: 'W2501SHR3215' },
        { id: 2, engine: 'E2501SHR2514', chassis: 'W2501SHR3215' },
        { id: 3, engine: 'E2501SHR2514', chassis: 'W2501SHR3215' },
        { id: 4, engine: 'E2501SHR2514', chassis: 'W2501SHR3215' },
        { id: 5, engine: 'E2501SHR2514', chassis: 'W2501SHR3215' },
        { id: 6, engine: 'E2501SHR2514', chassis: 'W2501SHR3215' },
    ];

    return (
        <div className="modal-overlay fade-in">
            <div className="modal-content-wrapper scale-up large-modal">
                <div className="modal-header">
                    <h3 className="modal-title">Engine No and Chassis No</h3>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="modal-body engine-chassis-body">
                    <table className="ec-table">
                        <thead>
                            <tr>
                                <th>Engine No</th>
                                <th>Chassis No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {engineChassisList.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <input
                                            type="text"
                                            className="ec-input"
                                            defaultValue={item.engine}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="ec-input"
                                            defaultValue={item.chassis}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="modal-footer">
                    <button className="btn-cancel" onClick={onClose}><X size={16} /> CLOSE</button>
                    <button className="btn-save" onClick={onClose}>
                        <Save size={16} /> SAVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EngineChassisModal;
