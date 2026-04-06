import React from 'react';
import PurchaseOrderFilters from '../components/PurchaseOrderFilters';
import PurchaseOrderStats from '../components/PurchaseOrderStats';
import PurchaseOrderTable from '../components/PurchaseOrderTable';

const PurchaseOrderPage = () => {
    return (
        <div className="page-container">
            <PurchaseOrderFilters />
            <PurchaseOrderStats />
            <PurchaseOrderTable />
        </div>
    );
};

export default PurchaseOrderPage;
