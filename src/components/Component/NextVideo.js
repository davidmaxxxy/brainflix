import { useNavigate } from "react-router-dom";

const NextVideos = ({ videos, mainVidoeId }) => {
  const navigate = useNavigate();

  const handleClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  const filteredVideosArray = videos.filter(
    (video) => video.id !== mainVidoeId
  );

  return (
    <section className="next-videos">
      <div className="next-videos__title">
        <h3 className="h3-light-gray">NEXT VIDEOS</h3>
      </div>
      <div className="next-videos__list">
        {filteredVideosArray.map((video) => (
          <div
            onClick={() => handleClick(video.id)}
            key={video.id}
            className="next-videos__video-container"
          >
            <div className="next-videos__video-container--video-img">
              <img src={video.image} alt={video.title} />
            </div>
            <div className="next-videos__video-container--video-desc">
              <h3 className="next-videos__video-container--video-desc-bold">
                {video.title}
              </h3>
              <h3 className="next-videos__video-container--video-desc-standard">
                {video.channel}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextVideos;
