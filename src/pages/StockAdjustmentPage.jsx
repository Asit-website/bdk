import React from 'react';
import StockAdjustmentFilters from '../components/StockAdjustmentFilters';
import StockAdjustmentStats from '../components/StockAdjustmentStats';
import StockAdjustmentTable from '../components/StockAdjustmentTable';

const StockAdjustmentPage = () => {
    return (
        <div className="page-container">
            <StockAdjustmentFilters />
            <StockAdjustmentStats />
            <StockAdjustmentTable />
        </div>
    );
};

export default StockAdjustmentPage;
