import React from 'react';
import BookingFilters from '../components/BookingFilters';
import BookingStats from '../components/BookingStats';
import BookingTable from '../components/BookingTable';
import { RefreshCcw, Maximize2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AddPurchaseBillPage.css'; // Reusing common layout styles

const BookingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <BookingFilters />
            <BookingStats />
            <BookingTable />
        </div>
    );
};

export default BookingPage;
