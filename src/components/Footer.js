import React from 'react';

import ReactLogo from '../img/React.svg';
import SassLogo from '../img/Sass.svg';
import GitHubLogo from '../img/GitHub.svg';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer margin-top-medium">
				<div className="footer__logo">
					<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
						<img src={ReactLogo} alt="React Logo" />
					</a>
				</div>
				<span>+</span>
				<div className="footer__logo">
					<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
						<img src={SassLogo} alt="Sass Logo" />
					</a>
				</div>
				<div className="footer__logo footer__logo--right">
					<a
						href="https://github.com/PiyushPawar17/rush-b"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={GitHubLogo} alt="GitHub Logo" />
					</a>
				</div>
			</footer>
		);
	}
}

export default Footer;
