import React from 'react';
import SparePartsSaleBillFilters from '../components/SparePartsSaleBillFilters';
import SaleBillStats from '../components/SaleBillStats';
import SparePartsSaleBillTable from '../components/SparePartsSaleBillTable';

const SparePartsSaleBillPage = () => {
    return (
        <div className="page-container">
            <SparePartsSaleBillFilters />
            <SaleBillStats />
            <SparePartsSaleBillTable />
        </div>
    );
};

export default SparePartsSaleBillPage;
