import React from 'react';
import StatsSection from '../components/StatsSection';
import LeadAssignFilters from '../components/LeadAssignFilters';
import LeadAssignTable from '../components/LeadAssignTable';

const LeadAssignPage = () => {
    return (
        <div className="page-container">
            <LeadAssignFilters />
            <StatsSection />
            <LeadAssignTable />
        </div>
    );
};

export default LeadAssignPage;
