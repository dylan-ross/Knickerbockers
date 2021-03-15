import { baseURL, config } from "./services" 
import axios from "axios"
import "./App.css";
import { useEffect } from "react";


function App() {


  useEffect(() => {
    const letsBall = async () => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records[1].fields.Player)
    }
    letsBall()
  }, [])



  return (
    <div className="App">
      <h1>knickerbockers</h1>
    </div>
  );
}

export default App;
