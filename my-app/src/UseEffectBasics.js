import React, {useState, useEffect} from "react"

// useEffect side affect
//default runs after every re-render
// useEffect(callback)

// behaviour of useEffect in a counter app
// document.title = `New Message(${valuse})`
// use effect in the condition

// only run initial render 

// second parameter in use effect list of dependencies 


// clean up function

function UseStateBasics() {
    
    const [a,b] = useState(1);

    useEffect(()=>{
     console.log("use Effect")

     return ()=> {
         console.log("cleanup")
     }


    })

    return <h1 onClick={()=>b(a+1)}>a</h1>

}