import { useEffect} from "react";
import Usevideos from "../hooks/context";
import Video from "./Video";
import PlayButton from "./playbutton";
import axios from "axios";
import Usevideodispatch from "../hooks/videodispatch";

function VideoList({ editVideo }) {
  const products = Usevideos();
  const dispatch = Usevideodispatch();
  const url = "https://my.api.mockaroo.com/videos.json?key=790dc270";
  async function handleclick() {
    try {
      const res = await axios.get(url);
      dispatch({ type: "LOAD", payload: res.data });
    }catch (error) {
      console.error("Error fetching data from the API. Loading data from data.js.");
      dispatch({ type: "LOAD", payload: products });
    }
  }
  useEffect(() => {
    async function getdata() {
      try {
    const res = await axios.get(url);
    dispatch({ type: "LOAD", payload: res.data });
  } catch (error) {
    console.error("Error fetching data from the API. Loading data from data.js.");
    dispatch({ type: "LOAD", payload: products });
  }
    }
    getdata()
  }, [dispatch]);

  return (
    <>
      <div className="VideoList">
        {products.map((products) => (
          <Video
            key={products.id}
            id={products.id}
            title={products.title}
            channel={products.channel}
            views={products.views}
            time={products.time}
            verify={products.verified}
            editVideo={editVideo}
          >
            <PlayButton
              /*can use onClick also , it's a user defined onSmash which will execute the command initialised in it */
              onPlay={() => console.log("PLAYING..", products.title)}
              onPause={() => console.log("PAUSED..", products.title)}
            >
              {products.title}
            </PlayButton>
          </Video>
        ))}
        <button onClick={handleclick}>REFRESH VIDEOS</button>
      </div>
    </>
  );
}

export default VideoList;
