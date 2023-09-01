import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible,setAlertVisible]= useState(false)
  let items = ["Photcharadanai", "me", "love", "black cat"];
  const name = "Draf";
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div className="App">
      <ListGroup
        items={items}
        heading={name}
        onSelectrdItem={handleSelectedItem}
      />
      <Message />
      
      {alertVisible &&<Alert onClose={()=>setAlertVisible(false)}>
        Hello world
      </Alert>}
      <Button onClick={()=>{setAlertVisible(true)}}>My</Button>
      <Button colour="secondary" onClick={()=>{setAlertVisible(true)}}>D</Button>
    </div>
  );
}

export default App;
