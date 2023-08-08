import "./playbutton.css";
import { useContext, useState } from "react";
import ThemeContext from "./context/theme";

function PlayButton({ children, onPlay, onPause }) {
  const themeContext = useContext(ThemeContext);
  const [playing, setBtn] = useState(false); //Wrong Approach
  function handleclick(e) {
    e.stopPropagation();
    if (playing) {
      onPause();
    } else onPlay();

    setBtn(!playing);
  }
  return (
    <button className={themeContext} onClick={handleclick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}
export default PlayButton;
