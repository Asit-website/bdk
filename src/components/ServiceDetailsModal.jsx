import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, MapPin } from 'lucide-react';
import './ServiceDetailsModal.css';

const ServiceDetailsModal = ({ isOpen, onClose, data }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setIsClosing(false);
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 150);
    };

    if (!isOpen && !isClosing) return null;

    // Mock data for items in the sidebar table matching Slide 24
    const itemDetails = [
        { si: 1, name: 'Fuel Pipe Assy', qty: 1, mrp: 50.00 },
        { si: 2, name: 'Spiral Spring', qty: 1, mrp: 250.00 },
        { si: 3, name: 'Electric Start Switch', qty: 1, mrp: 450.00 },
        { si: 4, name: 'Fuel Tank Cap Assy', qty: 1, mrp: 100.00 }
    ];

    return createPortal(
        <div className={`service-details-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`service-details-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="printer-icon-btn">
                    <Printer size={20} />
                </div>

                {/* Main Content Area */}
                <div className="modal-main-content">
                    <div className="meta-grid-2">
                        <div className="meta-column">
                            <div className="meta-item">
                                <span className="meta-label">Customer Name</span>
                                <span className="meta-value">{data?.customer || 'SERMA HEMBRAM'}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Delivery Date</span>
                                <span className="meta-value">22-03-2026</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Engine No</span>
                                <span className="meta-value">E2411SHR1234</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Battery No</span>
                                <span className="meta-value">85211221H50029</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Warranty Status</span>
                                <span className="meta-value active">ACTIVE</span>
                            </div>
                        </div>
                        <div className="meta-column">
                            <div className="meta-item">
                                <span className="meta-label">Mobile</span>
                                <span className="meta-value">{data?.mobile || '1234567890'}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Model No</span>
                                <span className="meta-value">9D6+/10HP</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Chassis No</span>
                                <span className="meta-value">W2411SHR2214</span>
                            </div>
                            <div className="meta-item" style={{ height: '34px' }}></div> {/* Spacer */}
                            <div className="meta-item">
                                <span className="meta-label">Service Status</span>
                                <span className="meta-value close">CLOSE</span>
                            </div>
                        </div>
                    </div>

                    <div className="address-full meta-item" style={{ marginBottom: '25px' }}>
                        <span className="meta-label">Address</span>
                        <span className="meta-value">Bhandirban, Benachapra, Paschim Medinipur, Garhbeta I, 72121</span>
                    </div>

                    <h3 className="section-title-small">Customer Voice/Problem:</h3>
                    <div className="problem-chips-container">
                        {['FUEL PIPE CHANGE', 'FUEL NOZZEL CHANGE', 'FUEL FILTER CHANGE', 'STARTING PROBLEM', 'STARTER ROPE', 'CHOTE CHOTE GAIN BANSHO HOYE JACHHE'].map((p, i) => (
                            <span key={i} className="problem-chip">{p}</span>
                        ))}
                    </div>

                    <div className="text-box-group">
                        <h3 className="section-title-small">Remark:</h3>
                        <div className="text-box" style={{ minHeight: '60px' }}></div>
                    </div>

                    <div className="text-box-group">
                        <h3 className="section-title-small">Mechanic Comment:</h3>
                        <div className="text-box" style={{ minHeight: '60px' }}></div>
                    </div>

                    <div className="mechanic-info-row">
                        <div className="info-group">
                            <span className="meta-label" style={{ width: 'auto', marginBottom: '5px' }}>Mechanic Name</span>
                            <div className="meta-value" style={{ minWidth: '150px' }}>{data?.technician || 'VADU SAREN'}</div>
                        </div>
                        <div className="info-group">
                            <span className="meta-label" style={{ width: 'auto', marginBottom: '5px' }}>Working Date & Time</span>
                            <div className="meta-value" style={{ minWidth: '200px' }}>20-03-2026 12:01 PM</div>
                        </div>
                    </div>

                    <div className="location-section">
                        <h3 className="section-title-small">Update Location:</h3>
                        <div className="map-placeholder">
                            <MapPin size={18} style={{ marginRight: '8px' }} /> Map Placeholder
                        </div>
                    </div>

                    <div className="images-section">
                        <div className="images-grid">
                            <div className="image-placeholder">Image 1</div>
                            <div className="image-placeholder">Image 2</div>
                            <div className="image-placeholder">Image 3</div>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Item Details */}
                <div className="modal-sidebar">
                    <h2 className="sidebar-title">Item Details:</h2>
                    <table className="item-table">
                        <thead>
                            <tr>
                                <th>Si</th>
                                <th>Part Name</th>
                                <th>Qty</th>
                                <th>M.R.P</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemDetails.map((item) => (
                                <tr key={item.si}>
                                    <td>{item.si}</td>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.mrp.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="summary-section">
                        <div className="summary-row">
                            <span className="summary-label">Parts Amount:-</span>
                            <span className="summary-value">750.00</span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Service Charge:-</span>
                            <span className="summary-value">300.00</span>
                        </div>
                        <div className="summary-row total-row">
                            <span className="summary-label">Total Amount:-</span>
                            <span className="summary-value">1,050.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ServiceDetailsModal;
