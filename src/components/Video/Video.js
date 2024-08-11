import "../Video/video.scss";

const Video = ({ image }) => {
  return (
    <section className="video">
      <video
        width="100%"
        height="auto"
        controls
        poster={image}
        className="video__player"
      >
        <source src="video-placeholder.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
