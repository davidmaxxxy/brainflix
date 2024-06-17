const VideoDescription = () => {
  return (
    <section className="video-description">
      <div className="video-description__creator">John Doe</div>
      <div className="video-description__date">June 17, 2024</div>
      <div className="video-description__stats">
        <div className="video-description__stats__views">
          <i className="fas fa-eye"></i> 100 Views
        </div>
        <div className="video-description__stats__likes">
          <i className="fas fa-heart"></i> 20 Likes
        </div>
      </div>
      <div className="video-description__description">
        {/* Add your video description here */}
      </div>
    </section>
  );
};

export default VideoDescription;
