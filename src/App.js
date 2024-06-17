import logo from "./assets/images/BrainFlix-logo.svg";
import "./App.css";
import Header from "./components/Component/Header";
import Video from "./components/Component/Video";
import "./styles/partials/header.css";
import "./styles/partials/styles.css";
import VideoDescription from "./components/Component/VideoDescription";
import Comments from "./components/Component/Comments";
import NextVideos from "./components/Component/NextVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <VideoDescription />
      <Comments />
      <NextVideos />
    </div>
  );
}

export default App;
