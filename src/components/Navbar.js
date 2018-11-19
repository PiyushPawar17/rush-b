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
					<li className="navbar__link">
						<a href="#Pistol">Pistols</a>
					</li>
					<li className="navbar__link">
						<a href="#SMG">SMGs</a>
					</li>
					<li className="navbar__link">
						<a href="#Rifle">Rifles</a>
					</li>
					<li className="navbar__link">
						<a href="#Heavy">Heavy</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
