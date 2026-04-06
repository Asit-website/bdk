import React from 'react';
import StockTransferInFilters from '../components/StockTransferInFilters';
import StockTransferInStats from '../components/StockTransferInStats';
import StockTransferInTable from '../components/StockTransferInTable';

const StockTransferInPage = () => {
    return (
        <div className="page-container">
            <StockTransferInFilters />
            <StockTransferInStats />
            <StockTransferInTable />
        </div>
    );
};

export default StockTransferInPage;
