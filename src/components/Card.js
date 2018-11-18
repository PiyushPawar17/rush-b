import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card__image">
					<img
						src={require(`../img/${this.props.gun.name}${this.props.gun.imageExtension}`)}
						alt={this.props.gun.name}
					/>
				</div>
				<div className="card__overlay">
					<span className="card__overlay-content">
						<p className="card__overlay-heading">Gun Name</p>
						<p className="card__overlay-info">{this.props.gun.name}</p>
					</span>
					<span className="card__overlay-content">
						<p className="card__overlay-heading">Origin</p>
						<p className="card__overlay-info">{this.props.gun.origin}</p>
					</span>
					<button className="btn">More Info</button>
				</div>
			</div>
		);
	}
}

export default Card;
