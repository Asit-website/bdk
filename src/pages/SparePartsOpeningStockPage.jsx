import React from 'react';
import SparePartsOpeningStockFilters from '../components/SparePartsOpeningStockFilters';
import SparePartsOpeningStockStats from '../components/SparePartsOpeningStockStats';
import SparePartsOpeningStockTable from '../components/SparePartsOpeningStockTable';

const SparePartsOpeningStockPage = () => {
    return (
        <div className="page-container">
            <SparePartsOpeningStockFilters />
            <SparePartsOpeningStockStats />
            <SparePartsOpeningStockTable />
        </div>
    );
};

export default SparePartsOpeningStockPage;
