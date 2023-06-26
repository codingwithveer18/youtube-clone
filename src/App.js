import "./App.css";
import Header from "./components/Header";
import productsDB from "./data/data";
import AddVideo from "./components/images/Addvideo";
import { useReducer, useState } from "react";
import VideoList from "./components/videolist";

function App() {
  const [products, dispatch] = useReducer(videoReducer, productsDB);
  const [editableVideo, seteditableVideo] = useState(null);

  function videoReducer(products, action) {
    switch (action.type) {
      case "ADD":
        return [...products, { ...action.payload, id: products.length + 1 }];
      case "DELETE":
        return products.filter((product) => product.id !== action.payload);
      case "UPDATE":
        const index = products.findIndex((v) => v.id === action.payload.id);
        const updvid = [...products];
        updvid.splice(index, 1, action.payload);
        seteditableVideo(null);
        return updvid;

      default:
        return products;
    }
  }

  function editVideo(id) {
    seteditableVideo(products.find((video) => video.id === id));
  }

  return (
    <>
      <Header></Header>
      <div className="App">
        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
      </div>
      <VideoList
        dispatch={dispatch}
        editVideo={editVideo}
        products={products}
      ></VideoList>
    </>
  );
}
export default App;
