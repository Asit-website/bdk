import React, { useState } from 'react';
import { MoreVertical, Search, Filter, Download, FileText, Share2, ChevronsUpDown } from 'lucide-react';
import ActionMenu from './BookingActionMenu';
import WeederUpdateModal from './WeederUpdateModal';
import './BookingTable.css';

const BookingTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [anchorRect, setAnchorRect] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const bookings = [
        { id: 1, date: '08/03/2026', bookingNo: '15', model: '9d6+', hp: '18HP', wheels: '5-12 BKT', executive: 'ABC', branch: 'ABC', vill: 'ABC', gp: 'ABC', block: 'ABC', mobile: '993325665', status: 'BOOKED' },
        { id: 2, date: '08/03/2026', bookingNo: '16', model: '8d6', hp: '9HP', wheels: '18" GNELL', executive: 'EFG', branch: 'ABC', vill: 'ABC', gp: 'ABC', block: 'ABC', mobile: '993325665', status: 'BILLED' },
    ];

    const toggleMenu = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setAnchorRect(rect);
        setOpenMenuId(openMenuId === id ? null : id);
    };

    // Close menu on scroll or click outside
    React.useEffect(() => {
        const handleEvent = () => setOpenMenuId(null);
        window.addEventListener('scroll', handleEvent, true);
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.action-dots')) handleEvent();
        });
        return () => {
            window.removeEventListener('scroll', handleEvent, true);
            window.removeEventListener('click', handleEvent);
        };
    }, []);

    return (
        <div className="booking-table-section">
            <div className="table-header-toolbar">
                <h3 className="section-title">Transactions</h3>
                <div className="toolbar-actions">
                    <Search size={18} className="toolbar-icon" />
                    <Filter size={18} className="toolbar-icon" />
                    <Download size={18} className="toolbar-icon" />
                    <FileText size={18} className="toolbar-icon" />
                    <Share2 size={18} className="toolbar-icon" />
                </div>
            </div>

            <div className="table-wrapper">
                <table className="booking-data-table">
                    <thead>
                        <tr>
                            <th>
                                <div className="th-content">
                                    Sl No <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Date <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Booking No <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Model <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    HP <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Wheels <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Executive <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Branch <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Vill <ChevronsUpDown size={12} className="sort-icon" />
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
                                    Mobile No. <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>
                                <div className="th-content">
                                    Status <ChevronsUpDown size={12} className="sort-icon" />
                                </div>
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((row, idx) => (
                            <tr key={row.id}>
                                <td>{idx + 1}</td>
                                <td>{row.date}</td>
                                <td>{row.bookingNo}</td>
                                <td>{row.model}</td>
                                <td>{row.hp}</td>
                                <td>{row.wheels}</td>
                                <td>{row.executive}</td>
                                <td>{row.branch}</td>
                                <td>{row.vill}</td>
                                <td>{row.gp}</td>
                                <td>{row.block}</td>
                                <td>{row.mobile}</td>
                                <td>
                                    <span className={`status-badge ${row.status.toLowerCase()}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="action-cell">
                                    <button
                                        className={`action-dots ${openMenuId === row.id ? 'active' : ''}`}
                                        onClick={(e) => toggleMenu(e, row.id)}
                                    >
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ActionMenu
                isOpen={openMenuId !== null}
                anchorRect={anchorRect}
                onClose={() => setOpenMenuId(null)}
                onUpdate={() => {
                    const row = bookings.find(b => b.id === openMenuId);
                    if (row) {
                        setSelectedBooking(row);
                        setIsUpdateModalOpen(true);
                    }
                }}
            />

            <WeederUpdateModal 
                isOpen={isUpdateModalOpen}
                onClose={() => setIsUpdateModalOpen(false)}
                initialData={selectedBooking}
            />
        </div>
    );
};

export default BookingTable;
