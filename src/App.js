import "./App.css";
import Header from "./components/Header";
import productsDB from "./data/data";
import AddVideo from "./components/images/Addvideo";
import { useState } from "react";
import VideoList from "./components/videolist";

function App() {
  const [products, setProducts] = useState(productsDB);

  function additem(product) {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  }
  return (
    <>
      <Header></Header>
      <div className="App">
        <AddVideo additem={additem}></AddVideo>
      </div>
      <VideoList products={products}></VideoList>
    </>
  );
}
export default App;
