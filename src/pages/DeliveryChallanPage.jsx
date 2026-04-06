import DeliveryChallanFilters from '../components/DeliveryChallanFilters';
import DeliveryChallanStats from '../components/DeliveryChallanStats';
import DeliveryChallanTable from '../components/DeliveryChallanTable';
import './AddPurchaseBillPage.css'; // Common layout styles

const DeliveryChallanPage = () => {
    return (
        <div className="page-container">
            <DeliveryChallanFilters />
            <DeliveryChallanStats />
            <DeliveryChallanTable />
        </div>
    );
};

export default DeliveryChallanPage;
