import React from "react";
import { useParams } from "react-router-dom";
import VideoDescription from "../../components/Component/VideoDescription";
import Comments from "../../components/Component/Comments";
import NextVideos from "../../components/Component/NextVideo";
import Video from "../../components/Component/Video";
import videoDetails from "../../data/video-details.json";
import videosJSON from "../../data/videos.json";
import "../../styles/partials/styles.scss";

const VideoDetails = ({ mainVideo, videos, handleNextVideo }) => {
  const { id } = useParams();
  const currentVideo = id
    ? videoDetails.find((video) => video.id === id)
    : mainVideo;
  const filteredVideos = videosJSON.filter(
    (video) => video.id !== (id || mainVideo.id)
  );

  if (!currentVideo) {
    return <div>Video not found</div>;
  }

  return (
    <div className="video-details-page">
      <Video image={currentVideo.image} />
      <div className="main-content">
        <div className="main-content__left">
          <VideoDescription
            title={currentVideo.title}
            channel={currentVideo.channel}
            timestamp={currentVideo.timestamp}
            views={currentVideo.views}
            likes={currentVideo.likes}
            description={currentVideo.description}
          />
          <Comments comments={currentVideo.comments} />
        </div>
        <div className="main-content__right">
          <NextVideos
            handleNextVideo={handleNextVideo}
            videos={filteredVideos}
            mainVidoeId={currentVideo.id}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
