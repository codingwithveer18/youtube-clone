import "./Addvideo.css";
import { useEffect, useState } from "react";

const initstate = {
  verified: true,
  title: "",
  views: "",
  time: "",
  channel: "",
};
function AddVideo({ dispatch, editableVideo }) {
  const [product, setProduct] = useState(initstate);

  function handlesubmit(e) {
    //prevent auto reload of page
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: product });
    } else {
      dispatch({ type: "ADD", payload: product });
    }
    setProduct(initstate);
  }
  function handlechange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideo) {
      setProduct(editableVideo);
    }
  }, [editableVideo]);

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
      <input
        type="text"
        name="channel"
        onChange={handlechange}
        placeholder="Channel Name"
        value={product.channel}
      />
      <button onClick={handlesubmit}>
        {editableVideo ? "EDIT VIDEO" : "ADD VIDEO"}
      </button>
    </form>
  );
}

export default AddVideo;
