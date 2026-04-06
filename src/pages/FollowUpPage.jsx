import React, { useState } from 'react';
import FollowUpFilters from '../components/FollowUpFilters';
import StatsSection from '../components/StatsSection';
import FollowUpTable from '../components/FollowUpTable';
import BulkFollowUpModal from '../components/BulkFollowUpModal';

const FollowUpPage = () => {
    const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

    return (
        <div className="page-container">
            <FollowUpFilters onBulkAction={() => setIsBulkModalOpen(true)} />
            <StatsSection title="Total Follow Up" />
            <FollowUpTable />

            <BulkFollowUpModal
                open={isBulkModalOpen}
                onClose={() => setIsBulkModalOpen(false)}
            />
        </div>
    );
};

export default FollowUpPage;
