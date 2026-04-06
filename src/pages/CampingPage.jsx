import React, { useState } from 'react';
import CampingFilters from '../components/CampingFilters';
import StatsSection from '../components/StatsSection';
import CampingTable from '../components/CampingTable';
import CampingEntryModal from '../components/CampingEntryModal';

const CampingPage = () => {
    const [isEntryModalOpen, setIsEntryModalOpen] = useState(false);

    return (
        <div className="page-container">
            <CampingFilters onNewEntry={() => setIsEntryModalOpen(true)} />
            <StatsSection title="Total Campaning" />
            <CampingTable />

            <CampingEntryModal
                open={isEntryModalOpen}
                onClose={() => setIsEntryModalOpen(false)}
            />
        </div>
    );
};

export default CampingPage;
