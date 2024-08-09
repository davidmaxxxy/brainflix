import AddIcon from "../../assets/Icons/AddIcon";
import userLogo from "../../assets/images/Mohan-muruge.jpg";
import "../Comments/comments.scss";

const Comments = ({ comments }) => {
  return (
    <section className="commentForm-section">
      <h3 className="commentForm-section__no-of-comments">
        {comments.length} Comments
      </h3>
      <h3 className="h3-light-gray  commentForm-section__title-container">
        JOIN THE CONVERSATION
      </h3>
      <div className="commentForm-section__form-section">
        <div className="commentForm-section__form-section--img-container">
          <img
            className="commentForm-section__form-section--img-container--img"
            src={userLogo}
            alt="User Logo"
          />
        </div>
        <div className="commentForm-section__form-section--form-container">
          <form
            className="commentForm-section__form-section--form-container--form"
            id="commentForm-section-form"
          >
            <label htmlFor="name"> </label>
            <textarea
              className="commentForm-section__form-section--form-container--form--textarea"
              id="comment"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
            <button type="submit" id="submit-comment" className="submit-button">
              <AddIcon />
              <h3>COMMENT</h3>
            </button>
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
              <div className="commentForm-section__comments-container--img-container--img"></div>
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
