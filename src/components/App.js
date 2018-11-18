import React from 'react';

import Navbar from './Navbar';
import Guns from './Guns';

import '../sass/main.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Guns />
			</div>
		);
	}
}

export default App;
