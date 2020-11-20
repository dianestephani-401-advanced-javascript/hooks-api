import React, { useState, useEffect } from 'react';
import List from './list.js';

function Counter( {initialCount} ){

  const [count, setCount] = useState(0);
//Sudo stuff is everywhere...
  function updateCounter(LS.includes(value='danger')){
    setCount(count + 1);
  }

  useEffect( ()=> {
  
  }, [initialCount] );
  
}

export default Counter;