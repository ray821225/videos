import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  // console.log(video);

  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item apple item"
    >
      <img
        alt={video.snippet.title}
        className="ui image apple"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
