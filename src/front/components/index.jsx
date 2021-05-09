import React from "react" 
import {useStore} from "react-redux"
const Component =  () =>{

    const handleClick = ()=>{
        console.log("clicked")
        console.log(store.getState())
    }
    const store = useStore()
    const state  = JSON.stringify(store.getState())
    return <div> 
        <button onClick={()=> handleClick()}> Click </button>
        <h1>{state}</h1> 
    </div>
}

export default Component