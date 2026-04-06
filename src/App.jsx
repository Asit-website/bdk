import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import LeadEnquiryPage from './pages/LeadEnquiryPage'
import LeadAssignPage from './pages/LeadAssignPage'
import FollowUpPage from './pages/FollowUpPage'
import CampingPage from './pages/CampingPage'
import WeederPage from './pages/WeederPage'
import AddPurchaseBillPage from './pages/AddPurchaseBillPage'
import SparePartsAttachmentPage from './pages/SparePartsAttachmentPage'
import SparePartsPurchaseBillPage from './pages/SparePartsPurchaseBillPage'
import OtherItemPage from './pages/OtherItemPage'
import OtherItemPurchaseBillPage from './pages/OtherItemPurchaseBillPage'
import OpeningStockPage from './pages/OpeningStockPage'
import AddOpeningStockPage from './pages/AddOpeningStockPage'
import SparePartsOpeningStockPage from './pages/SparePartsOpeningStockPage'
import AddSparePartsOpeningStockPage from './pages/AddSparePartsOpeningStockPage'
import PurchaseOrderPage from './pages/PurchaseOrderPage'
import AddPurchaseOrderPage from './pages/AddPurchaseOrderPage'
import PurchaseReturnPage from './pages/PurchaseReturnPage'
import AddPurchaseReturnPage from './pages/AddPurchaseReturnPage'
import StockAdjustmentPage from './pages/StockAdjustmentPage'
import AddStockAdjustmentPage from './pages/AddStockAdjustmentPage'
import StockTransferInPage from './pages/StockTransferInPage'
import AddStockInPage from './pages/AddStockInPage'
import ServiceKitPage from './pages/ServiceKitPage'
import AddServiceKitPage from './pages/AddServiceKitPage'
import PurchaseLocationAssignPage from './pages/PurchaseLocationAssignPage'
import AddPurchaseLocationAssignPage from './pages/AddPurchaseLocationAssignPage'
import SparePartsPage from './pages/SparePartsPage'
import AddSparePartsPurchaseOrderPage from './pages/AddSparePartsPurchaseOrderPage'
import BookingPage from './pages/BookingPage'
import QuotationPage from './pages/QuotationPage'
import AddQuotationPage from './pages/AddQuotationPage'
import SaleChallanPage from './pages/SaleChallanPage'
import AddSaleChallanPage from './pages/AddSaleChallanPage'
import SaleBillPage from './pages/SaleBillPage'
import AddSaleBillPage from './pages/AddSaleBillPage'
import SparePartsSaleBillPage from './pages/SparePartsSaleBillPage'
import AddSparePartsSaleBillPage from './pages/AddSparePartsSaleBillPage'
import DeliveryChallanPage from './pages/DeliveryChallanPage'
import AddDeliveryBillPage from './pages/AddDeliveryBillPage'
import TrainingWarrantyPage from './pages/TrainingWarrantyPage'
import EstimatePage from './pages/EstimatePage'
import AddEstimatePage from './pages/AddEstimatePage'
import CounterChallanPage from './pages/CounterChallanPage'
import AddCounterChallanPage from './pages/AddCounterChallanPage'
import ServiceDashboardPage from './pages/ServiceDashboardPage'
import ServicePartsEnquiryPage from './pages/ServicePartsEnquiryPage'
import ServiceOngoingPage from './pages/ServiceOngoingPage'
import ServicePendingPage from './pages/ServicePendingPage'
import ServiceCompletePage from './pages/ServiceCompletePage'
import ServiceBookingPage from './pages/ServiceBookingPage'
import ServiceMechanicAssignPage from './pages/ServiceMechanicAssignPage'
import ServiceMechanicStockAssignPage from './pages/ServiceMechanicStockAssignPage'
import ServiceJobCardPage from './pages/ServiceJobCardPage'
import ServiceJobCardFormPage from './pages/ServiceJobCardFormPage'
import ServiceMaterialIssuePage from './pages/ServiceMaterialIssuePage'
import ServiceMaterialIssueFormPage from './pages/ServiceMaterialIssueFormPage'
import ServiceJobClosePage from './pages/ServiceJobClosePage'
import ServiceJobCloseFormPage from './pages/ServiceJobCloseFormPage'
import ServicePdiPage from './pages/ServicePdiPage'
import ServicePdiFormPage from './pages/ServicePdiFormPage'
import ServiceWarrantyPage from './pages/ServiceWarrantyPage'
import AccountPaymentInPage from './pages/AccountPaymentInPage'
import AccountPaymentOutPage from './pages/AccountPaymentOutPage'
import AccountOverduePartyPage from './pages/AccountOverduePartyPage'
import AccountCreditDiscountPage from './pages/AccountCreditDiscountPage'
import AccountCreditNotePage from './pages/AccountCreditNotePage'
import AddCreditNotePage from './pages/AddCreditNotePage'
import AccountDebitNotePage from './pages/AccountDebitNotePage'
import AddDebitNotePage from './pages/AddDebitNotePage'
import AccountPartyTransferPage from './pages/AccountPartyTransferPage'
import AccountExpensePage from './pages/AccountExpensePage'
import AddExpensePage from './pages/AddExpensePage'
import EmployeeAttendancePage from './pages/EmployeeAttendancePage'
import EmployeeOntimeJoiningPage from './pages/EmployeeOntimeJoiningPage'
import EmployeeLateJoiningPage from './pages/EmployeeLateJoiningPage'
import EmployeeAbsentPage from './pages/EmployeeAbsentPage'
import EmployeeTotalPage from './pages/EmployeeTotalPage'
import EmployeeProfilePage from './pages/EmployeeProfilePage'
import EmployeeLiveLocationPage from './pages/EmployeeLiveLocationPage'
import EmployeePayrollPage from './pages/EmployeePayrollPage'
import EmployeeSalaryProfilePage from './pages/EmployeeSalaryProfilePage'
import EmployeeVerifyAttendancePage from './pages/EmployeeVerifyAttendancePage'
import EmployeeVerifySalaryPage from './pages/EmployeeVerifySalaryPage'
import EmployeeMasterPage from './pages/EmployeeMasterPage'
import EmployeeAttendanceDetailsPage from './pages/EmployeeAttendanceDetailsPage'
import EmployeeWorkTimingsPage from './pages/EmployeeWorkTimingsPage'
import EmployeeAttendanceModesPage from './pages/EmployeeAttendanceModesPage'
import EmployeeAutomationRulesPage from './pages/EmployeeAutomationRulesPage'
import EmployeeSalaryDetailsPage from './pages/EmployeeSalaryDetailsPage'
import EmployeeLeaveBalancePage from './pages/EmployeeLeaveBalancePage'
import EmployeeLeavePolicyPage from './pages/EmployeeLeavePolicyPage'
import EmployeeLeaveBalanceConfigPage from './pages/EmployeeLeaveBalanceConfigPage'
import EmployeePenaltyOvertimePage from './pages/EmployeePenaltyOvertimePage'
import EmployeeEarlyLeavingPolicyPage from './pages/EmployeeEarlyLeavingPolicyPage'
import EmployeeLateComingPolicyPage from './pages/EmployeeLateComingPolicyPage'
import EmployeeOvertimePolicyPage from './pages/EmployeeOvertimePolicyPage'
import StockTransferOutPage from './pages/StockTransferOutPage'
import AddStockTransferOutPage from './pages/AddStockTransferOutPage'
import ProductMasterPage from './pages/ProductMasterPage'
import ProductAddPage from './pages/ProductAddPage'
import SparePartsMasterPage from './pages/SparePartsMasterPage'
import SparePartsAddPage from './pages/SparePartsAddPage'
import ProductCategoryMasterPage from './pages/ProductCategoryMasterPage'
import ItemTypeMasterPage from './pages/ItemTypeMasterPage'
import UomMasterPage from './pages/UomMasterPage'
import SaleRateGstMasterPage from './pages/SaleRateGstMasterPage'
import ItemSaleRateGstMasterPage from './pages/ItemSaleRateGstMasterPage'
import WheelMasterPage from './pages/WheelMasterPage'
import BranchLocationMasterPage from './pages/BranchLocationMasterPage'
import BranchLocationAddPage from './pages/BranchLocationAddPage'
import RackMasterPage from './pages/RackMasterPage'
import BinMasterPage from './pages/BinMasterPage'
import AreaMasterPage from './pages/AreaMasterPage'
import LocationTypeMasterPage from './pages/LocationTypeMasterPage'
import ServiceHeadMasterPage from './pages/ServiceHeadMasterPage'
import ServiceTypeMasterPage from './pages/ServiceTypeMasterPage'
import JobTypeMasterPage from './pages/JobTypeMasterPage'
import IssueTypeMasterPage from './pages/IssueTypeMasterPage'
import ClaimTypeMasterPage from './pages/ClaimTypeMasterPage'
import LedgerAccountMasterPage from './pages/LedgerAccountMasterPage'
import LedgerAccountAddPage from './pages/LedgerAccountAddPage'
import PaymentInPurpuseMasterPage from './pages/PaymentInPurpuseMasterPage'
import PaymentOutPurpuseMasterPage from './pages/PaymentOutPurpuseMasterPage'
import PaymentTypeMasterPage from './pages/PaymentTypeMasterPage'
import ExpenseCategoryMasterPage from './pages/ExpenseCategoryMasterPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<LeadEnquiryPage />} />
          <Route path="/assign" element={<LeadAssignPage />} />
          <Route path="/follow-up" element={<FollowUpPage />} />
          <Route path="/camping" element={<CampingPage />} />
          <Route path="/purchase/weeder" element={<WeederPage />} />
          <Route path="/purchase/spare" element={<SparePartsAttachmentPage />} />
          <Route path="/purchase/other" element={<OtherItemPage />} />
          <Route path="/purchase/stock" element={<OpeningStockPage />} />
          <Route path="/purchase/spare-opening-stock" element={<SparePartsOpeningStockPage />} />
          <Route path="/purchase/spare-opening-stock/add" element={<AddSparePartsOpeningStockPage />} />
          <Route path="/purchase/stock/add" element={<AddOpeningStockPage />} />
          <Route path="/purchase/order" element={<PurchaseOrderPage />} />
          <Route path="/purchase/order/add" element={<AddSparePartsPurchaseOrderPage />} />
          <Route path="/purchase/return" element={<PurchaseReturnPage />} />
          <Route path="/purchase/return/add" element={<AddPurchaseReturnPage />} />
          <Route path="/purchase/adjustment" element={<StockAdjustmentPage />} />
          <Route path="/purchase/adjustment/add" element={<AddStockAdjustmentPage />} />
          <Route path="/purchase/transfer" element={<StockTransferInPage />} />
          <Route path="/purchase/transfer/add" element={<AddStockInPage />} />
          <Route path="/purchase/service-kit" element={<ServiceKitPage />} />
          <Route path="/purchase/service-kit/add" element={<AddServiceKitPage />} />
          <Route path="/purchase/location-assign" element={<PurchaseLocationAssignPage />} />
          <Route path="/purchase/location-assign/add" element={<AddPurchaseLocationAssignPage />} />
          <Route path="/purchase/spare-parts" element={<SparePartsPage />} />
          <Route path="/purchase/spare-parts/add-order" element={<AddPurchaseOrderPage />} />
          <Route path="/purchase/spare/add-bill" element={<SparePartsPurchaseBillPage />} />
          <Route path="/purchase/other/add-bill" element={<OtherItemPurchaseBillPage />} />
          <Route path="/purchase/add-bill" element={<AddPurchaseBillPage />} />
          <Route path="/sales/weeder/booking" element={<BookingPage />} />
          <Route path="/sales/weeder/quotation" element={<QuotationPage />} />
          <Route path="/sales/weeder/quotation/add" element={<AddQuotationPage />} />
          <Route path="/sales/weeder/challan" element={<SaleChallanPage />} />
          <Route path="/sales/weeder/challan/add" element={<AddSaleChallanPage />} />
          <Route path="/sales/weeder/bill" element={<SaleBillPage />} />
          <Route path="/sales/weeder/bill/add" element={<AddSaleBillPage />} />
          <Route path="/sales/weeder/delivery" element={<DeliveryChallanPage />} />
          <Route path="/sales/weeder/delivery/bill/add" element={<AddDeliveryBillPage />} />
          <Route path="/sales/weeder/warranty" element={<TrainingWarrantyPage />} />
          <Route path="/sales/spare/estimate" element={<EstimatePage />} />
          <Route path="/sales/spare/estimate/add" element={<AddEstimatePage />} />
          <Route path="/sales/spare/challan" element={<CounterChallanPage />} />
          <Route path="/sales/spare/challan/add" element={<AddCounterChallanPage />} />
          <Route path="/sales/spare/bill" element={<SparePartsSaleBillPage />} />
          <Route path="/sales/spare/bill/add" element={<AddSparePartsSaleBillPage />} />
          <Route path="/sales/stock-transfer-out" element={<StockTransferOutPage />} />
          <Route path="/sales/stock-transfer-out/add" element={<AddStockTransferOutPage />} />
          <Route path="/service/dashboard" element={<ServiceDashboardPage />} />
          <Route path="/service/parts-enquiry" element={<ServicePartsEnquiryPage />} />
          <Route path="/service/ongoing" element={<ServiceOngoingPage />} />
          <Route path="/service/pending" element={<ServicePendingPage />} />
          <Route path="/service/complete" element={<ServiceCompletePage />} />
          <Route path="/service/booking" element={<ServiceBookingPage />} />
          <Route path="/service/mechanic-assign" element={<ServiceMechanicAssignPage />} />
          <Route path="/service/mechanic-stock-assign" element={<ServiceMechanicStockAssignPage />} />
          <Route path="/service/job-card" element={<ServiceJobCardPage />} />
          <Route path="/service/job-card/add" element={<ServiceJobCardFormPage />} />
          <Route path="/service/material-issue" element={<ServiceMaterialIssuePage />} />
          <Route path="/service/material-issue/add" element={<ServiceMaterialIssueFormPage />} />
          <Route path="/service/job-close" element={<ServiceJobClosePage />} />
          <Route path="/service/job-close/add" element={<ServiceJobCloseFormPage />} />
          <Route path="/service/pdi" element={<ServicePdiPage />} />
          <Route path="/service/pdi/add" element={<ServicePdiFormPage />} />
          <Route path="/service/warranty" element={<ServiceWarrantyPage />} />
          <Route path="/account/payment-in" element={<AccountPaymentInPage />} />
          <Route path="/account/payment-out" element={<AccountPaymentOutPage />} />
          <Route path="/account/overdue-party" element={<AccountOverduePartyPage />} />
          <Route path="/account/credit-discount" element={<AccountCreditDiscountPage />} />
          <Route path="/account/credit-note" element={<AccountCreditNotePage />} />
          <Route path="/account/credit-note/add" element={<AddCreditNotePage />} />
          <Route path="/account/debit-note" element={<AccountDebitNotePage />} />
          <Route path="/account/debit-note/add" element={<AddDebitNotePage />} />
          <Route path="/account/party-transfer" element={<AccountPartyTransferPage />} />
          <Route path="/account/expense" element={<AccountExpensePage />} />
          <Route path="/account/expense/add" element={<AddExpensePage />} />
          <Route path="/employee/attendance" element={<EmployeeAttendancePage />} />
          <Route path="/employee/attendance/ontime" element={<EmployeeOntimeJoiningPage />} />
          <Route path="/employee/attendance/late" element={<EmployeeLateJoiningPage />} />
          <Route path="/employee/attendance/absent" element={<EmployeeAbsentPage />} />
          <Route path="/employee/attendance/total" element={<EmployeeTotalPage />} />
          <Route path="/employee/live-location" element={<EmployeeLiveLocationPage />} />
          <Route path="/employee/payroll" element={<EmployeePayrollPage />} />
          <Route path="/employee/payroll/salary/:id" element={<EmployeeSalaryProfilePage />} />
          <Route path="/employee/payroll/verify-attendance/:id" element={<EmployeeVerifyAttendancePage />} />
          <Route path="/employee/payroll/verify-salary/:id" element={<EmployeeVerifySalaryPage />} />
          <Route path="/employee/profile" element={<EmployeeProfilePage />} />
          <Route path="/master/employee" element={<EmployeeMasterPage />} />
          <Route path="/master/employee/attendance" element={<EmployeeAttendanceDetailsPage />} />
          <Route path="/master/employee/attendance/work-timings" element={<EmployeeWorkTimingsPage />} />
          <Route path="/master/employee/attendance/modes" element={<EmployeeAttendanceModesPage />} />
          <Route path="/master/employee/attendance/automation" element={<EmployeeAutomationRulesPage />} />
          <Route path="/master/employee/salary" element={<EmployeeSalaryDetailsPage />} />
          <Route path="/master/employee/leave" element={<EmployeeLeaveBalancePage />} />
          <Route path="/master/employee/leave/policy" element={<EmployeeLeavePolicyPage />} />
          <Route path="/master/employee/leave/balance" element={<EmployeeLeaveBalanceConfigPage />} />
          <Route path="/master/employee/penalty" element={<EmployeePenaltyOvertimePage />} />
          <Route path="/master/employee/penalty/early-leaving" element={<EmployeeEarlyLeavingPolicyPage />} />
          <Route path="/master/employee/penalty/late-coming" element={<EmployeeLateComingPolicyPage />} />
          <Route path="/master/employee/penalty/overtime" element={<EmployeeOvertimePolicyPage />} />
          <Route path="/master/item/category" element={<ProductCategoryMasterPage />} />
          <Route path="/master/item/type" element={<ItemTypeMasterPage />} />
          <Route path="/master/item/uom" element={<UomMasterPage />} />
          <Route path="/master/item/sale-rate" element={<SaleRateGstMasterPage />} />
          <Route path="/master/item/item-sale-rate" element={<ItemSaleRateGstMasterPage />} />
          <Route path="/master/item/wheel" element={<WheelMasterPage />} />
          <Route path="/master/location/branch" element={<BranchLocationMasterPage />} />
          <Route path="/master/location/branch/add" element={<BranchLocationAddPage />} />
          <Route path="/master/location/rack" element={<RackMasterPage />} />
          <Route path="/master/location/bin" element={<BinMasterPage />} />
          <Route path="/master/location/area" element={<AreaMasterPage />} />
          <Route path="/master/location/type" element={<LocationTypeMasterPage />} />
          <Route path="/master/service/head" element={<ServiceHeadMasterPage />} />
          <Route path="/master/service/type" element={<ServiceTypeMasterPage />} />
          <Route path="/master/service/job-type" element={<JobTypeMasterPage />} />
          <Route path="/master/service/issue-type" element={<IssueTypeMasterPage />} />
          <Route path="/master/service/claim-type" element={<ClaimTypeMasterPage />} />
          <Route path="/master/account/ledger" element={<LedgerAccountMasterPage />} />
          <Route path="/master/account/ledger/add" element={<LedgerAccountAddPage />} />
          <Route path="/master/account/purpuse" element={<PaymentInPurpuseMasterPage />} />
          <Route path="/master/account/purpuse-out" element={<PaymentOutPurpuseMasterPage />} />
          <Route path="/master/account/payment-type" element={<PaymentTypeMasterPage />} />
          <Route path="/master/account/expense-category" element={<ExpenseCategoryMasterPage />} />
          <Route path="/master/item/product" element={<ProductMasterPage />} />
          <Route path="/master/item/product/add" element={<ProductAddPage />} />
          <Route path="/master/item/spare-parts" element={<SparePartsMasterPage />} />
          <Route path="/master/item/spare-parts/add" element={<SparePartsAddPage />} />
        </Routes>


      </AdminLayout>
    </BrowserRouter>
  )
}

export default App
