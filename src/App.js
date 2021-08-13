import React ,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'; 
import { Topbar } from './Topbar';
import Content from './Content';


function App() {
  const [items, setItems] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchItems = async ()=>{
        const res= await axios.get(`https://www.breakingbadapi.com/api/characters`)

        console.log(res.data)
        setItems(res.data);
        setIsLoading(false);

    }
    fetchItems();
  
  }, [])

  return (
    <div className="App">
    <Topbar/>
    <Content isLoading={isLoading} items={items} />
   
    </div>
  );
}

export default App;
