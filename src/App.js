import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Order from './components/Order';
import './App.css';
import Customers from './components/Customers';
import Shipping from './components/Shipping';
import Integrations from './components/Integrations';
import {Returns} from './components/Returns' ;
import Channel from './components/Channel';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="content">
                    <Routes> 
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/returns" element={<Returns />} />
                        <Route path="/customers" element={<Customers/>} />
                        <Route path="/shipping" element={<Shipping />} />
                        <Route path="/channel" element={<Channel />} />
                        <Route path="/integrations" element={<Integrations />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
