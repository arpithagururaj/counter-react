import React, { useState } from "react";

const Sup=()=>{
    const[Objectarray,setobjectarray]=useState({
        sun:"",
        Moon:"",
        Earth:"",
        Mars:""
    })

    const handlechange =(e)=>{
        setobjectarray((eventobject)=>({
            ...eventobject,
            [e.target.name]:e.target.value
        }))
    }
   
    const inputarray = [
        {
            name:"sun",
            value:Objectarray.sun,
            placeholder: "enter the value"
        },
        {
            name:"Moon",
            value:Objectarray.Moon,
            placeholder: "enter the value"
        },
        {
            name:"Earth",
            value:Objectarray.Earth,
            placeholder: "enter the value"
        },
        {
            name:"Mars",
            value:Objectarray.Mars
            ,
            placeholder: "enter the value"
        }
    ]
   

    return(
        <div>
            {inputarray.map(data=>(
                <>
                 <input value={data.value} name={data.name} placeholder={data.placeholder} onChange={handlechange} />
                </>
            ))}{JSON.stringify (Objectarray)}
        {/* <input value={Objectarray.sun} name="sun" onChange={handlechange} />
        <input value={Objectarray.Moon} name="Moon" onChange={handlechange} />
        <input value={Objectarray.Earth} name="Earth" onChange={handlechange} />
        <input value={Objectarray.Mars} name="Mars" onChange={handlechange} />
        {JSON.stringify (Objectarray)} */}
        
       
        
        </div>
    )

}
export default Sup