import React,{useState} from 'react'
import Header from "./Components/Header";
import DataObj from "./Data"

function Admin() {
    const [isLogin,setIsLogin]=useState(false)
    return (
        <div>
            <Header name="Admin Panel" isLogin ={isLogin}/>
            {/**
             1. Theme Related details
             2. Manage Products
             3. Firm Details 
             */}
        </div>
    )
}

export default Admin
