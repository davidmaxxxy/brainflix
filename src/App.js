import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/Page/UploadPage";
import VideoDescription from "./components/Component/VideoDescription";
import Comments from "./components/Component/Comments";
import NextVideos from "./components/Component/NextVideo";
import Header from "./components/Component/Header";
import Video from "./components/Component/Video";
import VideoDetails from "./pages/Page/VideoDetails";
import videoDetails from "./data/video-details.json";
import videosJSON from "./data/videos.json";
import "./App.css";
import "./styles/partials/header.css";
import "./styles/partials/styles.css";

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
              <VideoDetails
                mainVideo={mainVideo}
                videos={videos}
                handleNextVideo={handleNextVideo}
              />
            }
          />
          <Route
            path="/video/:id"
            element={
              <VideoDetails
                mainVideo={mainVideo}
                videos={videos}
                handleNextVideo={handleNextVideo}
              />
            }
          />
          {/* Add Route for page not found */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
