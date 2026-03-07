import React from 'react';
import StatsSection from '../components/StatsSection';
import Filters from '../components/Filters';
import LeadTable from '../components/LeadTable';

const LeadEnquiryPage = () => {
    return (
        <div className="page-container">
            <Filters />
            <StatsSection />
            <LeadTable />
        </div>
    );
};

export default LeadEnquiryPage;
