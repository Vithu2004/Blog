import { useState } from "react";
import "../Style/UtilisationCookie.css";

function UtilisationCookie() {
  const [isFirstOpen, setIsFirstOpen] = useState(
    JSON.parse(localStorage.getItem("first-open")) || true
  );

  const handleAccept = () => {
    localStorage.setItem("first-open", JSON.stringify(false));
    setIsFirstOpen(false);
    console.log(isFirstOpen);
  };

  return (
    <section
      className={
        isFirstOpen ? "bi-utilisation-cookie" : "bi-utilisation-cookie-none"
      }
    >
      <div className="bi-UT-paragraph-part">
        <p>Cookie Usage</p>
        <p>
          This website uses cookies to enhance your browsing experience. Cookies
          are small text files stored on your device when you visit a website.
          They are used to recognize you during your visits and personalize your
          experience.
        </p>
        <p>We use the following types of cookies:</p>
        <p>
          Essential Cookies: These are necessary for the proper functioning of
          the site and cannot be disabled.
        </p>
        <p>
          Performance Cookies: They help us understand how you use the site,
          enabling us to improve its functionality.
        </p>
        <p>
          Functionality Cookies: These allow the site to remember your
          preferences, such as language.
        </p>
        <p>
          Advertising Cookies: They are used to display relevant ads to you.
        </p>
        <p>
          You can control and manage cookies via your browser settings. Please
          note that disabling essential cookies may impact site functionality.
        </p>
        <p>
          To learn more about our use of cookies and how we protect your data,
          please refer to our Privacy Policy.
        </p>
        <p>Last Updated: 28/09/2023</p>
      </div>
      <button
        onClick={() => handleAccept()}
        className="bi-UT-button"
        type="button"
      >
        I ACCEPT
      </button>
    </section>
  );
}

export default UtilisationCookie;
