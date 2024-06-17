const Comments = () => {
  return (
    <section className="comments">
      <div className="comments__header">
        <span className="comments__header__count">3 Comments</span>
        <span className="comments__header__text">Comment</span>
      </div>
      <div className="comments__new-comment">
        <img
          src="user.png"
          alt="Profile Picture"
          className="comments__new-comment__profile"
        />
        <div className="comments__new-comment__input">
          <span className="comments__new-comment__input__label">
            Join the conversation
          </span>
          <input
            type="text"
            placeholder="Add a new comment"
            className="comments__new-comment__input__field"
          />
          <button className="comments__new-comment__input__button">
            <i className="fas fa-comment"></i> COMMENT
          </button>
        </div>
      </div>
      <div className="comments__comment">
        <img
          src="user2.png"
          alt="Profile Picture"
          className="comments__comment__profile"
        />
        <div className="comments__comment__content">
          <div className="comments__comment__content__name">Jane Doe</div>
          <div className="comments__comment__content__date">June 18, 2024</div>
          <div className="comments__comment__content__text">
            This is a sample comment. You can add more comments here.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
