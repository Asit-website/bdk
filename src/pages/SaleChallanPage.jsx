import SaleChallanFilters from '../components/SaleChallanFilters';
import SaleChallanStats from '../components/SaleChallanStats';
import SaleChallanTable from '../components/SaleChallanTable';
import './AddPurchaseBillPage.css'; // Reusing common layout styles

const SaleChallanPage = () => {
    return (
        <div className="page-container">
            <SaleChallanFilters />
            <SaleChallanStats />
            <SaleChallanTable />
        </div>
    );
};

export default SaleChallanPage;
