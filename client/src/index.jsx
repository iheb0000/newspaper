import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import axios from 'axios';
import Additeam from './components/add.jsx'
import Search from './components/search.jsx';

const App = () => {
  const [items, setItems] = useState([]);
  const [updater, setUpdater] = useState(false);

  const fetch = () => {
    axios
      .get("http://localhost:3000/api/items/")
      .then((response) => {
          const data = response.data.reverse()
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetch();
      }, []);
      const additeam = (title,body) => {
      console.log("addProduct", body);
      axios
        .post("http://localhost:3000/api/items/", {
          title:title,
          body:body
        })
        .then((data) => {
          setUpdater(title,body);
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const deleteProduct = (id) => {
      axios.delete(`http://localhost:3000/api/items/${id}`)
        
        .then((data) => { fetch()
        }) 
        .catch((err) => {
          console.log(err);
        });
    };
    const updateProduct = (id, body) => {
      axios.put(`http://localhost:3000/api/items/${id}`, body)
        .then((data) => {
          fetch()
        })
        .catch((err) => {
          console.log(err);
        });
    };
  const search = (title) => {
    axios
      .get(`http://localhost:3000/api/items/${title}`)
      .then((response) => {
console.log(response.data.title,'titrle');
setItems(response.data.title);
    
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
  return (
    <div> <center>
      <div className='title'>News</div> 
      <ul className='ul'>
  <li><a href="default.asp">Home</a></li>
</ul> 
<img className='img' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/76D4/production/_88502403_513030302.jpg" alt="img" />
<Search search={search}/>
      <Additeam  additeam={additeam} />
      <List deleteProduct={deleteProduct} items={items} upd={updateProduct}/>
     
      </center>  
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('app'))