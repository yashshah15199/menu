import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Search from "./Components/TextSearch";
import Accordian from "./Components/Accordian";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer"
import DataObj from "./Data";

function App() {
 
  let adata=DataObj["data"]=JSON.parse(localStorage.getItem("Product"));
  const [list, setList] = useState(adata);

  const handleSearch = (value) => {
    let cdata = {};
    Object.keys(adata).map((fld) => {
      let arr = adata[fld].filter((fld) => {
        if (fld.name.toLowerCase().includes(value.toLowerCase())) {
          return 1;
        }
      });
      cdata[fld] = arr;
    });

    setList(cdata);
  };

  return (
    <div className="App">
      <div>
        <Header />
        <Slider />
        <Search handleSearch={handleSearch} />
        <Accordian data={list} />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
