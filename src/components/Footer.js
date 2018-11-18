import React from 'react';

import ReactLogo from '../img/React.svg';
import SassLogo from '../img/Sass.svg';
import GitHubLogo from '../img/GitHub.svg';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer margin-top-medium">
				<div className="footer__logo">
					<img src={ReactLogo} alt="React Logo" />
				</div>
				<span>+</span>
				<div className="footer__logo">
					<img src={SassLogo} alt="Sass Logo" />
				</div>
				<div className="footer__logo footer__logo--right">
					<img src={GitHubLogo} alt="GitHub Logo" />
				</div>
			</footer>
		);
	}
}

export default Footer;
