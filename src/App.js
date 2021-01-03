import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Search from "./Components/TextSearch";
import Accordian from "./Components/Accordian";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
// import Footer from "./Components/Footer"

let Data = {
  Pizza: [
    { name: "pizza", value: 100, description: "double cheese with olives" },
    {
      name: "margerate pizza",
      value: 200,
      description: "double cheese with olives",
    },
  ],
  SandWitch: [
    { name: "Sandwitch", value: 100, description: "double cheese with olives" },
    {
      name: "club pizza",
      value: 200,
      description: "double cheese with olives",
    },
  ],
};
function App() {
  let adata = Data;
  const [list, setList] = useState(adata);

  const handleSearch = (value) => {
    let adata = {};
    Object.keys(Data).map((fld) => {
      let arr = Data[fld].filter((fld) => {
        if (fld.name.toLowerCase().includes(value.toLowerCase())) {
          return 1;
        }
      });
      adata[fld] = arr;
    });

    setList(adata);
  };

  return (
    <div className="App">
      <div>
        <Header />
        <Slider />
        <Search handleSearch={handleSearch} />
        <Accordian data={list} />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
