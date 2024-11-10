import React from 'react';
import './navBar.css';

interface NavLink {
    label: string;
    href: string;
}

interface NavBarProps {
    links: NavLink[];
}

const NavLinkItem: React.FC<NavLink> = React.memo(({ label, href }) => (
    <a href={href} className="nav-link">
        {label}
    </a>
));

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
        <nav className="nav">
            <span className="nav-links">
               {links.map((link, index) => (
                   <NavLinkItem key={index} label={link.label} href={link.href} />
               ))}
            </span>
        </nav>
    );
};

export default NavBar;