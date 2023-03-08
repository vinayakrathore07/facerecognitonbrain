import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0' >
			<Tilt className="Tilt b2 shadow-2">
			     <div className="Tilt-inner pa3" style={{ height: '200px' }}>
			       <img style={{paddingTop: '20px'}} alt='logo' src= {brain}/>
			     </div>
		    </Tilt>
		</div>
	);

}

export default Logo;