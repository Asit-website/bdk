import React from 'react';
import OpeningStockFilters from '../components/OpeningStockFilters';
import OpeningStockStats from '../components/OpeningStockStats';
import OpeningStockTable from '../components/OpeningStockTable';

const OpeningStockPage = () => {
    return (
        <div className="page-container">
            <OpeningStockFilters />
            <OpeningStockStats />
            <OpeningStockTable />
        </div>
    );
};

export default OpeningStockPage;
