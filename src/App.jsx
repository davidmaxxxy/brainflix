import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";
import VideoDetails from "./components/VideoDetails/VideoDetails.jsx";
import Header from "./components/Header/Header.jsx";
import axios from "axios";
import "./App.css";
import "./components/Header/header.css";
import "./styles/partials/styles.css";

function App() {
  const [mainVideo, setMainVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const apiURL = `http://localhost:8080/videos`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get(apiURL);
        const data = videosResponse.data;
        setVideos(data);
        if (data.length > 0) {
          const mainVideoResponse = await axios.get(`${apiURL}/${data[0].id}`);
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
