import React, { useState } from "react";

const Counter=()=>{
          
    const[count,setcount]=useState(0)
    
    const handlecount=()=>{
        setcount(count+1)
    }


    return(
      <div>
          <h1>hello everyone</h1>
          <button onClick={handlecount}>click</button>
            {count}

      </div>

    )



}
export default Counter