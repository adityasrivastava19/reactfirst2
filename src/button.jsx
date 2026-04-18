import {useState,useEffect } from "react";

function Botton()
{
    const [currtab,settab]=useState("home");
    useEffect(function(){
        console.log("function rendered ")
    }, [currtab])
    return(
        <div>
            <button onClick={function(){settab("not")}} style={{color:currtab=== "not"?"red":"black"}}>notification</button>
            <button onClick={function(){settab("dm")}} style={{color:currtab=== "dm"?"red":"black"}}>dm</button>
            <button onClick={function(){settab("likes")}} style={{color:currtab=== "likes"?"red":"black"}}>likes</button>
            <button onClick={function(){settab("search")}} style={{color:currtab=== "search"?"red":"black"}}>search</button>
        </div>
    )
}
function Todos({tittle,done})
{
    return (
        <div>
            <h1>{tittle}</h1>
            <h1>{done?"done":"not done"}</h1>
        </div>
    )
}
export {Botton,Todos};