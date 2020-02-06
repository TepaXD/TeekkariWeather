import React, { Component } from 'react';
import './Tekstit.css';
import './sijainti.css';
import { Col } from 'react-grid-system';

class Home extends Component {
	render() {
		return (
			<body className="Sijainti">
				<h1 className="Tekstit">Welcome to Teekkariweather!</h1>
			</body>
		);
	}
}

export default Home;
