import React from 'react'
import TextInput from './Form/TextInput'
import ColorPicker from "./Form/ColorPicker"
import Imageupload from "./Form/Imageupload"

function Form(props) {
    const {fldArr}=props
    console.log(fldArr)
    return (
        <div>
            {fldArr && fldArr.map((fld)=>{
                if(fld.type==="colorPicker"){
                    return(<ColorPicker fld={fld}/>)
                }
                if(fld.type==="Text"){
                    return(
                        <div>
                            <TextInput fld={fld} />
                            </div>
                    )
                }
                if(fld.type==="Imageupload"){
                    return(
                        <div>
                            <Imageupload fld={fld} />
                            </div>
                    )
                }
                
            })}
        </div>
    )
}

export default Form
