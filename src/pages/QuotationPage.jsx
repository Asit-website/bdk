import React from 'react';
import QuotationFilters from '../components/QuotationFilters';
import QuotationStats from '../components/QuotationStats';
import QuotationTable from '../components/QuotationTable';
import './AddPurchaseBillPage.css'; // Reusing common layout styles

const QuotationPage = () => {
    return (
        <div className="page-container">
            <QuotationFilters />
            <QuotationStats />
            <QuotationTable />
        </div>
    );
};

export default QuotationPage;
