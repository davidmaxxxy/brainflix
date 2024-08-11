import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoDescription from "../VideoDescription/VideoDescription";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideo/NextVideo";
import Video from "../Video/Video";
import axios from "axios";
import "../VideoDetails/video-details.scss";

const VideoDetails = ({ mainVideo }) => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(mainVideo);
  const [videos, setVideos] = useState([]);

  const apiUrl = `http://localhost:8080/videos`;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(apiUrl);
        setVideos(response.data);
      } catch (error) {
        console.error(`Error fetching video details:`, error);
      }
    };

    const fetchVideoDetails = async (videoId) => {
      try {
        const response = await axios.get(`${apiUrl}/${videoId}`);
        setCurrentVideo(response.data);
      } catch (error) {
        console.error(`Error fetching video details:`, error);
      }
    };

    fetchVideos();

    if (id) {
      fetchVideoDetails(id);
    } else {
      setCurrentVideo(mainVideo);
    }
  }, [id, mainVideo, apiUrl]);

  if (!currentVideo) {
    return <div>Video not found</div>;
  }

  const filteredVideos = videos.filter((video) => video.id !== currentVideo.id);

  console.log("Current Video:", currentVideo);
  console.log("Filtered Videos:", filteredVideos);

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
