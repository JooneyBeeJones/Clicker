import React, { useState, useEffect} from 'react';

function Factory(props) {
	const [factory, setFactory] = useState(0);
	const [factoryPrice, setFactoryPrice] = useState(100);
	const [factoryCount, setFactoryCount] = useState(0);

	function addFactory() {
	    if(props.total >= factoryPrice) {
	      props.setTotal(props.total - factoryPrice);
	      setFactoryPrice(Math.round(factoryPrice * 1.5));
	      setFactory(f => f + 200);
	      setFactoryCount(f => f + 1);
	    }
	  }

  	useEffect(() => {
	    const id = setInterval(() => {
	      props.setTotal(e => e + factory);
	    }, 2000);
	    return() => clearInterval(id);
	}, [factory]);

	return(
		<div className='sub-button'>  
			<h2>
				Factory: x{factoryCount}
			</h2>
			<button className="btn" onClick={addFactory}>
				Buy Factory <br/> ₿{factoryPrice}	
			</button>
		</div>
	);
}

export default Factory;