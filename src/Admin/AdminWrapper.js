import { Typography } from '@material-ui/core';
import React from 'react'
import Form from "../Form";
import JSON from "../formJson.json"

function AdminWrapper(props) {
    const design="col-lg-6 col-md-6 col-sm-12"
    if(props.selectedMenu===1){
       
        return (
            <div>
               <Form
                    fldArr={JSON["Theme"].fields}
                    dClass={design}
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
                <div className="m-2" style={{width:"100%", textAlign:"center"}}>
                    <Typography variant="h5"> Company Info</Typography>
                </div>
               <Form
                    fldArr={JSON["CompanyInfo"].fields}
               />
            </div>
        )
    }
    
}

export default AdminWrapper
