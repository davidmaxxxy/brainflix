import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage.js";
import VideoDetails from "./components/VideoDetails/VideoDetails.js";
import Header from "./components/Header/Header.js";
import axios from "axios";
import "./App.css";
import "./components/Header/header.css";
import "./styles/partials/styles.css";

function App() {
  const [mainVideo, setMainVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const apiKey = `2f32f7c6-dec0-4006-91ea-4e376c724905`;
  const apiURL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get(apiURL);
        const data = videosResponse.data;
        setVideos(data);
        if (data.length > 0) {
          const mainVideoResponse = await axios.get(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${data[0].id}?api_key=${apiKey}`
          );
          setMainVideo(mainVideoResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiURL]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/"
            element={<VideoDetails mainVideo={mainVideo} videos={videos} />}
          />
          <Route
            path="/video/:id"
            element={<VideoDetails mainVideo={mainVideo} videos={videos} />}
          />
          {/* Add Route for page not found */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
