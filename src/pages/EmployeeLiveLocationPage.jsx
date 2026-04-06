import React, { useMemo, useState } from 'react';
import { Navigation, RotateCw, Search, LocateFixed } from 'lucide-react';
import './EmployeeLiveLocationPage.css';

const employees = [
    {
        id: 1,
        name: 'SUDHIR MURMU',
        marker: 'U',
        color: '#7e22ce',
        distance: '5 km away',
        battery: '90%',
        lastSeen: 'Just now',
        addressLine1: 'S1+4, Medinipur, WB',
        addressLine2: '722149, India',
        x: 44,
        y: 39,
    },
    {
        id: 2,
        name: 'CHANDI PATRA',
        marker: 'C',
        color: '#0ea5e9',
        distance: '9 km away',
        battery: '84%',
        lastSeen: '2m ago',
        addressLine1: 'Ghatsila More, Jhargram',
        addressLine2: '721507, India',
        x: 28,
        y: 63,
    },
    {
        id: 3,
        name: 'VADU SAREN',
        marker: 'V',
        color: '#ea580c',
        distance: '7 km away',
        battery: '72%',
        lastSeen: '5m ago',
        addressLine1: 'Lalgarh Road, Midnapore',
        addressLine2: '721516, India',
        x: 30,
        y: 71,
    },
    {
        id: 4,
        name: 'KUSH PATRA',
        marker: 'K',
        color: '#1d4ed8',
        distance: '11 km away',
        battery: '88%',
        lastSeen: '1m ago',
        addressLine1: 'Belpahari Bazar',
        addressLine2: '721501, India',
        x: 35,
        y: 77,
    },
    {
        id: 5,
        name: 'UTPAL MAKUR',
        marker: 'U',
        color: '#f59e0b',
        distance: '13 km away',
        battery: '59%',
        lastSeen: '8m ago',
        addressLine1: 'Shilda, Jhargram',
        addressLine2: '721515, India',
        x: 24,
        y: 88,
    },
    {
        id: 6,
        name: 'SANDIP SINGH',
        marker: 'S',
        color: '#64748b',
        distance: '8 km away',
        battery: '79%',
        lastSeen: '4m ago',
        addressLine1: 'Banspahari, WB',
        addressLine2: '722149, India',
        x: 26,
        y: 66,
    },
    {
        id: 7,
        name: 'CHANDAN MANDI',
        marker: 'M',
        color: '#22c55e',
        distance: '6 km away',
        battery: '83%',
        lastSeen: '3m ago',
        addressLine1: 'Kankrajhor Forest Road',
        addressLine2: '721501, India',
        x: 58,
        y: 42,
    },
];

const EmployeeLiveLocationPage = () => {
    const [selectedId, setSelectedId] = useState(1);
    const selectedEmployee = useMemo(
        () => employees.find((emp) => emp.id === selectedId) || employees[0],
        [selectedId]
    );
    const selectedEmployeeDisplayName = selectedEmployee.name
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
    const isNearBottom = selectedEmployee.y > 70;
    const isNearLeft = selectedEmployee.x < 22;
    const isNearRight = selectedEmployee.x > 80;

    const cardTranslateX = isNearLeft ? '0%' : isNearRight ? '-100%' : '-50%';
    const cardTranslateY = isNearBottom ? 'calc(-100% - 18px)' : '26px';

    return (
        <div className="page-container">
            <div className="live-location-shell">
                <aside className="live-location-list-panel">
                    <div className="live-list-header">EMPLOYEE NAME</div>
                    <div className="live-list-body">
                        {employees.map((employee) => (
                            <button
                                type="button"
                                key={employee.id}
                                className={`live-employee-row ${selectedId === employee.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(employee.id)}
                            >
                                <span className="live-avatar-dot" style={{ backgroundColor: employee.color }} />
                                <span className="live-employee-name">{employee.name}</span>
                                <span className="live-row-indicator">◌</span>
                            </button>
                        ))}
                    </div>
                </aside>

                <section className="live-location-map-panel">
                    <div className="live-map-toolbar">
                        <div className="live-map-search">
                            <Search size={13} />
                            <input type="text" placeholder="Search here ..." />
                        </div>
                        <button type="button" className="live-map-focus-btn" aria-label="Focus map">
                            <LocateFixed size={15} />
                        </button>
                    </div>

                    <div className="live-map-wrap">
                        <iframe
                            title="Employee Live Location"
                            src="https://maps.google.com/maps?q=Jhargram%20West%20Bengal&t=&z=11&ie=UTF8&iwloc=&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                        {employees.map((employee) => (
                            <button
                                key={`marker-${employee.id}`}
                                type="button"
                                className={`live-map-marker ${selectedId === employee.id ? 'selected' : ''}`}
                                style={{ left: `${employee.x}%`, top: `${employee.y}%`, backgroundColor: employee.color }}
                                onClick={() => setSelectedId(employee.id)}
                                title={employee.name}
                            >
                                {employee.marker}
                            </button>
                        ))}

                        <div
                            className="live-map-info-card"
                            style={{
                                left: `${selectedEmployee.x}%`,
                                top: `${selectedEmployee.y}%`,
                                transform: `translate(${cardTranslateX}, ${cardTranslateY})`,
                            }}
                        >
                            <div className="live-info-letter" style={{ backgroundColor: selectedEmployee.color }}>
                                {selectedEmployee.marker}
                            </div>

                            <div className="live-info-content">
                                <div className="live-info-top-row">
                                    <div className="live-info-name">{selectedEmployeeDisplayName}</div>
                                    <button type="button" className="live-info-refresh" aria-label="Refresh location">
                                        <RotateCw size={12} />
                                    </button>
                                </div>
                                <div className="live-info-meta">
                                    {selectedEmployee.distance} <span className="meta-dot">•</span> 🔋 {selectedEmployee.battery} <span className="meta-dot">•</span> {selectedEmployee.lastSeen}
                                </div>
                                <div className="live-info-address">{selectedEmployee.addressLine1}</div>
                                <div className="live-info-address">{selectedEmployee.addressLine2}</div>
                                <button type="button" className="live-directions-link">
                                    <Navigation size={12} /> Directions
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EmployeeLiveLocationPage;
