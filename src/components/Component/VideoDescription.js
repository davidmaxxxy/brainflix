import React from "react";
import "../../styles/partials/styles.css";
import ViewIcon from "../Icons/ViewIcon";
import HeartIcon from "../Icons/HeartIcon";

const VideoDescription = ({
  channel,
  image,
  timestamp,
  views,
  likes,
  title,
  description,
}) => {
  return (
    <section className="video-description">
      <div className="video-description__title">
        <h1>{title}</h1>
      </div>
      <div className="video-description__details">
        <div className="video-description__details--container">
          <div className="video-description__details--creator">
            {" "}
            <h3>By {channel}</h3>{" "}
          </div>
          <div className="video-description__details--date">
            {" "}
            <h3>
              {new Date(timestamp).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </h3>
          </div>
        </div>
        <div className="video-description__details--container">
          <div className="video-description__details--stats">
            <div className="video-description__details--stats__views">
              <ViewIcon color="black" /> <h3>{views}</h3>
            </div>
            <div className="video-description__details--stats__likes">
              <HeartIcon color="black" /> <h3>{likes}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="video-description__description-content">
        <h3>{description}</h3>
      </div>
    </section>
  );
};

export default VideoDescription;
