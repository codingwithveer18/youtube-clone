import "./Video.css";
import { useContext } from "react";
import ThemeContext from "./context/theme";
import Usevideodispatch from "../hooks/videodispatch";

function Video({
  id,
  title,
  channel,
  views,
  time,
  verify,
  children,
  editVideo,
}) {
  const themeContext = useContext(ThemeContext);
  const dispatch = Usevideodispatch();

  // useEffect(() => {
  //   const idx = setInterval(() => {//will give the id of the element who were rendering
  //     console.log("VIDEO PLAYING ", id);
  //   }, 3000);
  //   return () => {
  //     clearInterval(idx); //will clean the id when use effect run first , so if i delete a video then for that new id will be created by set interval and print will will be cleared
  //   };
  // }, [id]);

  return (
    <>
      <div className={`products ${themeContext}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="items">
          <img src={`https://picsum.photos/id/${id}/367/267`} alt="error" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verify && "✅"}
        </div>
        <div className="views">
          {views} views <span className="time">.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
