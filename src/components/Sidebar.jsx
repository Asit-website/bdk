import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  TrendingUp,
  Wrench,
  UserCircle,
  Database,
  ChevronDown,
  Menu
} from 'lucide-react';

import { useState } from "react";
import './Sidebar.css';

import { useLocation, NavLink } from 'react-router-dom';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const isItemActive = (item) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.subItems) {
      return item.subItems.some(sub => location.pathname === sub.path);
    }
    return false;
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    {
      icon: <Users size={20} />,
      label: 'LEAD/ENQUIRY',
      subItems: [
        { label: 'NEW ENTRY', path: '/' },
        { label: 'LEAD ASSIGN', path: '/assign' },
        { label: 'FOLLOW UP', path: '#' },
        { label: 'CONTACT LIST', path: '#' },
        { label: 'CAMPING', path: '#' }
      ]
    },
    { icon: <ShoppingCart size={20} />, label: 'PURCHASE' },
    { icon: <TrendingUp size={20} />, label: 'SALES' },
    { icon: <Wrench size={20} />, label: 'SERVICE' },
    { icon: <UserCircle size={20} />, label: 'ACCOUNT' },
    { icon: <UserCircle size={20} />, label: 'EMPLOYEE' },
    { icon: <Database size={20} />, label: 'MASTER' },
  ];

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
                  <ul className="sub-menu">
                    {item.subItems.map((sub, i) => (
                      <li key={i}>
                        <NavLink
                          to={sub.path}
                          end={sub.path === '/'}
                          className={({ isActive: isSubActive }) => {
                            // Avoid highlighting '#' as active
                            const actuallyActive = isSubActive && sub.path !== '#';
                            return `sub-menu-item ${actuallyActive ? 'active' : ''}`;
                          }}
                        >
                          {sub.label}
                        </NavLink>
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