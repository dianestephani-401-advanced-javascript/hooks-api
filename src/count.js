import React, { useState, useEffect } from 'react';
import List from './list.js';

function Counter( {initialCount} ){

  const [count, setCount] = useState(0);

  function updateCounter(LS.includes()){
    setCount(count + 1);
  }

  useEffect( ()=> {
  
  }, [initialCount] );
  
}

export default Counter;