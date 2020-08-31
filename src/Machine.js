import React, { useState, useEffect} from 'react';

function Machine(props) {
	const [machine, setMachine] = useState(0);
	const [machinePrice, setMachinePrice] = useState(20);
	const [machineCount, setMachineCount] = useState(0);

	function addMachine() {
	    if(props.total >= machinePrice){
	      props.setTotal(props.total - machinePrice);
	      setMachinePrice(Math.round(machinePrice * 1.5));
	      setMachine(m => m + 10);
	      setMachineCount(m => m + 1);
	    }
	}

	useEffect(() => {
	    const id = setInterval(() => {
	    	props.setTotal(e => e + machine);
	    }, 1000);
	    return() => clearInterval(id);
	}, [machine]);

	return(
		<div className='sub-button'>
			<h2>
				Machine: x{machineCount}
			</h2>
			<button className="btn" onClick={addMachine}>
				Buy Machine <br/> ₿{machinePrice} 
			</button>
		</div>
	);
}

export default Machine;