import React, { useState } from 'react';
import { X, Search, Plus } from 'lucide-react';
import './JobCloseSearchModal.css';

const JobCloseSearchModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closeModal();
        }, 300);
    };

    const jobs = [
        { srNo: 1, serviceHead: 'UW', jobDate: '07-07-2025', jobNo: '35', serviceType: 'FREE', partyName: 'SHYAMAPRASAD PAL', address: 'Bhandirban', model: 'SHRACHI 8D6 DUEL POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'KUSH PATRA' },
        { srNo: 2, serviceHead: 'NW', jobDate: '30-08-2025', jobNo: '55', serviceType: 'PAID', partyName: 'BTL EPC LTD (PDI)', address: 'Bhandirban', model: 'SHRACHI 8D6 DUEL POWER WEEDER', chassisNo: 'W2505SHR2555', mechanic: 'UTPAL MAKUR' },
        { srNo: 3, serviceHead: 'UW', jobDate: '30-08-2025', jobNo: '161', serviceType: 'PAID', partyName: 'PDI', address: 'Bhandirban', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR6582', mechanic: 'VADU SAREN' },
        { srNo: 4, serviceHead: 'NW', jobDate: '12-10-2025', jobNo: '72', serviceType: 'FREE', partyName: 'NARU LOHAR', address: 'Bhandirban', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR6545', mechanic: 'CHANDI PATRA' },
        { srNo: 5, serviceHead: 'UW', jobDate: '14-10-2025', jobNo: '87', serviceType: 'FREE', partyName: 'TAPAN KUMAR BERA', address: 'Bhandirban', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR6565', mechanic: 'DIPU DULEY' },
        { srNo: 6, serviceHead: 'UW', jobDate: '30-10-2025', jobNo: '164', serviceType: 'PAID', partyName: 'PDI', address: 'Bhandirban', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2563', mechanic: 'SANDIP SINGH' },
        { srNo: 7, serviceHead: 'NW', jobDate: '28-12-2025', jobNo: '135', serviceType: 'PAID', partyName: 'PINTU PALUI', address: 'Bhandirban', model: 'SHRACHI 8D6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2563', mechanic: 'KUSH PATRA' },
        { srNo: 8, serviceHead: 'NW', jobDate: '07-03-2026', jobNo: '387', serviceType: 'FREE', partyName: 'NIMAI MAHANTA', address: 'Bhandirban', model: 'SHRACHI 8D6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2563', mechanic: 'DIPU DULEY' },
        { srNo: 9, serviceHead: 'NW', jobDate: '10-03-2026', jobNo: '385', serviceType: 'PAID', partyName: 'SUNDARI HEMBRAM', address: 'Bhandirban', model: 'SHRACHI 8D6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2563', mechanic: 'KUSH PATRA' },
        { srNo: 10, serviceHead: 'UW', jobDate: '13-03-2026', jobNo: '403', serviceType: 'FREE', partyName: 'TRILOCHAN GHOSH', address: 'Bhandirban', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2563', mechanic: 'DIPU DULEY' },
        { srNo: 11, serviceHead: 'NW', jobDate: '14-03-2026', jobNo: '404', serviceType: 'PAID', partyName: 'SWAPAN KUNDU', address: 'Bhandirban', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2563', mechanic: 'SANDIP SINGH' },
    ];

    return (
        <div className={`job-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`job-modal job-close-search-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
                <div className="booking-modal-header">
                    <div className="booking-title-group">
                        <span className="booking-title">Job Search</span>
                    </div>
                    <div className="header-actions">
                        <X size={18} className="close-icon" onClick={handleClose} />
                    </div>
                </div>

                <div className="job-modal-body">
                    <div className="job-search-filters">
                        <div className="search-field">
                            <label>Job No</label>
                            <input type="text" placeholder="Enter Job No." />
                        </div>
                        <div className="search-field">
                            <label>Manual Job No</label>
                            <input type="text" />
                        </div>
                        <div className="search-field">
                            <label>Date From</label>
                            <input type="date" defaultValue="2025-04-01" />
                        </div>
                        <div className="search-field">
                            <label>Date To</label>
                            <input type="date" defaultValue="2026-03-19" />
                        </div>
                        <div className="search-field">
                            <label>Mechanic Name</label>
                            <select>
                                <option>Select</option>
                            </select>
                        </div>
                        <div className="search-action">
                            <button type="button" className="fetch-btn">
                                <Search size={14} /> Fetch
                            </button>
                        </div>
                    </div>

                    <div className="job-table-container">
                        <table className="job-search-table">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Service Head</th>
                                    <th>Job Date</th>
                                    <th>Job No</th>
                                    <th>Service Type</th>
                                    <th>Party Name</th>
                                    <th>Address</th>
                                    <th>Model / Description</th>
                                    <th>Chassis No</th>
                                    <th>Mechanic Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job) => (
                                    <tr key={job.srNo}>
                                        <td>{job.srNo}</td>
                                        <td className={job.serviceHead === 'UW' ? 'job-head-uw' : 'job-head-nw'}>{job.serviceHead}</td>
                                        <td>{job.jobDate}</td>
                                        <td>{job.jobNo}</td>
                                        <td className={job.serviceType === 'FREE' ? 'job-type-free' : 'job-type-paid'}>{job.serviceType}</td>
                                        <td>{job.partyName}</td>
                                        <td>{job.address}</td>
                                        <td>{job.model}</td>
                                        <td>{job.chassisNo}</td>
                                        <td>{job.mechanic}</td>
                                        <td>
                                            <button type="button" className="job-select-plus" aria-label="Select row">
                                                <Plus size={12} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCloseSearchModal;
