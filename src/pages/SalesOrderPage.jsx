import React from 'react';
import SalesOrderFilters from '../components/SalesOrderFilters';
import SalesOrderStats from '../components/SalesOrderStats';
import SalesOrderTable from '../components/SalesOrderTable';
import './AddPurchaseBillPage.css'; // Reusing common layout styles

const SalesOrderPage = () => {
    return (
        <div className="page-container">
            <SalesOrderFilters />
            <SalesOrderStats />
            <SalesOrderTable />
        </div>
    );
};

export default SalesOrderPage;
