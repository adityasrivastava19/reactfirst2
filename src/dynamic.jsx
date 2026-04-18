import { useState } from "react";
function Toggle(){
    const [isvisible,setvisible]=useState(0);
    const toggled=()=>
    {
        setvisible(isvisible+1);
        console.log("behenchod");
    }
    return (
    <div>
        <button onClick={toggled}>toggle</button>
        {isvisible}
    </div>
    )
}
export default Toggle;