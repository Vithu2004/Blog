import "../Style/PopularArticles.css";
import ArticleComponent from "./ArticleComponent";
import bbg from "../Assets/hero-banner-buble-background.png";

function PopularArticles() {
  return (
    <section className="bi-popular-article">
      <h2 className="bi-popular-title">Popular topic</h2>
      <div className="bi-popular-article-section">
        <ArticleComponent
          className="bi-popular-article-article one"
          imgProp={bbg}
          titleProp="VV"
          descProp="fcfdgfdd"
          dateProp="12/06/2001"
        />
        <ArticleComponent
          className="bi-popular-article-article two"
          imgProp={bbg}
          titleProp="VV"
          descProp="fcfdgfdd"
          dateProp="12/06/2001"
        />
        <ArticleComponent
          className="bi-popular-article-article three"
          imgProp={bbg}
          titleProp="VV"
          descProp="fcfdgfdd"
          dateProp="12/06/2001"
        />
      </div>
    </section>
  );
}

export default PopularArticles;
