import React,{useState} from 'react'
import Header from "./Components/Header";
import DataObj from "./Data"
import AdminWrapper from "./Admin/AdminWrapper"

function Admin() {
    const [isLogin,setIsLogin]=useState(true)
    const [selectedMenu,setSelectedMenu]=useState(2)
    const handleLogin=(value)=>{
        setIsLogin(value);
    }
    const handleSelectedMenu=(menu)=>{
        console.log(menu+1)
        setSelectedMenu(menu+1)
    }
    return (
        <div>
            <Header name="Admin Panel" isLogin ={isLogin} handleSelectedMenu={handleSelectedMenu}/>
            {selectedMenu && isLogin && (<AdminWrapper selectedMenu={selectedMenu}/>)}
            
            {/**
             1. Theme Related details
             2. Manage Products
             3. Firm Details 
             */}
        </div>
    )
}

export default Admin
