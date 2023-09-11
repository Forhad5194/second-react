import { useState } from "react";

const Counter = () => {
 

    const [count, setCounter] = useState(0)

    const addHandler = () =>{
        setCounter(count + 1)
    }
    const removed =() =>{
        setCounter(count - 1)
    }

    return (
        <div>
            <h2>Counter: {count} </h2>
            <button onClick={addHandler}>Add</button>
             <button onClick={removed}>Removed</button>
        </div>
    );
};

export default Counter;