import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  TrendingUp,
  Wrench,
  UserCircle,
  Database,
  ChevronDown,
  Menu,
  FileText
} from 'lucide-react';

import { useState, useEffect, useRef } from "react";
import './Sidebar.css';

import { useLocation, NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isCollapsed, toggleSidebar, onContactClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isItemActive = (item) => {
    if (item.path && location.pathname === item.path) return true;

    // Recursive check for sub-items
    const hasActiveSubItem = (items) => {
      if (!items) return false;
      return items.some(sub => {
        if (sub.path && location.pathname === sub.path && sub.path !== '#') return true;
        if (sub.subItems) return hasActiveSubItem(sub.subItems);
        return false;
      });
    };

    if (item.subItems) {
      if (hasActiveSubItem(item.subItems)) return true;

      // Special cases for Purchase (Add pages)
      const isWeederBill = item.label === 'Purchase' && location.pathname === '/purchase/add-bill';
      const isSpareBill = item.label === 'Purchase' && location.pathname === '/purchase/spare/add-bill';
      const isOtherBill = item.label === 'Purchase' && location.pathname === '/purchase/other/add-bill';
      const isStockAdd = item.label === 'Purchase' && location.pathname === '/purchase/stock/add';
      const isSparePartsStockAdd = item.label === 'Purchase' && location.pathname === '/purchase/spare-opening-stock/add';
      const isOrderAdd = item.label === 'Purchase' && location.pathname === '/purchase/order/add';
      const isReturnAdd = item.label === 'Purchase' && location.pathname === '/purchase/return/add';
      const isAdjustAdd = item.label === 'Purchase' && location.pathname === '/purchase/adjustment/add';
      const isServiceKitAdd = item.label === 'Purchase' && location.pathname === '/purchase/service-kit/add';
      const isLocationAssignAdd = item.label === 'Purchase' && location.pathname === '/purchase/location-assign/add';
      const isSparePartsOrderAdd = item.label === 'Purchase' && location.pathname === '/purchase/spare-parts/add-order';
      const isSalesPath = item.label === 'Sales' && (location.pathname.startsWith('/sales') || location.pathname.includes('/sales/spare/estimate/add') || location.pathname.includes('/sales/spare/challan/add'));
      const isServicePath = item.label === 'Service' && location.pathname.startsWith('/service');
      const isEmployeeProfilePath = item.label === 'Employee' && location.pathname.startsWith('/employee/profile');

      return isWeederBill || isSpareBill || isOtherBill || isStockAdd || isSparePartsStockAdd || isOrderAdd || isReturnAdd || isAdjustAdd || isServiceKitAdd || isLocationAssignAdd || isSparePartsOrderAdd || isSalesPath || isServicePath || isEmployeeProfilePath;
    }
    return false;
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    {
      icon: <Users size={20} />,
      label: 'Lead/Enquiry',
      subItems: [
        { label: 'New Entry', path: '/' },
        { label: 'Lead Assign', path: '/assign' },
        { label: 'Follow Up', path: '/follow-up' },
        { label: 'Contact List', path: '#', onClick: onContactClick },
        { label: 'Camping', path: '/camping' }
      ]
    },
    {
      icon: <ShoppingCart size={20} />,
      label: 'Purchase',
      subItems: [
        { label: 'Weeder', path: '/purchase/weeder' },
        { label: 'Spare Parts/Attachment', path: '/purchase/spare' },
        { label: 'Other Item', path: '/purchase/other' },
        { label: 'Opening Stock', path: '/purchase/stock' },
        { label: 'Spare Parts Opening Stock', path: '/purchase/spare-opening-stock' },
        { label: 'Purchase Order', path: '/purchase/order' },
        { label: 'Spare Parts', path: '/purchase/spare-parts' },
        { label: 'Purchase Return', path: '/purchase/return' },
        { label: 'Stock Adjustment', path: '/purchase/adjustment' },
        { label: 'Stock Transfer (In)', path: '/purchase/transfer' },
        { label: 'Service Kit', path: '/purchase/service-kit' },
        { label: 'Product Location Assign', path: '/purchase/location-assign' }
      ]
    },
    {
      icon: <TrendingUp size={20} />,
      label: 'Sales',
      subItems: [
        {
          label: 'WEEDER',
          subItems: [
            { label: 'Booking', path: '/sales/weeder/booking' },
            { label: 'Quotation', path: '/sales/weeder/quotation' },
            { label: 'Sales Challan', path: '/sales/weeder/challan' },
            { label: 'Sale Bill', path: '/sales/weeder/bill' },
            { label: 'Delivery Challan', path: '/sales/weeder/delivery' },
            { label: 'Training & Warranty', path: '/sales/weeder/warranty' },
          ]
        },
        {
          label: 'SPARE PARTS & ATTACHMENT',
          subItems: [
            { label: 'Estimate', path: '/sales/spare/estimate' },
            { label: 'Counter Challan', path: '/sales/spare/challan' },
            { label: 'Sale Bill', path: '/sales/spare/bill' },
          ]
        },
        { label: 'Stock Transfer (Out)', path: '/sales/stock-transfer-out' },
      ]
    },
    {
      icon: <Wrench size={20} />,
      label: 'Service',
      subItems: [
        { label: 'Dashboard', path: '/service/dashboard' },
        { label: 'Parts Enquiry', path: '/service/parts-enquiry' },
        { label: 'Service Booking', path: '/service/booking' },
        { label: 'Machanic Assign', path: '/service/mechanic-assign' },
        { label: 'Machanic Stock Assign', path: '/service/mechanic-stock-assign' },
        { label: 'Job Card', path: '/service/job-card' },
        { label: 'Material Issue', path: '/service/material-issue' },
        { label: 'Job Close/Bill', path: '/service/job-close' },
        { label: 'PDI', path: '/service/pdi' },
        { label: 'Warranty', path: '/service/warranty' },
      ]
    },
    {
      icon: <UserCircle size={20} />,
      label: 'Account',
      subItems: [
        { label: 'Payment In', path: '/account/payment-in' },
        { label: 'Payment Out', path: '/account/payment-out' },
        { label: 'Credit Note', path: '/account/credit-note' },
        { label: 'Debit Note', path: '/account/debit-note' },
        { label: 'Party To Party Transfer', path: '/account/party-transfer' },
        { label: 'Expense', path: '/account/expense' },
        { label: 'Overdue Party', path: '/account/overdue-party' },
        { label: 'Credit/Discount Request', path: '/account/credit-discount' },
      ]
    },
    {
      icon: <UserCircle size={20} />,
      label: 'Employee',
      subItems: [
        { label: 'Employee Attendance', path: '/employee/attendance' },
        { label: 'Live Location', path: '/employee/live-location' },
        { label: 'Employee Payroll', path: '/employee/payroll' },
      ]
    },
    {
      icon: <Database size={20} />,
      label: 'Master',
      subItems: [
        {
          label: 'Item Master',
          subItems: [
            { label: 'Product Master', path: '/master/item/product' },
            { label: 'Spare Parts Master', path: '/master/item/spare-parts' },
            { label: 'Product Category Master', path: '/master/item/category' },
            { label: 'Item Type Master', path: '/master/item/type' },
            { label: 'UOM Master', path: '/master/item/uom' },
            { label: 'Product Sale Rate & GST Master', path: '/master/item/sale-rate' },
            { label: 'Item Sale Rate & GST Master', path: '/master/item/item-sale-rate' },
            { label: 'Wheel Master', path: '/master/item/wheel' }
          ]
        },
        {
          label: 'Location Master',
          subItems: [
            { label: 'Branch Location Master', path: '/master/location/branch' },
            { label: 'Rack Master', path: '/master/location/rack' },
            { label: 'Bin Master', path: '/master/location/bin' },
            { label: 'Area Master', path: '/master/location/area' },
            { label: 'Location Type Master', path: '/master/location/type' }
          ]
        },
        {
          label: 'Service Master',
          subItems: [
            { label: 'Service Head Master', path: '/master/service/head' },
            { label: 'Service Type Master', path: '/master/service/type' },
            { label: 'Job Type Master', path: '/master/service/job-type' },
            { label: 'Issue Type Master', path: '/master/service/issue-type' },
            { label: 'Claim Type Master', path: '/master/service/claim-type' }
          ]
        },
        {
          label: 'Account Master',
          subItems: [
            { label: 'Ledger Account New', path: '/master/account/ledger' },
            { label: 'Payment In Purpuse', path: '/master/account/purpuse' },
            { label: 'Payment Out Purpuse', path: '/master/account/purpuse-out' },
            { label: 'Payment Type', path: '/master/account/payment-type' },
            { label: 'Expence Category', path: '/master/account/expense-category' }
          ]
        },
        {
          label: 'Employee Master',
          path: '/master/employee',
          subItems: [
            { label: 'ATTENDANCE DETAILS', path: '/master/employee/attendance' },
            { label: 'SALLARY DETAILS', path: '/master/employee/salary' },
            { label: 'LEAVE & BALANCE DETAILS', path: '/master/employee/leave' },
            { label: 'PANALTY & OVERTIME DETAILS', path: '/master/employee/penalty' }
          ]
        },
      ]
    },
    { icon: <FileText size={20} />, label: 'Report' },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const lastPath = useRef(null);

  // Sync open menu with current route on mount and navigation
  useEffect(() => {
    // Only auto-open if we navigated to a NEW path or on initial mount
    const hasNavigated = lastPath.current !== location.pathname;

    if (hasNavigated) {
      const activeIndex = menuItems.findIndex(item => isItemActive(item));
      if (activeIndex !== -1) {
        setOpenMenu(activeIndex);

        // Auto-open nested sub-menus if route matches
        const activeItem = menuItems[activeIndex];
        if (activeItem.subItems) {
          activeItem.subItems.forEach(sub => {
            if (sub.subItems) {
              const isSubActive = sub.subItems.some(nested => nested.path === location.pathname);
              if (isSubActive) {
                setOpenSubMenu(sub.label);
              }
            }
          });
        }
      }
      lastPath.current = location.pathname;
    }
  }, [location.pathname]);

  const handleMenuClick = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-box">
          {!isCollapsed && <span className="logo-text">BDK</span>}
        </div>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isActive = isItemActive(item);

          if (hasSubItems) {
            return (
              <div key={index} className="menu-group">
                <div
                  className={`menu-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleMenuClick(index)}
                >
                  <span className="menu-icon">{item.icon}</span>
                  {!isCollapsed && <span className="menu-label">{item.label}</span>}
                  {!isCollapsed && (
                    <ChevronDown
                      size={14}
                      className={`chevron ${openMenu === index ? "rotate" : ""}`}
                    />
                  )}
                </div>

                {!isCollapsed && openMenu === index && (
                  <ul className="sidebar-sub-menu">
                    {item.subItems.map((sub, i) => (
                      <li key={i}>
                        {sub.subItems ? (
                          <div className="nested-menu-group">
                            <div
                              className={`sub-menu-divider clickable ${location.pathname === sub.path ? 'active' : ''}`}
                              onClick={() => {
                                setOpenSubMenu(openSubMenu === sub.label ? null : sub.label);
                                if (sub.path) navigate(sub.path);
                              }}
                            >
                              {sub.label}
                              <ChevronDown
                                size={12}
                                className={`chevron ${openSubMenu === sub.label ? "rotate" : ""}`}
                              />
                            </div>
                            {openSubMenu === sub.label && (
                              <ul className="sidebar-nested-sub-menu">
                                {sub.subItems.map((nested, j) => (
                                  <li key={j}>
                                  <NavLink
                                      to={nested.path}
                                      className={({ isActive: isNestedActive }) => {
                                        const isServiceDashboardAlias = nested.label === 'Dashboard'
                                          && (location.pathname.startsWith('/service/ongoing') || location.pathname.startsWith('/service/pending'));
                                        return `nested-sub-menu-item ${(isNestedActive || isServiceDashboardAlias) ? 'active' : ''}`;
                                      }}
                                    >
                                      {nested.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : sub.isDivider ? (
                          <div className="sub-menu-divider">
                            {sub.label}
                          </div>
                        ) : sub.onClick ? (
                          <div
                            className="sub-menu-item"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              sub.onClick();
                            }}
                          >
                            {sub.label}
                          </div>
                        ) : sub.path === '#' ? (
                          <div className="sub-menu-item">{sub.label}</div>
                        ) : (
                        <NavLink
                            to={sub.path}
                            className={({ isActive: isSubActive }) => {
                                        const isServiceDashboardAlias = sub.label === 'Dashboard'
                                          && (location.pathname.startsWith('/service/ongoing')
                                            || location.pathname.startsWith('/service/pending')
                                            || location.pathname.startsWith('/service/complete'));
                                        const isJobCardAlias = sub.label === 'Job Card'
                                          && location.pathname.startsWith('/service/job-card');
                                        const isMaterialIssueAlias = sub.label === 'Material Issue'
                                          && location.pathname.startsWith('/service/material-issue');
                                        const isEmployeeAttendanceAlias = sub.label === 'Employee Attendance'
                                          && location.pathname.startsWith('/employee/profile');
                                        return `sub-menu-item ${(isSubActive || isServiceDashboardAlias || isJobCardAlias || isMaterialIssueAlias || isEmployeeAttendanceAlias) ? 'active' : ''}`;
                                      }}
                          >
                            {sub.label}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={index}
              to={item.path || '#'}
              className={({ isActive: isSingleActive }) => `menu-item ${isSingleActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : ''}
            >
              <span className="menu-icon">{item.icon}</span>
              {!isCollapsed && <span className="menu-label">{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
