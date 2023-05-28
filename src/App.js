import "./App.css";
import { useState } from "react";
import Video from "./components/Video";
import Header from "./components/Header";
import PlayButton from"./components/playbutton"
import productsDB from "./data/data";


function App() {
  const [products , setProducts]=useState( productsDB)
  return (
    <>
      <Header></Header>
    <div>
      <button onClick={console.log('HELLO')}>ADD VIDEO</button>
    </div>
      <div className="App">
        {products.map((products) => (
          <Video
            key={products.id}
            id={products.id}
            title={products.title}
            channel={products.channel}
            views={products.views}
            time={products.time}
            verify={products.verified}
          >
            <PlayButton
            /*can use onClick also , it's a user defined onSmash which will execute the command initialised in it */ 
            onPlay={() =>console.log("PLAYING.." , products.title)} 
            onPause={() =>console.log("PAUSED..", products.title)}
          >{products.title}</PlayButton>
          </Video>
        ))}
      </div>
    </>
  );
}
export default App;
