import { useContext } from "react";
import Videoscontext from "../components/context/Videoscontext";

function Usevideos() {
  const videoContext = useContext(Videoscontext);
  return videoContext; // Return the context object directly
}

export default Usevideos;
