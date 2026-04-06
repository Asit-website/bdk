import React, { useState } from 'react';
import TrainingWarrantyFilters from '../components/TrainingWarrantyFilters';
import TrainingWarrantyStats from '../components/TrainingWarrantyStats';
import TrainingWarrantyTable from '../components/TrainingWarrantyTable';
import AddTrainingWarrantyModal from '../components/AddTrainingWarrantyModal';
import './AddPurchaseBillPage.css'; // Common layout styles

const TrainingWarrantyPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="page-container">
            <TrainingWarrantyFilters openModal={() => setIsModalOpen(true)} />
            <TrainingWarrantyStats />
            <TrainingWarrantyTable />
            
            {isModalOpen && (
                <AddTrainingWarrantyModal closeModal={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};

export default TrainingWarrantyPage;
