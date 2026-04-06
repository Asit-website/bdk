import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ContactListModal from './ContactListModal';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <div className={`app-container ${isCollapsed ? 'collapsed-sidebar' : ''}`}>
            <Sidebar
                isCollapsed={isCollapsed}
                toggleSidebar={toggleSidebar}
                onContactClick={() => setIsContactModalOpen(true)}
            />
            <div className="main-content">
                <Header />
                <main className="content-area">
                    {children}
                </main>
            </div>

            <ContactListModal
                open={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
};

export default AdminLayout;
