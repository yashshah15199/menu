import React, {useState} from "react"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Search from "./Components/TextSearch"
import Accordian from "./Components/Accordian"
import Header from "./Components/Header"

let Data=[
  {name:"pizza",value:100,description:"double cheese with olives"},
  {name:"margerate pizza",value:200,description:"double cheese with olives"}
]
function App() {
  let adata=Data
  const [list,setList]=useState(adata)

  const handleSearch=(value)=>{
    
    let arr=Data.filter((fld)=>{
      console.log("fld",fld)
      if(fld.name.toLowerCase().includes(value.toLowerCase())){
        console.log("fld1",fld)
        return 1}
    })
    console.log(arr)
    setList(arr)
  }
 
  return (
    <div className="App">
     <div style={{marginRight:"1%"}}>
       <Header/>
       <Search handleSearch={handleSearch}/>
       <Accordian data={list}/>
     </div>
    </div>
  );
}

export default App;
