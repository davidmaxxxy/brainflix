import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/Page/UploadPage";
import VideoDescription from "./components/Component/VideoDescription";
import Comments from "./components/Component/Comments";
import NextVideos from "./components/Component/NextVideo";
import Header from "./components/Component/Header";
import Video from "./components/Component/Video";
import videoDetails from "./data/video-details.json";
import videosJSON from "./data/videos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import logo from "./assets/images/BrainFlix-logo.svg";
import "./App.css";
import "./styles/partials/header.css";
import "./styles/partials/styles.css";

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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/"
            element={
              <>
                <Video image={mainVideo.image} />
                <div className="main-content">
                  <div className="main-content__left">
                    <VideoDescription
                      title={mainVideo.title}
                      channel={mainVideo.channel}
                      timestamp={mainVideo.timestamp}
                      views={mainVideo.views}
                      likes={mainVideo.likes}
                      description={mainVideo.description}
                    />
                    <Comments comments={mainVideo.comments} />
                  </div>
                  <div className="main-content__right">
                    <NextVideos
                      handleNextVideo={handleNextVideo}
                      videos={videos}
                      mainVidoeId={mainVideo.id}
                    />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
