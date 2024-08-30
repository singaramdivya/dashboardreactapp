import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const handleDropdownClick = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <div className="sidebar">
            <ul>
            <li className={activeLink === '/dashboard' ? 'active' : ''}>
                    <Link to="/dashboard" onClick={() => handleLinkClick('/dashboard')}>Dashboard</Link>
                </li>
                <li className={activeLink === '/inventory' ? 'active' : ''}>
                    <Link to="/inventory" onClick={() => handleLinkClick('/inventory')}>Inventory</Link>
                </li>
                <li className={activeLink === '/order' ? 'active' : ''}>
                    <Link to="/order" onClick={() => handleLinkClick('/order')}>Order</Link>
                </li>
                <li className={activeLink === '/returns' ? 'active' : ''}>
                    <Link to="/returns" onClick={() => handleLinkClick('/returns')}>Returns</Link>
                </li>
                <li className={activeLink === '/customers' ? 'active' : ''}>
                    <Link to="/customers" onClick={() => handleLinkClick('/customers')}>Customers</Link>
                </li>
                <li className={activeLink === '/shipping' ? 'active' : ''}>
                    <Link to="/shipping" onClick={() => handleLinkClick('/shipping')}>Shipping</Link>
                </li>
                <li className={activeLink === '/channel' ? 'active' : ''}>
                    <Link to="/channel" onClick={() => handleLinkClick('/channel')}>Channels</Link>
                </li>
                <li className={activeLink === '/integrations' ? 'active' : ''}>
                    <Link to="/integrations" onClick={() => handleLinkClick('/integrations')}>Integrations</Link>
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('calculators')}>
                        Calculators {openDropdown === 'calculators' ? <IoIosArrowUp className='arrow' /> : <IoIosArrowDown className='arrow'/>}
                    </div>
                    {openDropdown === 'calculators' && (
                        <ul className="dropdown">
                            <li><Link to="/calculators/calculators1">Calculators 1</Link></li>
                            <li><Link to="/calculators/calculators2">Calculators 2</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('reports')}>
                        Reports {openDropdown === 'reports' ? <IoIosArrowUp className='arrow' /> : <IoIosArrowDown className='arrow'/>}
                    </div>
                    {openDropdown === 'reports' && (
                        <ul className="dropdown">
                            <li><Link to="/reports/reports1">Reports 1</Link></li>
                            <li><Link to="/reports/reports2">Reports 2</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('account')}>
                        Account {openDropdown === 'account' ? <IoIosArrowUp className='arrow' /> : <IoIosArrowDown className='arrow'/>}
                    </div>
                    {openDropdown === 'account' && (
                        <ul className="dropdown">
                            <li><Link to="/account/profile">Profile</Link></li>
                            <li><Link to="/account/settings">Settings</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
