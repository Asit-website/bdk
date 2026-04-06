import React from 'react';
import PurchaseReturnFilters from '../components/PurchaseReturnFilters';
import PurchaseReturnStats from '../components/PurchaseReturnStats';
import PurchaseReturnTable from '../components/PurchaseReturnTable';

const PurchaseReturnPage = () => {
    return (
        <div className="page-container">
            <PurchaseReturnFilters />
            <PurchaseReturnStats />
            <PurchaseReturnTable />
        </div>
    );
};

export default PurchaseReturnPage;
