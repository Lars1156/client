import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action/counterActions';

function Counter() {
     
    const count = useSelector((state) => state.counter.value); // Access state using useSelector
     const dispatch = useDispatch();

   const handleIncrement = () => dispatch(increment());
     const handleDecrement = () => dispatch(decrement());

     return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}> Decreemnt</button>
        </div>
     )
}

export default Counter;
