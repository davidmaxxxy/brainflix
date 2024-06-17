const NextVideos = () => {
  return (
    <section className="next-videos">
      <div className="next-videos__title">NEXT VIDEOS</div>
      <div className="next-videos__list">
        <div className="next-videos__video-container">
          <div className="next-videos__video-container--video-img">
            <img src="video-thumbnail.jpg" alt="Video Thumbnail" />
          </div>
          <div className="next-videos__video-container--video-desc">
            <p className="next-videos__video-container--video-desc-bold">
              This is a Sample Video Title
            </p>
            <p className="next-videos__video-container--video-desc-standard">
              by John Doe
            </p>
          </div>
        </div>
        {/* Add more NextVideo components here for additional videos */}
      </div>
    </section>
  );
};

export default NextVideos;
