import React, { useState } from "react";

const Selfie =()=>{
     
    const[chance,setchance]=useState({
        one:"",
        two:""

    })

    const inputarray =[
        {
            name:"one",
            value:chance.one
        },
        {
            name:"two",
            value:chance.two
        }
    ]


    const handlechange=(e)=>{
        setchance((event)=>({
            ...event,
            [e.target.name]:e.target.value
        }))
    }
     
    const handleclick=(e)=>{
        alert(inputarray)
    }

    return(
        <div>
            {inputarray.map((data)=>(
            <>
            <input name={data.name} value={data.value}  onChange={handlechange} />
            <button name={data.name} value={data.value}  onClick={handleclick}  >click mee</button>
           
           </>
            )
            )} {JSON.stringify (chance)}
      
       
        </div>
    )






}
export default Selfie