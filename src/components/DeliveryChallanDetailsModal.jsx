import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer } from 'lucide-react';
import './DeliveryChallanDetailsModal.css';

const DeliveryChallanDetailsModal = ({ isOpen, onClose, data }) => {
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

    return createPortal(
        <div className={`delivery-modal-overlay ${isClosing ? 'fade-out' : ''}`} onClick={handleClose}>
            <div 
                className={`delivery-modal ${isClosing ? 'scale-down' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="delivery-modal-content">
                    {/* Header with Print & Close */}
                    <div className="delivery-header-actions">
                        <div className="header-meta">
                            <div className="meta-item">
                                <span className="label">Date</span>
                                <div className="value-box-small">{data?.date || ''}</div>
                            </div>
                            <div className="meta-item">
                                <span className="label">Bill No</span>
                                <div className="value-box-small">{data?.billNo || ''}</div>
                            </div>
                            <div className="meta-item">
                                <span className="label">Item Category</span>
                                <div className="value-box-medium">WEEDER</div>
                            </div>
                        </div>
                        <div className="header-icons">
                            <div className="close-btn-red" onClick={handleClose}>
                                <X size={20} />
                            </div>
                            <div className="print-btn-circle">
                                <Printer size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="delivery-body-grid">
                        {/* Left Column */}
                        <div className="delivery-left-panel">
                            <div className="details-grid-2">
                                <div className="info-group">
                                    <span className="label">Party Name</span>
                                    <div className="value-box">{data?.partyName || 'ABC'}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Village</span>
                                    <div className="value-box">{data?.vill || 'efg'}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Mobile No</span>
                                    <div className="value-box">{data?.mobile || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Village</span>
                                    <div className="value-box">{data?.vill || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">GP</span>
                                    <div className="value-box">{data?.gp || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Block</span>
                                    <div className="value-box">{data?.block || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Dist</span>
                                    <div className="value-box">{data?.district || ''}</div>
                                </div>
                            </div>

                            <h3 className="panel-title-underline mt-20">Product Details:</h3>
                            <div className="details-grid-2">
                                <div className="info-group">
                                    <span className="label">Engine No</span>
                                    <div className="value-box">{data?.engineNo || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Chassis No</span>
                                    <div className="value-box">{data?.chassisNo || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Model No</span>
                                    <div className="value-box">{data?.model || ''}</div>
                                </div>
                                <div className="info-group">
                                    <span className="label">Battery No</span>
                                    <div className="value-box">{data?.batteryNo || ''}</div>
                                </div>
                            </div>

                            <div className="photo-grid mt-20">
                                <div className="photo-item">
                                    <span className="label">Engine Photo</span>
                                    <div className="image-placeholder">ENGINE IMAGE</div>
                                </div>
                                <div className="photo-item">
                                    <span className="label">Chassis Photo</span>
                                    <div className="image-placeholder">CHASSIS IMAGE</div>
                                </div>
                                <div className="photo-item">
                                    <span className="label">Product Photo</span>
                                    <div className="image-placeholder">PRODUCT IMAGE</div>
                                </div>
                                <div className="photo-item">
                                    <span className="label">Attachment Photo</span>
                                    <div className="image-placeholder">ATTACHMENT IMAGE</div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="panel-divider"></div>

                        {/* Right Column */}
                        <div className="delivery-right-panel">
                            <h3 className="panel-title-underline text-center">Attachments Details</h3>
                            
                            <div className="attachment-details-grid mt-20">
                                {['Wheel', 'M.set', 'Tool Kit', 'Service Kit', 'Hitch', 'Potato Planter', 'Potato Digger', 'Leveler', 'R.Set'].map(item => (
                                    <div key={item} className="info-group">
                                        <span className="label">{item}</span>
                                        <div className="value-box-short"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="info-group mt-20">
                                <span className="label">Transported By</span>
                                <div className="value-box-full"></div>
                            </div>
                            <div className="info-group mt-15">
                                <span className="label">Remark</span>
                                <div className="value-box-tall"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DeliveryChallanDetailsModal;
