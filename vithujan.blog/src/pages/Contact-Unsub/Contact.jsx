import "./Contact-UnsubNewsletter.css";
import PopularArticles from "../../Component/PopularArticles";

function Contact() {
  return (
    <section className="bi-CUN contact">
      <h2 className="bi-CUN-title">CONTACT</h2>
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
        <input
          className="bi-CUN-form-item phone"
          type="text"
          id="phone"
          placeholder="Phone number"
          required
        />
        <textarea
          className="bi-CUN-form-item message"
          id="message"
          placeholder="Message"
          required
        />
        <button className="bi-CUN-form-item-button" type="button">
          SENT
        </button>
      </form>
      <PopularArticles />
    </section>
  );
}

export default Contact;
