import React from 'react';

import Card from './Card';
import Headshot from '../img/Headshot.svg';

import data from '../data.json';

class GunsCategory extends React.Component {
	render() {
		return (
			<div>
				<div className="heading-primary">
					<img src={Headshot} alt="Headshot" className="heading-primary__logo" />
					<h1 className="heading-primary__heading">{this.props.heading}</h1>
				</div>
				{data.guns
					.filter(gun => gun.category === this.props.category)
					.map((gun, index) =>
						index % 3 === 2 ? (
							<div className="row" key={index}>
								<div className="col-1-of-3">
									<Card gun={gun} />
								</div>
							</div>
						) : (
							<div className="col-1-of-3" key={index}>
								<Card gun={gun} />
							</div>
						)
					)}
			</div>
		);
	}
}

export default GunsCategory;
