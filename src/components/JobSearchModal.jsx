import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import './JobSearchModal.css';

const JobSearchModal = ({ closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closeModal();
        }, 300);
    };

    const jobs = [
        { srNo: 1, jobType: 'UWB', jobDate: '07-07-2025', jobNo: '35', partyName: 'SHYAMAPRASAD PAL', model: 'SHRACHI 8D6 DUEL POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'KUSH PATRA' },
        { srNo: 2, jobType: 'PDI', jobDate: '30-08-2025', jobNo: '55', partyName: 'BTL EPC LTD (PDI)', model: 'SHRACHI 8D6 DUEL POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'UTPAL MAKUR' },
        { srNo: 3, jobType: 'PDI', jobDate: '30-08-2025', jobNo: '161', partyName: 'PDI', model: 'SHRACHI 8D6 DUEL POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'VADU SAREN' },
        { srNo: 4, jobType: 'UWA', jobDate: '12-10-2025', jobNo: '72', partyName: 'NARU LOHAR', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR6545', mechanic: 'CHANDI PATRA' },
        { srNo: 5, jobType: 'UWA', jobDate: '14-10-2025', jobNo: '87', partyName: 'TAPAN KUMAR BERA', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR6565', mechanic: 'DIPU DULEY' },
        { srNo: 6, jobType: 'PDI', jobDate: '30-10-2025', jobNo: '164', partyName: 'PDI', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'SANDIP SINGH' },
        { srNo: 7, jobType: 'UWB', jobDate: '28-12-2025', jobNo: '135', partyName: 'PINTU PALUI', model: 'SHRACHI 8D6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'KUSH PATRA' },
        { srNo: 8, jobType: 'UWB', jobDate: '07-03-2026', jobNo: '387', partyName: 'NIMAI MAHANTA', model: 'SHRACHI 8D6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'DIPU DULEY' },
        { srNo: 9, jobType: 'UWB', jobDate: '10-03-2026', jobNo: '385', partyName: 'SUNDARI HEMBRAM', model: 'SHRACHI 8D6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'KUSH PATRA' },
        { srNo: 10, jobType: 'UWA', jobDate: '13-03-2026', jobNo: '403', partyName: 'TRILOCHAN GHOSH', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'DIPU DULEY' },
        { srNo: 11, jobType: 'UWA', jobDate: '14-03-2026', jobNo: '404', partyName: 'SWAPAN KUNDU', model: 'SHRACHI 9G6 PLUS POWER WEEDER', chassisNo: 'W2505SHR2553', mechanic: 'SANDIP SINGH' },
    ];

    return (
        <div className={`job-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`}>
            <div className={`job-modal ${isClosing ? 'scale-down' : 'scale-up'}`}>
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
                                    <th>Job Type</th>
                                    <th>Job Date</th>
                                    <th>Job No</th>
                                    <th>Party Name</th>
                                    <th>Address</th>
                                    <th>Model</th>
                                    <th>Chassis No</th>
                                    <th>Mechanic Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job) => (
                                    <tr key={job.jobNo}>
                                        <td>{job.srNo}</td>
                                        <td>{job.jobType}</td>
                                        <td>{job.jobDate}</td>
                                        <td>{job.jobNo}</td>
                                        <td>{job.partyName}</td>
                                        <td>Bhandirban</td>
                                        <td>{job.model}</td>
                                        <td>{job.chassisNo}</td>
                                        <td>{job.mechanic}</td>
                                        <td>
                                            <input type="checkbox" className="job-select-check" />
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

export default JobSearchModal;