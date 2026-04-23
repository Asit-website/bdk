import React, { useState } from 'react';
import { MoreVertical, ChevronsUpDown, Search, Filter, Download, FileText, Share2 } from 'lucide-react';
import DeliveryChallanActionMenu from './DeliveryChallanActionMenu';
import DeliveryUpdateModal from './DeliveryUpdateModal';
import ModelTooltipPortal from './ModelTooltipPortal';
import AttachmentTooltipPortal from './AttachmentTooltipPortal';
import DeliveryChallanDetailsModal from './DeliveryChallanDetailsModal';
import './QuotationTable.css';
import './DeliveryUpdateModal.css';

const DeliveryChallanTable = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [modelAnchor, setModelAnchor] = useState(null);
    const [attachmentAnchor, setAttachmentAnchor] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedChallan, setSelectedChallan] = useState(null);

    const data = [
        {
            id: 1,
            date: '23/03/2026',
            billNo: '15',
            partyName: 'ABC',
            vill: 'efg',
            gp: 'xyz',
            block: 'pqr',
            district: 'Garhbeta',
            model: '9D6+',
            attachment: 'view',
            deliveryType: 'Cash'
        },
        {
            id: 2,
            date: '23/03/2026',
            billNo: '15',
            partyName: 'ABC',
            vill: 'efg',
            gp: 'xyz',
            block: 'pqr',
            district: 'Garhbeta',
            model: '8D6',
            attachment: 'view',
            deliveryType: 'Cash'
        }
    ];

    const handleActionClick = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (menuAnchor && menuAnchor.id === id) {
            setMenuAnchor(null);
        } else {
            setMenuAnchor({
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.width,
                id: id
            });
        }
    };

    const handleModelClick = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (modelAnchor && modelAnchor.id === id) {
            setModelAnchor(null);
        } else {
            setModelAnchor({
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.width,
                id: id
            });
        }
    };

    const handleAttachmentClick = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (attachmentAnchor && attachmentAnchor.id === id) {
            setAttachmentAnchor(null);
        } else {
            setAttachmentAnchor({
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.width,
                id: id
            });
        }
    };

    const handlePartyClick = (item) => {
        setSelectedChallan(item);
        setIsDetailModalOpen(true);
    };

    return (
        <div className="quotation-table-section">
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
                <table className="quotation-data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '60px' }}>
                                <div className="th-content">sl No. <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Date <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '100px' }}>
                                <div className="th-content">Bill No. <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '150px' }}>
                                <div className="th-content">Party Name <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '80px' }}>
                                <div className="th-content">Vill <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '80px' }}>
                                <div className="th-content">GP <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '80px' }}>
                                <div className="th-content">Block <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">District <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '100px' }}>
                                <div className="th-content">Model <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '120px' }}>
                                <div className="th-content">Attachment <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '130px' }}>
                                <div className="th-content">Delivery Type <ChevronsUpDown size={14} className="sort-icon" /></div>
                            </th>
                            <th style={{ width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{item.date}</td>
                                <td>{item.billNo}</td>
                                <td>
                                    <span 
                                        className="product-view-link"
                                        onClick={() => handlePartyClick(item)}
                                    >
                                        {item.partyName}
                                    </span>
                                </td>
                                <td>{item.vill}</td>
                                <td>{item.gp}</td>
                                <td>{item.block}</td>
                                <td>{item.district}</td>
                                <td>
                                    <span 
                                        style={{ color: '#3b82f6', fontWeight: '700', cursor: 'pointer' }}
                                        onClick={(e) => { e.stopPropagation(); handleModelClick(e, item.id); }}
                                    >
                                        {item.model}
                                    </span>
                                </td>
                                <td>
                                    <span 
                                        style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: '500' }}
                                        onClick={(e) => { e.stopPropagation(); handleAttachmentClick(e, item.id); }}
                                    >
                                        {item.attachment}
                                    </span>
                                </td>
                                <td>{item.deliveryType}</td>
                                <td className="action-cell">
                                    <button className="action-dots" onClick={(e) => { e.stopPropagation(); handleActionClick(e, item.id); }}>
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {menuAnchor && (
                <DeliveryChallanActionMenu
                    isOpen={true}
                    anchorRect={menuAnchor}
                    onClose={() => setMenuAnchor(null)}
                    onUpdate={() => setIsUpdateModalOpen(true)}
                />
            )}

            <DeliveryUpdateModal 
                isOpen={isUpdateModalOpen}
                onClose={() => setIsUpdateModalOpen(false)}
            />

            {modelAnchor && (
                <ModelTooltipPortal
                    isOpen={true}
                    anchorRect={modelAnchor}
                    onClose={() => setModelAnchor(null)}
                />
            )}

            {attachmentAnchor && (
                <AttachmentTooltipPortal
                    isOpen={true}
                    anchorRect={attachmentAnchor}
                    onClose={() => setAttachmentAnchor(null)}
                />
            )}

            <DeliveryChallanDetailsModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                data={selectedChallan}
            />
        </div>
    );
};

export default DeliveryChallanTable;
