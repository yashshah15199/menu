import React from 'react'

function Form(props) {
    const {fldArr}=props
    console.log(fldArr)
    return (
        <div>
            {fldArr && fldArr.map((fld)=>{
                if(fld.type==="colorPicker"){
                    return(<div>Color</div>)
                }
                
            })}
        </div>
    )
}

export default Form
