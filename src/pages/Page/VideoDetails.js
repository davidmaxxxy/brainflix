import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoDescription from "../../components/Component/VideoDescription";
import Comments from "../../components/Component/Comments";
import NextVideos from "../../components/Component/NextVideo";
import Video from "../../components/Component/Video";
import axios from "axios";
import "../../styles/partials/styles.scss";

const VideoDetails = ({ mainVideo, videos }) => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(mainVideo);

  const apiKey = `2f32f7c6-dec0-4006-91ea-4e376c724905`;

  useEffect(() => {
    const fetchVideoDetails = async (videoId) => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
        );
        setCurrentVideo(response.data);
      } catch (error) {
        console.error(`Error fetching video details:`, error);
      }
    };

    if (id) {
      fetchVideoDetails(id);
    } else {
      setCurrentVideo(mainVideo);
    }
  }, [id, mainVideo]);

  if (!currentVideo) {
    return <div>Video not found</div>;
  }

  const filteredVideos = videos.filter((video) => video.id !== currentVideo.id);

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
          <NextVideos videos={filteredVideos} mainVidoeId={currentVideo.id} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
