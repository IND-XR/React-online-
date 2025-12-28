// import React, { use } from 'react'
// import { useState } from 'react'


// function useinfiniteProducts( initialValue = 0 )  {
//     const [count, setCount] = useState(initialValue);

//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     const reset = ( ) => setCount(initialValue);
   
  
//     return { count , increment , decrement , reset};
// }

// export default useinfiniteProducts



// import useinfiniteProducts form "./useCounter";

// function infiniteProducts(){
//     const {count, increment ,decrement , rest } = useinfiniteProducts(10);

//     return(
//         <div>
//         <h2> Count: {count} </h2>
//         <button onClick={increment}> Increment </button>
//         <button onClick={decrement}> Decrement </button>
//         <button onClick={reset}> Reset </button>
//         </div>
//     );
// }
// export default infiniteProducts;