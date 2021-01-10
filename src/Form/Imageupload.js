import React,{useState} from 'react'

function Imageupload(props) {
    const [image,setImage]=useState(null)
    const handleChange=(e)=>{
        let reader = new FileReader();
    let file = e.target.files[0];
    // var reader = new FileReader();
reader.readAsDataURL(file);

reader.onload = function () {
    console.log(reader.result);//base64encoded string
    setImage(reader.result)
    props.onChange(reader.result,props.fld.id)
};
   
  
    }
    return (
        <div >
            <div style={{width:"100%",marginTop:"1%"}}> {image && <img width="100px" height="100px" src={image}/>}</div>
           <div  style={{width:"100%", marginTop:"1%"}}><input type="file" onChange={handleChange}/></div>
            
            
        </div>
    )
}

export default Imageupload
