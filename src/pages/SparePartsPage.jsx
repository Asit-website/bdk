import React from 'react';
import SparePartsFilters from '../components/SparePartsFilters';
import SparePartsStats from '../components/SparePartsStats';
import SparePartsTable from '../components/SparePartsTable';

const SparePartsPage = () => {
    return (
        <div className="page-container">
            <SparePartsFilters />
            <SparePartsStats />
            <SparePartsTable />
        </div>
    );
};

export default SparePartsPage;
