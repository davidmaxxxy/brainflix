const NextVideos = ({ videos, mainVidoeId, handleNextVideo }) => {
  const filteredVideosArray = videos.filter(
    (video) => video.id !== mainVidoeId
  );

  console.log(filteredVideosArray);

  return (
    <section className="next-videos">
      <div className="next-videos__title">Next Videos</div>
      <div className="next-videos__list">
        {filteredVideosArray.map((video) => (
          <div
            onClick={() => handleNextVideo(video.id)}
            key={video.id}
            className="next-videos__video-container"
          >
            <div className="next-videos__video-container--video-img">
              <img src={video.image} alt={video.title} />
            </div>
            <div className="next-videos__video-container--video-desc">
              <p className="next-videos__video-container--video-desc-bold">
                {video.title}
              </p>
              <p className="next-videos__video-container--video-desc-standard">
                {video.channel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextVideos;
