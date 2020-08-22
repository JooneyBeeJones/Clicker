import React, {useState, useEffect} from 'react';
import Machine from './Machine';
import Factory from './Factory';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [helper, setHelper] = useState(1);
  const [helperCount, setHelperCount] = useState(0);
  const [helperPrice, setHelperPrice] = useState(5);

  function addTotal() {
    setTotal(total => total + helper);
  }

  function addHelper() {
    if(total >= helperPrice){
      setHelperPrice(Math.round(helperPrice * 1.5));
      setTotal(total => total - helperPrice);
      setHelper(h => h + 1);
      setHelperCount(h => h + 1);
    }
  }

  useEffect(() => {
    console.log(`The helper amount is: ₿${helper}`);
  }, [helper]);

  return(
    <div className='section'>
      <div className='sub-section total'>
        <h1>
          ₿{total}
        </h1>
      </div>
      <div className='sub-section btn-click'>
        <button className='btn' onClick={addTotal}>Click Me <br/> ₿${helper}</button>
      </div>
      <div className='sub-section btn-upgrade'>
        <div className='sub-button'>
          <h2>
            Helper: x{helperCount}
          </h2>
          <button className='btn' onClick={addHelper}>Buy Helper <br/> ₿{helperPrice}</button>
        </div>
        <Machine total={total} setTotal={setTotal}/>
        <Factory total={total} setTotal={setTotal}/>
      </div>
    </div>
  );
}

export default App;
