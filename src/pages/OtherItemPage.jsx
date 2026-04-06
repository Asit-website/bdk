import React from 'react';
import OtherItemFilters from '../components/OtherItemFilters';
import OtherItemStats from '../components/OtherItemStats';
import OtherItemTable from '../components/OtherItemTable';

const OtherItemPage = () => {
    return (
        <div className="page-container">
            <OtherItemFilters />
            <OtherItemStats />
            <OtherItemTable />
        </div>
    );
};

export default OtherItemPage;
