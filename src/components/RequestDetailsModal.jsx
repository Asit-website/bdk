import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import './RequestDetailsModal.css';

const RequestDetailsModal = ({ isOpen, onClose, employeeName = 'SUDHIR MURMU' }) => {
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsClosing(false);
		}
	}, [isOpen]);

	if (!isOpen) return null;

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => onClose(), 220);
	};

	return (
		<div className={`request-modal-overlay ${isClosing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
			<div
				className={`request-modal-card ${isClosing ? 'scale-down' : 'scale-up'}`}
				onClick={(event) => event.stopPropagation()}
			>
				<div className="request-modal-head">
					<button type="button" className="request-close-btn" onClick={handleClose} aria-label="Close">
						<X size={16} />
					</button>

					<div className="request-employee-head">
						<span className="request-avatar" />
						<span className="request-employee-name">{employeeName}</span>
					</div>

					<span className="request-status-badge">Pending</span>
				</div>

				<div className="request-body">
					<div className="request-group">
						<div className="request-label">Leave Duration</div>
						<div className="request-value">18 Mar 2026 (Wed) - 18 Mar 2026 (Wed)</div>
					</div>

					<div className="request-dual-grid">
						<div className="request-group">
							<div className="request-label">Requested for</div>
							<div className="request-value">1 Day</div>
						</div>
						<div className="request-group">
							<div className="request-label">Leave type</div>
							<div className="request-value">Unpaid Leave</div>
						</div>
					</div>

					<div className="request-divider" />

					<div className="request-group">
						<div className="request-label">Notes</div>
						<div className="request-value">I want Leave For Physical Problem</div>
					</div>

					<div className="request-group">
						<div className="request-label">Attachments</div>
						<div className="request-value light">No Attachments</div>
					</div>

					<div className="request-group">
						<div className="request-label">Requested on</div>
						<div className="request-value">17 Mar 2026, 11:23 PM</div>
					</div>
				</div>

				<div className="request-footer-actions">
					<button type="button" className="request-action-btn reject">Reject</button>
					<button type="button" className="request-action-btn approve">Approve</button>
				</div>
			</div>
		</div>
	);
};

export default RequestDetailsModal;
