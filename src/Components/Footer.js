import React from 'react'
import "./Footer.css"
import PinDropIcon from '@material-ui/icons/PinDrop';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import DataObj from "../Data"

function Footer() {
  let data=JSON.parse(localStorage.getItem("companyInfo"))
    return (
        <div style={{marginTop:"2%"}}>
          <footer>
  <div class="foooter-up" style={{backgroundColor:DataObj.backGroundColor}}>
    <div class="container">
      <div class="row">
      <div class="col-md-6">
            <h6 style={{color:DataObj.fontColor}}>ABOUT</h6>
            <p style={{color:DataObj.fontColor,fontFamily:DataObj.footerfontFamily,fontStyle:DataObj.footerfontStyle}} class="text-justify">
           {data.aboutUs}
            </p>
          </div>

<div class="col-md-2"></div>
        <div class="col-md-4">
          <div class="part-2">
            <div class="title mb-3" style={{color:DataObj.fontColor}}>GET IN TOUCH</div>
            <div class="social-icons">
             
              <div class="location-w mb-3">
                <div class="location-icon"><PinDropIcon style={{color:DataObj.fontColor}}></PinDropIcon></div>
               <div class="location-text" style={{color:DataObj.fontColor, fontColor:"white", textDecoration:"none",cursor:"pointer",fontFamily:DataObj.footerfontFamily,fontStyle:DataObj.footerfontStyle}}>
                 <a >
{data.address}                  
</a></div>
              </div>
              <div class="location-w mb-3">
                <div class="location-icon"><CallIcon style={{color:DataObj.fontColor}}/></div>
               <div class="location-text" style={{color:DataObj.fontColor, fontColor:"white", textDecoration:"none", cursor:"pointer",fontFamily:DataObj.footerfontFamily,fontStyle:DataObj.footerfontStyle}}><a >{data.contactNumber}</a></div>
              </div>
              <div class="location-w mb-3">
                <div class="location-icon"><MailIcon style={{color:DataObj.fontColor}}/></div>
               <div class="location-text" style={{color:DataObj.fontColor, fontColor:"white", textDecoration:"none",cursor:"pointer",fontFamily:DataObj.footerfontFamily,fontStyle:DataObj.footerfontStyle}}><a onClick={()=>{window.open("mailto:yash@gmail.com")}}>{data.email}</a></div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>  
        </div>
    )
}

export default Footer
