import React, { useState } from 'react';
import WeederFilters from '../components/WeederFilters';
import WeederTable from '../components/WeederTable';
import WeederStats from '../components/WeederStats';
import AdminLayout from '../components/AdminLayout';

const WeederPage = () => {
    return (
        <div className="page-container">
            <WeederFilters />
            <WeederStats />
            <WeederTable />
        </div>
    );
};

export default WeederPage;
