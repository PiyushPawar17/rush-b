import React from 'react';

import Card from './Card';
import Headshot from '../img/Headshot.svg';

import data from '../data.json';

class GunsCategory extends React.Component {
	render() {
		let guns = data.guns.filter(gun => gun.category === this.props.category);
		guns = guns.map((_, index) => (index % 3 === 0 ? guns.slice(index, index + 3) : null));
		return (
			<div id={`${this.props.category}`}>
				<div className="heading-primary">
					<img src={Headshot} alt="Headshot" className="heading-primary__logo" />
					<h1 className="heading-primary__heading">{this.props.heading}</h1>
				</div>
				{guns.map((arr, index) =>
					arr ? (
						<div className="row" key={index}>
							{arr.map((gun, index) => (
								<div className="col-1-of-3" key={index}>
									<Card gun={gun} />
								</div>
							))}
						</div>
					) : null
				)}
			</div>
		);
	}
}

export default GunsCategory;
