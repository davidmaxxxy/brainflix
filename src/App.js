import { React, useState } from "react";
import logo from "./assets/images/BrainFlix-logo.svg";
import "./styles/partials/header.css";
import "./styles/partials/styles.css";
import VideoDescription from "./components/Component/VideoDescription";
import Comments from "./components/Component/Comments";
import NextVideos from "./components/Component/NextVideo";
import "./App.css";
import Header from "./components/Component/Header";
import Video from "./components/Component/Video";
import videoDetails from "./data/video-details.json";
import videosJSON from "./data/videos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

console.log(videoDetails[0]);
console.log(videosJSON[0]);

function App() {
  const [mainVideo, setMainVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videosJSON);

  const handleNextVideo = (videoId) => {
    const filteredVideo = videoDetails.filter((video) => video.id === videoId);
    setMainVideo(filteredVideo[0]);
  };

  return (
    <>
      
      <div className="App">
        <Header />
        <Video image={mainVideo.image} />
        <VideoDescription
          title={mainVideo.title}
          channel={mainVideo.channel}
          timestamp={mainVideo.timestamp}
          views={mainVideo.views}
          likes={mainVideo.likes}
          description={mainVideo.description}
        />
        <Comments comments={mainVideo.comments} />
        <NextVideos
          handleNextVideo={handleNextVideo}
          videos={videos}
          mainVidoeId={mainVideo.id}
        />
      </div>
    </>
  );
}

export default App;
