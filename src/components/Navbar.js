import React from 'react';
import Logo from '../img/Logo.svg';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar__logo">
					<img src={Logo} alt="Logo" />
				</div>
				<ul className="navbar__links">
					<li className="navbar__link">Pistols</li>
					<li className="navbar__link">SMGs</li>
					<li className="navbar__link">Rifles</li>
					<li className="navbar__link">Heavy</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
