const Comments = () => {
  return (
    <section class="commentForm-section">
      <h1 class="commentForm-section__title-container">
        Join the Conversations
      </h1>
      <div class="commentForm-section__form-section">
        <div class="commentForm-section__form-section--img-container">
          <img
            class="commentForm-section__form-section--img-container--img"
            src="./assets/Images/Mohan-muruge.jpg"
          />
        </div>
        <div class="commentForm-section__form-section--form-container">
          <form
            class="commentForm-section__form-section--form-container--form"
            id="commentForm-section-form"
          >
            <label for="name"> NAME </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <label for="comment"> COMMENT </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
            <input type="submit" id="submit-comment" value="Comment" />
          </form>
        </div>
      </div>
      <div class="commentForm-section__comments-section">
        <div class="commentForm-section__comments-container">
          <div class="commentForm-section__comments-container--img-container">
            <div class="commentForm-section__comments-container--img"></div>
          </div>
          <div class="commentForm-section__comments-container--content-container">
            <div class="commentForm-section__comments-container--title-container">
              <p>Joe Doe</p>
              <p>11/02/2024</p>
            </div>
            <div class="commentForm-section__comments-container--content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                minus corporis voluptates esse accusamus perferendis dolore, rem
                ducimus. Consequatur ut cumque at neque consectetur distinctio
                nobis voluptatibus maiores omnis maxime.
              </p>
            </div>
          </div>
        </div>

        <div class="commentForm-section__comments-container">
          <div class="commentForm-section__comments-container--img-container">
            <div class="commentForm-section__comments-container--img"></div>
          </div>
          <div class="commentForm-section__comments-container--content-container">
            <div class="commentForm-section__comments-container--title-container">
              <p>Mark Zuckerberg</p>
              <p>11/02/2024</p>
            </div>
            <div class="commentForm-section__comments-container--content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                minus corporis voluptates esse accusamus perferendis dolore, rem
                ducimus. Consequatur ut cumque at neque consectetur distinctio
                nobis voluptatibus maiores omnis maxime.
              </p>
            </div>
          </div>
        </div>

        <div class="commentForm-section__comments-container">
          <div class="commentForm-section__comments-container--img-container">
            <div class="commentForm-section__comments-container--img"></div>
          </div>
          <div class="commentForm-section__comments-container--content-container">
            <div class="commentForm-section__comments-container--title-container">
              <p>Jeff Bezosinho</p>
              <p>11/02/2024</p>
            </div>
            <div class="commentForm-section__comments-container--content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                minus corporis voluptates esse accusamus perferendis dolore, rem
                ducimus. Consequatur ut cumque at neque consectetur distinctio
                nobis voluptatibus maiores omnis maxime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
