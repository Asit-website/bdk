import React from 'react';
import CounterChallanFilters from '../components/CounterChallanFilters';
import CounterChallanStats from '../components/CounterChallanStats';
import CounterChallanTable from '../components/CounterChallanTable';
import './AddPurchaseBillPage.css';

const CounterChallanPage = () => {
    return (
        <div className="page-container">
            <CounterChallanFilters />
            <CounterChallanStats />
            <CounterChallanTable />
        </div>
    );
};

export default CounterChallanPage;
