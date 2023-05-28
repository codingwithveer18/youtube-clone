import "./Video.css";

function Video({ title, id, channel, views, time, verify,children}) {
  return (
    <>
      <div className="products">
        <div className="items">
          <img src={`https://picsum.photos/id/${id}/367/267`} alt="error"/>
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
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Video;
