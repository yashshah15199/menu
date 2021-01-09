import React from 'react'
import Form from "../Form";
import JSON from "../formJson.json"

function AdminWrapper(props) {
    console.log("rrr",props,JSON)
    if(props.selectedMenu===1){
       
        return (
            <div>
               <Form
                    fldArr={JSON["Theme"].fields}
               />
            </div>
        )
    }
    else if(props.selectedMenu===2){
        return (
            <div>
                123
            </div>
        )
    }
    else if(props.selectedMenu===3){
        return (
            <div>
                ppp
            </div>
        )
    }
    
}

export default AdminWrapper
