import "./Addvideo.css";
import { useEffect, useState } from "react";
import Usevideodispatch from "../../hooks/videodispatch";

const initstate = {
  verified: "",
  title: "",
  views: "",
  time: "",
  channel: "",
};

function AddVideo({ editableVideo }) {
  const [product, setProduct] = useState(initstate);
  const dispatch = Usevideodispatch();
  // const inputref = useRef();

  function handlesubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: product });
      window.alert("Soch Le Firse");
    } else {
      dispatch({ type: "ADD", payload: product });
      // window.alert("KRDU ADD !!");
    }
    setProduct(initstate);
  }

  function handlechange(e) {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (editableVideo) {
      setProduct(editableVideo);
    }
    //inputref.current.value = "demo"; //it will pre erite demo in the title input box
    //inputref.current.focus();//it will automatically make focus on that tab of input . ex : [type |] that '|' cursor
  }, [editableVideo]);

  return (
    <form className="form" onSubmit={handlesubmit}>
      <div className="container">
        <input
          type="text"
          required={true}
          name="title"
          onChange={handlechange}
          value={product.title}
          className="input"
        />
        <label className="label">Title</label>
      </div>
      <div className="container">
        <input
          type="text"
          required={true}
          name="channel"
          onChange={handlechange}
          value={product.channel}
          className="input"
        />
        <label className="label">Channel Name</label>
      </div>
      <div className="container">
        <input
          type="text"
          required={true}
          name="views"
          onChange={handlechange}
          value={product.views}
          className="input"
        />
        <label className="label">Views</label>
      </div>
      <div className="container">
        <input
          type="text"
          required={true}
          name="time"
          onChange={handlechange}
          value={product.time}
          className="input"
        />
        <label className="label">Time</label>
      </div>
      <button className="btn" type="submit">
        {editableVideo ? "EDIT VIDEO" : "ADD VIDEO"}
      </button>
    </form>
  );
}

export default AddVideo;
