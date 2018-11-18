import React from 'react';

import GunsCategory from './GunsCategory';

class Guns extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="guns">
					<GunsCategory category="Pistol" heading="Pistols" />
					<GunsCategory category="SMG" heading="SMGs" />
				</div>
			</div>
		);
	}
}

export default Guns;
