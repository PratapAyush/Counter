import React from "react" ;


  




const Counter = ({initialValue}) => {
// hooks-use state
// hooks are inbuilt set of function used to interact with VDOM

//use-state is hook in react which is used to inform vdom of changes which need to be rendered
// it returns two things in array
// variable and function to update the variable

//state
// state is info that is changing like counter 0 which change if increment button is pressed
const [count, setCount] = React.useState(initialValue);


    
    // 1st way 
    // const incrementCount = () =>{
    //     console.log("pre",count);
    //     setCount(count+1);
    //     console.log("post",count);
    // }

    // const decrementCount = () =>{
    //     console.log("pre",count);
    //     setCount(count-1);
    //     console.log("post",count);
    // }



    return (
        // <div>
        //     <h1>Counter App: {count}</h1>
        //     <button onClick={incrementCount}>Increment</button>
        //     <button onClick={decrementCount}>Decrement</button>
        // </div>

        //2nd way

        <div>
        <h1>Counter App: {count}</h1>
        <button onClick={() =>setCount(count+1)}>Increment</button>
        <button onClick={() =>setCount(count-1)}>Decrement</button>
        <button onClick={() =>setCount(count*2)}>Double</button>
        



    </div>

    );
};

export default Counter ;