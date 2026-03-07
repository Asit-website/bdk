import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <div className={`app-container ${isCollapsed ? 'collapsed-sidebar' : ''}`}>
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <Header />
                <main className="content-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
