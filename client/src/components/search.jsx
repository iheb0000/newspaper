import React, { useState } from 'react'

function Search(title) {
    const [search,setSearch]=useState("")
return (
    <center> <div style={{ textAlign: 'center' }}> 

<input className='search' typetype="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} /> <br />
    <br /> <button   className='button' onClick={()=>props.search(props.item.title)}> search</button>

    </div> </center>
)
}

export default Search