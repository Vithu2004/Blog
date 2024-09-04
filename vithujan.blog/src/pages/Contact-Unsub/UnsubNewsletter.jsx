import "./Contact-UnsubNewsletter.css";
import PopularArticles from "../../Component/PopularArticles";

function UnsubNewsletter() {
  return (
    <section className="bi-CUN UnsubNewsletter">
      <h2 className="bi-CUN-title">UNSUBSCRIBE OF THE NEWSLETTER</h2>
      <form className="bi-CUN-form" id="contact-form">
        <input
          className="bi-CUN-form-item name"
          type="text"
          id="name"
          placeholder="Name"
          required
        />
        <input
          className="bi-CUN-form-item email"
          type="text"
          id="email"
          placeholder="Email"
          required
        />
        <textarea
          className="bi-CUN-form-item message"
          id="message"
          placeholder="Tell us why"
        />
        <button className="bi-CUN-form-item-button" type="button">
          SENT
        </button>
      </form>
      <PopularArticles />
    </section>
  );
}

export default UnsubNewsletter;
