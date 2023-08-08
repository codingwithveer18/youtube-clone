import { useEffect } from "react";
import Usevideos from "../hooks/context";
import Video from "./Video";
import PlayButton from "./playbutton";
import axios from "axios";
import Usevideodispatch from "../hooks/videodispatch";
import ProductsDB from "../data/data";

function VideoList({ editVideo }) {
  const products = Usevideos();
  const dispatches = Usevideodispatch();
  const url = "https://my.api.mockaroo.com/videos.json?key=91687e20";
  const savedProducts = ProductsDB;

  useEffect(() => {
    async function getdata() {
      try {
        const res = await axios.get(url);
        dispatches({ type: "LOAD", payload: res.data });
      } catch (error) {
        dispatches({ type: "LOAD", payload: savedProducts });
      }
    }
    getdata();
    // eslint-disable-next-line
  }, [dispatches]);

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
      </div>
    </>
  );
}

export default VideoList;
