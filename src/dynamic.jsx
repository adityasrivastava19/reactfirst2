import { useState } from "react";
function Toggle(){
    const [isvisible,setvisible]=useState(false);
    const toggled=()=>
    {
        setvisible(!isvisible);
    }
    return (
    <div>
        <button onClick={toggled}>toggle</button>
        {isvisible&& <b>hello world</b>}
    </div>
    )
}
export default Toggle;