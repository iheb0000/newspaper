import React,{useState} from 'react'

function Additeam(props) {
  
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")


  return (
    <div>
      {/* <input className='search' type="text" placeholder='search ' /> */}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <input className='input'type="text"   placeholder='title' onChange={ (e)=>setTitle(e.target.value) } /> <br />
      <input className='input'type="text"   placeholder='write here ...' onChange={(e)=>setBody(e.target.value) } /> <br />
      <button  className='button' onClick={() => props.additeam(title,body)}>Add news</button>
    </div>
  )
}

export default Additeam


