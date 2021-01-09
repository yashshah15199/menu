import React from 'react'
import TextInput from './Form/TextInput'

function Form(props) {
    const {fldArr}=props
    console.log(fldArr)
    return (
        <div>
            {fldArr && fldArr.map((fld)=>{
                if(fld.type==="colorPicker"){
                    return(<div>Color</div>)
                }
                if(fld.type==="Text"){
                    return(
                        <div>
                            <TextInput fld={fld} />
                            </div>
                    )
                }
                
            })}
        </div>
    )
}

export default Form
