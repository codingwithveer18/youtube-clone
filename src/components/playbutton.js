import "./playbutton.css";
import { useState } from "react";
function PlayButton({ children, onPlay, onPause }) {
  const [playing, setBtn] = useState(false); //Wrong Approach
  function handleclick(e) {
    e.stopPropagation();
    if (playing) {
      onPause();
    } else onPlay();

    setBtn(!playing);
  }
  return (
    <button onClick={handleclick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}
export default PlayButton;
