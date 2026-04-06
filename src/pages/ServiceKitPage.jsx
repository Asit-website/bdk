import React from 'react';
import ServiceKitFilters from '../components/ServiceKitFilters';
import ServiceKitStats from '../components/ServiceKitStats';
import ServiceKitTable from '../components/ServiceKitTable';

const ServiceKitPage = () => {
    return (
        <div className="page-container">
            <ServiceKitFilters />
            <ServiceKitStats />
            <ServiceKitTable />
        </div>
    );
};

export default ServiceKitPage;
