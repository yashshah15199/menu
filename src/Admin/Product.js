import React,{useState} from 'react'
import { Button } from "@material-ui/core";
import DataObj from "../Data"

function Product() {
    const[Open,setOpen]=useState(false)
    const handleButtonClick=()=>{
        setOpen(true)

    }
    return (
        <div>
            <div>
            <Button
        className="button m-2"
        variant="contained"
        style={{backgroundColor:DataObj.backGroundColor,color:DataObj.fontColor}}
        onClick={handleButtonClick}
      >
        Add Product
      </Button>
            </div>
            <div>
                
            </div>
           
        </div>
    )
}

export default Product
