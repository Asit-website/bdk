import React from 'react';
import EstimateFilters from '../components/EstimateFilters';
import EstimateStats from '../components/EstimateStats';
import EstimateTable from '../components/EstimateTable';
import './AddPurchaseBillPage.css'; // Consistent layout styles

const EstimatePage = () => {
    return (
        <div className="page-container">
            <EstimateFilters />
            <EstimateStats />
            <EstimateTable />
        </div>
    );
};

export default EstimatePage;
