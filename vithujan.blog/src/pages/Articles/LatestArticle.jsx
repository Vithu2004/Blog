import "./LatestArticle.css";
import ArticleComponent from "../../Component/ArticleComponent";
import bbg from "../../Assets/hero-banner-buble-background.png";
import { useState } from "react";
import { useEffect } from "react";

function LatestArticle() {
  let [dataArticle, setData] = useState([]);
  let articlesImages = [];

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 5e5182f30c25906c76b86a91094b5bd189f77c087edba5bcf024f8f8f104504732988c69331f21471674ed83b62fe2fd5125235f27bb4579cdcde04dce3eb310f9ad9b83bbb55e8e1c01ce1ca41f27cd4dc33aab451a79326d0715c74647ae8a04d298d7612a11f19a6f62d3d3f870a3c974c352e18ff06834dfe4b6aa3c2781"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/articles?populate=ArticleImage",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.log("error", error));
  }, []);

  dataArticle.map(({ id, attributes }) =>
    articlesImages.push(attributes.ArticleImage.data.attributes.url)
  );

  return (
    <section className="bi-l-article article-page">
      <h2 className="bi-l-article-title article-page">Latest Article</h2>
      <section className="bi-l-section-articles article-page">
        {dataArticle.map(({ id, attributes }) => (
          <ArticleComponent
            key={id}
            imgProp={"http://localhost:1337" + articlesImages[id - 1]}
            titleProp={attributes.MainTitle}
            descProp={attributes.Description}
            dateProp={attributes.Date}
          />
        ))}
      </section>
    </section>
  );
}

export default LatestArticle;
