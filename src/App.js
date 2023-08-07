import "./App.css";
import Header from "./components/Header";
import AddVideo from "./components/images/Addvideo";
import { useReducer, useState } from "react";
import VideoList from "./components/videolist";
import ThemeContext from "./components/context/theme";
import Videoscontext from "./components/context/Videoscontext";
import Videosdispatchcontext from "./components/context/Videosdispatchcontext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [products, dispatch] = useReducer(videoReducer, []);
  const [mode, setmode] = useState("darkmode");
  function videoReducer(products, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "OLD":
        return [...products, { ...action.payload, id: products.length + 1 }];
      case "ADD":
        return [...products, { ...action.payload, id: products.length + 1 }];
      case "DELETE":
        return products.filter((product) => product.id !== action.payload);
      case "UPDATE":
        const index = products.findIndex((v) => v.id === action.payload.id);
        const updvid = [...products];
        updvid.splice(index, 1, action.payload);
        setEditableVideo(null);
        return updvid;
      default:
        return products;
    }
  }

  function editVideo(id) {
    setEditableVideo(products.find((video) => video.id === id));
  }

  return (
    <>
      <Header></Header>
      <ThemeContext.Provider value={mode}>
        <Videoscontext.Provider value={products}>
          <Videosdispatchcontext.Provider value={dispatch}>
            <div className={`App ${mode}`}>
              <button
                className="btn"
                onClick={() =>
                  setmode(mode === "darkmode" ? "lightmode" : "darkmode")
                }
              >
                MODE
              </button>
              <AddVideo editableVideo={editableVideo}></AddVideo>
              <VideoList editVideo={editVideo}></VideoList>
            </div>
          </Videosdispatchcontext.Provider>
        </Videoscontext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
