import React, { useState } from 'react';
import { Search, Plus, MoreVertical, ChevronRight, Camera, QrCode, MapPin, Monitor, Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmployeeAttendanceModesPage.css';

const EmployeeAttendanceModesPage = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        staffApp: true,
        selfie: true,
        qr: false,
        gps: true,
        locationSource: 'anywhere'
    });

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="page-container">
            <div className="service-dashboard-top mb-16">
                <div className="service-dashboard-search">
                    <Search size={16} color="#64748b" />
                    <input type="text" placeholder="Search Transactions" />
                </div>

                <div className="filter-actions">
                    <button className="btn btn-new-service">+ Add New Service</button>
                    <button className="btn btn-sale">+ Add Sale</button>
                    <button className="btn btn-purchase">+ Add Purchase</button>
                    <button className="btn-icon"><Plus size={18} /></button>
                    <button className="btn-icon muted"><MoreVertical size={18} /></button>
                </div>
            </div>

            <div className="am-content-card">
                <div className="am-header">
                    <div className="am-breadcrumb">
                        <span className="crumb-inactive" onClick={() => navigate('/master/employee/attendance')}>Attendance Details</span>
                        <ChevronRight size={14} color="#94a3b8" />
                        <span className="crumb-active">Attendance Modes</span>
                    </div>
                </div>

                <div className="modes-container">
                    <div className="mode-row main-rule">
                        <div className="mode-info">
                            <span>Allow punch in from Staff App</span>
                        </div>
                        <label className="bdk-toggle">
                            <input 
                                type="checkbox" 
                                checked={settings.staffApp} 
                                onChange={() => toggleSetting('staffApp')} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>

                    <div className="mode-row">
                        <div className="mode-info">
                            <Camera size={20} color="#64748b" />
                            <span>Selfie Attendance</span>
                        </div>
                        <label className="bdk-toggle">
                            <input 
                                type="checkbox" 
                                checked={settings.selfie} 
                                onChange={() => toggleSetting('selfie')} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>

                    <div className="mode-row">
                        <div className="mode-info">
                            <QrCode size={20} color="#64748b" />
                            <span>QR Attendance</span>
                        </div>
                        <label className="bdk-toggle">
                            <input 
                                type="checkbox" 
                                checked={settings.qr} 
                                onChange={() => toggleSetting('qr')} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>

                    <div className="mode-row">
                        <div className="mode-info">
                            <MapPin size={20} color="#64748b" />
                            <span>GPS Attendance</span>
                        </div>
                        <label className="bdk-toggle">
                            <input 
                                type="checkbox" 
                                checked={settings.gps} 
                                onChange={() => toggleSetting('gps')} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                    </div>

                    <div className="mode-rule-section">
                        <span className="rule-label">Mark attendance from</span>
                        <div className="rule-selectors">
                            <div 
                                className={`rule-card ${settings.locationSource === 'office' ? 'active' : ''}`}
                                onClick={() => setSettings({ ...settings, locationSource: 'office' })}
                            >
                                <div className="rule-radio">
                                    <div className="radio-inner"></div>
                                </div>
                                <span>From Office</span>
                            </div>
                            <div 
                                className={`rule-card ${settings.locationSource === 'anywhere' ? 'active' : ''}`}
                                onClick={() => setSettings({ ...settings, locationSource: 'anywhere' })}
                            >
                                <div className="rule-radio">
                                    <div className="radio-inner"></div>
                                </div>
                                <span>From Anywhere</span>
                            </div>
                        </div>
                    </div>

                    <div className="device-section">
                        <div className="device-item">
                            <div className="device-info">
                                <div className="icon-box">
                                    <Monitor size={20} color="#64748b" />
                                </div>
                                <div className="text-content">
                                    <span className="device-name">Attendance Kiosk</span>
                                    <button className="btn-link-sm">Manage kiosk devices</button>
                                </div>
                            </div>
                        </div>

                        <div className="device-item">
                            <div className="device-info">
                                <div className="icon-box">
                                    <Fingerprint size={20} color="#64748b" />
                                </div>
                                <div className="text-content">
                                    <span className="device-name">Biometric Attendance</span>
                                    <button className="btn-link-sm">Manage biometric devices</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeAttendanceModesPage;
