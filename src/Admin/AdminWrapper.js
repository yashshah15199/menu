import React from 'react'

function AdminWrapper(props) {
    console.log("rrr",props)
    if(props.selectedMenu===0){
       
        return (
            <div>
                abc
            </div>
        )
    }
    else if(props.selectedMenu===1){
        return (
            <div>
                123
            </div>
        )
    }
    else if(props.selectedMenu===2){
        return (
            <div>
                ppp
            </div>
        )
    }
    
}

export default AdminWrapper
