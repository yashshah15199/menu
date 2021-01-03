import React, {useState} from "react"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Search from "./Components/TextSearch"
import Accordian from "./Components/Accordian"

let Data=[
  {name:"pizza",value:100,description:"double cheese with olives"},
  {name:"margerate pizza",value:200,description:"double cheese with olives"}
]
function App() {
  const [list,setList]=useState(Data)

  const handleSearch=(value)=>{
    console.log("here",value)
    let arr=Data.filter((fld)=>{
      if(fld.name.includes(fld)){return 1}
    })
    console.log(arr)
    setList(arr)
  }
 
  return (
    <div className="App">
     <div style={{marginRight:"1%"}}>
       <Search handleSearch={handleSearch}/>
       <Accordian data={list}/>
     </div>
    </div>
  );
}

export default App;
