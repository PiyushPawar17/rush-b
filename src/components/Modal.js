import React from 'react';

import data from '../data.json';

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gun: null
		};
	}

	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const gun = data.guns.filter(gun => gun.id === urlParams.get('gun'));
		this.setState({ gun: gun[0] });
	}

	render() {
		const { gun } = this.state;
		return (
			<div className="modal" id="modal">
				<div className="modal__content">
					{gun ? (
						<div>
							<a
								href={`#${this.state.gun.category}`}
								onClick={() => window.history.pushState({}, document.title, '/')}
								className="modal__close-button"
							>
								&times;
							</a>
							<div className="row">
								<div className="col-1-of-2">
									<img
										src={require(`../img/${gun.name}${gun.imageExtension}`)}
										alt={gun.name}
										className="modal__image"
									/>
								</div>
								<div className="col-1-of-2">
									<h1>
										<span className="modal__gun-name">{gun.name}</span>
										{gun.team === 'CT' ? (
											<img
												src={require('../img/CT.png')}
												alt="CT"
												className="modal__team"
											/>
										) : gun.team === 'T' ? (
											<img
												src={require('../img/T.png')}
												alt="T"
												className="modal__team"
											/>
										) : (
											<React.Fragment>
												<img
													src={require('../img/CT.png')}
													alt="CT"
													className="modal__team"
												/>
												<img
													src={require('../img/T.png')}
													alt="T"
													className="modal__team"
												/>
											</React.Fragment>
										)}
									</h1>
									<div className="modal__basic-data">
										<div className="modal__attribute">
											Origin:{' '}
											<span className="modal__attribute-value">{gun.origin}</span>
										</div>
										<div className="modal__attribute">
											Price:{' '}
											<span className="modal__attribute-value">${gun.price}</span>
										</div>
										<div className="modal__attribute">
											Ammo:{' '}
											<span className="modal__attribute-value">
												{gun.clipSize} / {gun.reservedAmmo}
											</span>
										</div>
										<div className="modal__attribute">
											Fire Rate:{' '}
											<span className="modal__attribute-value">{gun.fireRate} RPM</span>
										</div>
										<div className="modal__attribute">
											Kill Reward:{' '}
											<span className="modal__attribute-value">${gun.killReward}</span>
										</div>
										<div className="modal__attribute">
											Movement Speed:{' '}
											<span className="modal__attribute-value">
												${gun.movementSpeed}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<h1 className="modal__header">Additional Information</h1>
								<div className="col-1-of-2">
									<div className="modal__attribute">
										Armor Penetration:{' '}
										<span className="modal__attribute-value">
											{gun.armorPenetration.toFixed(2)}%
										</span>
									</div>
									<div className="modal__attribute">
										Accurate Range (Stand):{' '}
										<span className="modal__attribute-value">
											{gun.accurateRangeStand.toFixed(2)}m
										</span>
									</div>
									<div className="modal__attribute">
										Accurate Range (Crouch):{' '}
										<span className="modal__attribute-value">
											{gun.accurateRangeCrouch.toFixed(2)}m
										</span>
									</div>
								</div>
								<div className="col-1-of-2">
									<div className="modal__attribute">
										Draw Time:{' '}
										<span className="modal__attribute-value">
											{gun.drawTime.toFixed(2)}s
										</span>
									</div>
									<div className="modal__attribute">
										Reload (Clip Ready):{' '}
										<span className="modal__attribute-value">
											{gun.reloadClipReady.toFixed(2)}s
										</span>
									</div>
									<div className="modal__attribute">
										Reload (Fire Ready):{' '}
										<span className="modal__attribute-value">
											{gun.reloadFireReady.toFixed(2)}s
										</span>
									</div>
								</div>
							</div>
							<div className="row">
								<h1 className="modal__header">Damage Information</h1>
								<table className="modal__table">
									<thead>
										<tr>
											<th>Hitbox</th>
											<th>Unarmored</th>
											<th>Armored</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Head</td>
											<td>{gun.unarmoredDamage.head}</td>
											<td>{gun.armoredDamage.head}</td>
										</tr>
										<tr>
											<td>Chest & Arm</td>
											<td>{gun.unarmoredDamage.chestAndArm}</td>
											<td>{gun.armoredDamage.chestAndArm}</td>
										</tr>
										<tr>
											<td>Stomach</td>
											<td>{gun.unarmoredDamage.stomach}</td>
											<td>{gun.armoredDamage.stomach}</td>
										</tr>
										<tr>
											<td>Leg</td>
											<td>{gun.unarmoredDamage.leg}</td>
											<td>{gun.armoredDamage.leg}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Modal;
