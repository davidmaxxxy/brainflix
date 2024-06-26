import React from "react";
import "../../styles/partials/styles.css";

const VideoDescription = ({
  channel,
  image,
  timestamp,
  views,
  likes,
  title,
}) => {
  return (
    <section className="video-description">
      <div className="video-description__title">
        <h1>{title}</h1>
      </div>
      <div className="video-description__creator">{channel}</div>
      <div className="video-description__date">
        {new Date(timestamp).toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
        })}
      </div>
      <div className="video-description__stats">
        <div className="video-description__stats__views">
          <i className="fas fa-eye"></i> {views}
        </div>
        <div className="video-description__stats__likes">
          <i className="fas fa-heart"></i> {likes}
        </div>
      </div>
      <div className="video-description__description">
        {/* Add your video description here */}
      </div>
    </section>
  );
};

export default VideoDescription;
