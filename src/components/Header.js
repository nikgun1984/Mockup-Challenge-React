import './Header.css';
import React from 'react';

const Header = ({icon,name,amount}) => {
	return (
		<div className="Header-container">
			<img className="Header-icon" src={icon} alt="img" />
			<div className="Header-subcontainer">
				<div className="Header-name">{name}</div>
				<div className="Header-amount"><b>{amount}</b> per install</div>
			</div>
		</div>
	);
}

export default Header;