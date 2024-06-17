const Video = () => {
  return (
    <section className="video">
      <video
        width="100%"
        height="auto"
        controls
        poster="video-thumbnail.jpg"
        className="video__player"
      >
        {/* Add video source(s) here when functionality is implemented */}
        <source src="your-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
