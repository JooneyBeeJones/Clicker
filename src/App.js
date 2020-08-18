import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [helper, setHelper] = useState(1);
  const [machine, setMachine] = useState(0);
  const [factory, setFactory] = useState(0);
  const [helperPrice, setHelperPrice] = useState(5);
  const [machinePrice, setMachinePrice] = useState(20);
  const [factoryPrice, setFactoryPrice] = useState(100);

  function addTotal() {
    setTotal(total + helper);
  }

  function addHelper() {
    if(total >= helperPrice){
      setHelperPrice(Math.round(helperPrice * 2.5));
      setTotal(total - helperPrice);
      setHelper(helper + 1);
    }
  }

  function addMachine() {
    if(total >= machinePrice){
      setTotal(total - machinePrice);
      setMachinePrice(Math.round(machinePrice * 3.5));
      setMachine(m => m + 10);
    }
  }

  function addFactory() {
    if(total >= factoryPrice) {
      setTotal(total - factoryPrice);
      setFactoryPrice(Math.round(factoryPrice * 3.5));
      setFactory(f => f + 200)
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      setTotal(e => e + machine);
    }, 5000);
    return() => clearInterval(id);
  }, [machine]);

  useEffect(() => {
    const id = setInterval(() => {
      setTotal(e => e + factory);
    }, 15000);
    return() => clearInterval(id);
  }, [factory]);

  return(
    <div className="section">
      <h1>
        Total: {total}
      </h1>
      <div className="btn">
        <button onClick={addTotal}>Click Me</button>
        <button onClick={addHelper}>Buy Helper</button>
        <button onClick={addMachine}>Buy Machine</button>
        <button onClick={addFactory}>Buy Factory</button>
      </div>
    </div>
  );
}

export default App;
