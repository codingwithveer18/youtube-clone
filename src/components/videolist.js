import Video from "./Video";
import PlayButton from "./playbutton";
function VideoList({ products }) {
  return (
    <>
      {products.map((products) => (
        <Video
          key={products.id}
          id={products.id}
          title={products.title}
          channel={products.channel}
          views={products.views}
          time={products.time}
          verify={products.verified}
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
    </>
  );
}

export default VideoList;
