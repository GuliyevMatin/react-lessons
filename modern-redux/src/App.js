import './App.css';
import axios from "axios"
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    axios("http://localhost:8000/api/products",{
      headers: {
        Accept: "application/json"
      }
    }).then(res=>console.log(res))
  },[])

  return (
    <div className="App">
      {/* <button >Added</button> */}
    </div>
  );
}

export default App;
