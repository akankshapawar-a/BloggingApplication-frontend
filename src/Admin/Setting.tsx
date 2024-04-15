import React from 'react';
import Admin from '../components/Create/Admin';

const Settings: React.FC = () => {
    return (
        <div className="flex">
            <Admin />
            <main className="flex-grow p-3">
                <h1 className="text-3xl font-bold">Settings</h1>
            </main>
        </div>
    );
}

export default Settings;
