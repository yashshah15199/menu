import React from 'react'
import Slider from "./Components/Slider"
import Gallery from "./Components/Gallery"
import Content from "./Components/Content"

function Container(props) {
   
    if(props.type==="Slider"){
        return (<Slider data={props.data}/>)
    }
    else if(props.type==="Gallery"){
        return (<Gallery data={props.data}/>)
    }
    else if(props.type==="Content"){
        return (<Content data={props.data}/>)
    }
    else {return(<div></div>)}
   
}

export default Container
