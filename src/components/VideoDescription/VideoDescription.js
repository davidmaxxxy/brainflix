import React from "react";
import "../VideoDescription/video-description.scss";
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
            <h3 className="h3-black-bold">By {channel}</h3>
          </div>
          <div className="video-description__details--date">
            {" "}
            <h3 className="h3-light-gray">
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
              <ViewIcon /> <h3 className="h3-light-gray">{views}</h3>
            </div>
            <div className="video-description__details--stats__likes">
              <HeartIcon /> <h3 className="h3-light-gray">{likes}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="video-description__description-content">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default VideoDescription;
