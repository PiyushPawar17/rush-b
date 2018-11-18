import React from 'react';

import Navbar from './Navbar';
import Guns from './Guns';
import Footer from './Footer';

import '../sass/main.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Guns />
				<Footer />
			</div>
		);
	}
}

export default App;
