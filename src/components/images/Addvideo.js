import "./Addvideo.css";
import { useState } from "react";

const initstate = {
  channel: "Bhaii meraa",
  verified: true,
  title: "",
  views: "",
  time: "",
};
function AddVideo({ additem }) {
  const [product, setProduct] = useState(initstate);

  function handlesubmit(e) {
    //prevent auto reload of page
    e.preventDefault();
    additem(product);
    setProduct(initstate);
  }
  function handlechange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handlechange}
        placeholder="Title"
        value={product.title}
      />
      <input
        type="text"
        name="time"
        onChange={handlechange}
        placeholder="Duration"
        value={product.time}
      />
      <input
        type="text"
        name="views"
        onChange={handlechange}
        placeholder="Views"
        value={product.views}
      />
      <button onClick={handlesubmit}>ADD VIDEO</button>
    </form>
  );
}

export default AddVideo;
