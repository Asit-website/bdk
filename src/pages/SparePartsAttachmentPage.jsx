import React from 'react';
import SparePartsAttachmentFilters from '../components/SparePartsAttachmentFilters';
import SparePartsAttachmentStats from '../components/SparePartsAttachmentStats';
import SparePartsAttachmentTable from '../components/SparePartsAttachmentTable';

const SparePartsAttachmentPage = () => {
    return (
        <div className="page-container">
            <SparePartsAttachmentFilters />
            <SparePartsAttachmentStats />
            <SparePartsAttachmentTable />
        </div>
    );
};

export default SparePartsAttachmentPage;
