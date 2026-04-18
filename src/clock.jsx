import { useState,useEffect } from "react";
function Clock(){
    const[time,settime]=useState(1);
    function increase()
    {
        settime(time=>time+1);
    }
    useEffect(function(){
        console.log("use effect called");
        setInterval(increase,1000);
    },[]);
      
    useEffect(function()
{
    console.log("hello"+time)
},[time]);
    return (
        <div>
            {time}
        </div>
    )
}
export default Clock;