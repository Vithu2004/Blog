import PopularArticles from "../../Component/PopularArticles";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="bi-about-me">
      <div className="bi-about-hero-banner">
        <h2 className="bi-about-title">ABOUT ME</h2>
      </div>
      <div className="bi-about-main-text">
        {/* Texte A changer */}
        <p className="bi-about-main-text-p">
          Quickly monetize synergistic portals via efficient e-commerce.
          Phosfluorescently reinvent frictionless intellectual capital vis-a-vis
          an expanded array of niches. Efficiently provide access to interactive
          scenarios vis-a-vis bleeding-edge value. Energistically maximize
          premium meta-services and multifunctional collaboration and
          idea-sharing. Dramatically unleash front-end value after
          out-of-the-box opportunities. Energistically streamline magnetic
          action items after global markets. Collaboratively scale
          backward-compatible leadership skills and 24/7 best practices.
          Objectively exploit emerging methodologies vis-a-vis functionalized
          ideas. Energistically reconceptualize out-of-the-box innovation
          vis-a-vis cooperative methods of empowerment. Uniquely foster
          revolutionary value whereas accurate communities.
        </p>
        <p className="bi-about-main-text-p">
          Conveniently engineer robust experiences after performance based
          initiatives. Credibly communicate strategic technology whereas turnkey
          functionalities. Professionally re-engineer magnetic markets for
          highly efficient functionalities. Efficiently fabricate user friendly
          opportunities for backward-compatible experiences. Competently scale
          team building relationships through real-time solutions.
        </p>
      </div>
      <PopularArticles />
    </section>
  );
}

export default AboutMe;
