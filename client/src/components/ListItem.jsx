import React from 'react';
import { useState } from 'react';
const ListItem = (props) => {
 
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
 
return (
  <div> <center>
    
    <h2 className='h2'>  { props.item.title }</h2>
    <box className='box'>  { props.item.body }</box> <br />
    <button  className='button'onClick={()=>props.delet(props.item._id)}>fake News</button>
<br />
    <br /> <br /> <br /> 
    <br /> <br /> <br /> 
    <input className='input2' type="text"  placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
    <br /> <br />
    
    <input  className='input2'type="text" placeholder='body' onChange={(e)=>setBody(e.target.value)}/></center>
    <br /> <br />
    
    <button className='button'onClick={()=>props.updateProduct(props.item._id,{title,body})}>update the News </button>

  </div>)
}

export default ListItem;