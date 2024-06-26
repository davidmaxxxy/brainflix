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

console.log(videoDetails[0]);
console.log(videosJSON[0]);

function App() {
  const [details, setDetails] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videosJSON);

  console.log(details);

  return (
    <div className="App">
      <Header />
      <Video image={details.image} />
      <VideoDescription
        title={details.title}
        channel={details.channel}
        timestamp={details.timestamp}
        views={details.views}
        likes={details.likes}
      />
      <Comments comments={details.comments} />
      <NextVideos videos={videos} mainVidoeId={details.id} />
    </div>
  );
}

export default App;
