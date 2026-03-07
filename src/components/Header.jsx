import React from 'react';
import { Search, Globe, Bell, User, MessageSquare } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <div className="welcome-box">
                    <span className="welcome-icon">🏃</span>
                    <span className="welcome-text">Welcome To <strong>BDK AUTOMOBILE</strong></span>
                </div>
            </div>

            <div className="header-right">
                <div className="search-container">
                    <input type="text" placeholder="Search Here ..." className="header-search" />
                    <Search size={18} className="search-icon" />
                </div>

                <div className="header-actions">
                    <div className="action-item">
                        <Globe size={18} />
                        <span>English</span>
                    </div>
                    <div className="action-item badge-item">
                        <MessageSquare size={18} />
                        <span className="badge">1</span>
                    </div>
                    <div className="action-item badge-item">
                        <Bell size={18} />
                        <span className="badge primary">4</span>
                    </div>
                    <div className="user-profile">
                        <div className="user-info">
                            <span className="user-name">Kazi Fahim</span>
                            <span className="user-role">Admin</span>
                        </div>
                        <div className="user-avatar">
                            <User size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
