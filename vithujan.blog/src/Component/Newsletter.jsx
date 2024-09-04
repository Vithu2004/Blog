import "../Style/Newsletter.css";

function Newsletter() {
  return (
    <form className="bi-newsletter">
      <h2 className="bi-newsletter-title">
        Subscribe to the newsletter to follow my blog :
      </h2>
      <input
        className="bi-newsletter-input name"
        placeholder="Name : "
        type="text"
      />
      <input
        className="bi-newsletter-input email"
        placeholder="Email :"
        type="text"
      />
      <button className="bi-newsletter-button" type="button">
        Subscribe
      </button>
    </form>
  );
}

export default Newsletter;
