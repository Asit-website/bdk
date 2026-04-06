import SaleBillFilters from '../components/SaleBillFilters';
import SaleBillStats from '../components/SaleBillStats';
import SaleBillTable from '../components/SaleBillTable';
import './AddPurchaseBillPage.css'; // Reusing common layout styles

const SaleBillPage = () => {
    return (
        <div className="page-container">
            <SaleBillFilters />
            <SaleBillStats />
            <SaleBillTable />
        </div>
    );
};

export default SaleBillPage;
