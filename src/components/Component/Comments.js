const Comments = ({ comments }) => {
  return (
    <section className="commentForm-section">
      <h1 className="commentForm-section__title-container">
        Join the Conversations
      </h1>
      <div className="commentForm-section__form-section">
        <div className="commentForm-section__form-section--img-container">
          <img
            className="commentForm-section__form-section--img-container--img"
            src="./assets/Images/Mohan-muruge.jpg"
          />
        </div>
        <div className="commentForm-section__form-section--form-container">
          <form
            className="commentForm-section__form-section--form-container--form"
            id="commentForm-section-form"
          >
            <label htmlFor="name"> </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <label htmlFor="comment"> COMMENT </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
            <input type="submit" id="submit-comment" value="Comment" />
          </form>
        </div>
      </div>
      <div className="commentForm-section__comments-section">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="commentForm-section__comments-container"
          >
            <div className="commentForm-section__comments-container--img-container">
              <div className="commentForm-section__comments-container--img"></div>
            </div>
            <div className="commentForm-section__comments-container--content-container">
              <div className="commentForm-section__comments-container--title-container">
                <p>{comment.name}</p>
                <p>
                  {new Date(comment.timestamp).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="commentForm-section__comments-container--content">
                <p>{comment.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
