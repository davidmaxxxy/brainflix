import logo from "./assets/images/BrainFlix-logo.svg";
import "./App.css";
import Header from "./components/Component/Header";
import Video from "./components/Component/Video";
import "./styles/partials/header.css";
import "./styles/partials/styles.css";
import VideoDescription from "./components/Component/VideoDescription";
import Comments from "./components/Component/Comments";
import NextVideos from "./components/Component/NextVideo";
import { React, useState } from "react";

import data from "./data/video-details.json";

console.log(data[0].title);

function App() {
  const [mainVideo, setMainVideo] = useState(data[0]);
  console.log(mainVideo);

  return (
    <div className="App">
      <Header />
      <Video />
      <VideoDescription />
      <Comments key={mainVideo.id} comments={mainVideo.comments} />
      <NextVideos />
    </div>
  );
}

export default App;
