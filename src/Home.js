import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

	return(
		<div className='home-section' >
			<h1>₿itcoin Clicker</h1>
			<ul className='home-list'>
				<Link to='game' className="link">
					<li>Start Game</li>
				</Link>
			</ul>
		</div>
	);
}

export default Home;