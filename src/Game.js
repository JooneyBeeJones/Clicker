import React, {useState, useEffect} from 'react';
import Machine from './Machine';
import Factory from './Factory';

function Game() {
  const [total, setTotal] = useState(0);
  const [helper, setHelper] = useState(1);
  const [helperCount, setHelperCount] = useState(0);
  const [helperPrice, setHelperPrice] = useState(5);
  const [font, setFont] = useState(3);

  function addTotal() {
    setTotal(total => total + helper);
  }

  function increaseFont (total) {
    switch(total) {
      case 100:
        setFont(f => f + 1);
        break;
      case 1000:
        setFont(f => f + 1);
        break;
      case 10000:
        setFont(f => f + 1);
        break;
      case 100000:
        setFont(f => f + 1);
        break;
      case 1000000:
        setFont(f => f + 1);
        break;
    }
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
    increaseFont(total);
  }, [total]);

  return(
    <main>
      <div className='section'>
        <div className='sub-section total'>
          <h1 style={{ fontSize: `${font}rem`}}>
            ₿{total}
          </h1>
        </div>
        <div className='sub-section btn-click'>
          <h2>
            +₿{helper}
          </h2>
          <button className='btn btn-coin' onClick={addTotal}></button>
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
    </main>
  );
}

export default Game;
