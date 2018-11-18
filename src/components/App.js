import React from 'react';
import Navbar from './Navbar';

import '../sass/main.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navbar />
			</div>
		);
	}
}

export default App;
