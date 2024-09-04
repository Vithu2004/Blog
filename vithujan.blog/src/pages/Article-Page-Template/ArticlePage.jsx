import "./ArticlePage.css";
import img from "../../Assets/hero-banner-buble-background.png";
import PopularArticles from "../../Component/PopularArticles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ArticlePage() {
  let { id } = useParams();
  let [dataArticle, setData] = useState([]);
  let [mainImage, setMainImage] = useState(null);
  let [articleBlock, setArticleBlock] = useState([]);
  let dummy = false;

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
    fetch(`http://localhost:1337/api/articles/${id}?populate=*`, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.data.attributes))
      .then((result) => setMainImage(dataArticle.MainImage.data.attributes.url))
      .then((result) => setArticleBlock(dataArticle.ArticleBlock))
      .catch((error) => console.log("error", error));
  }, []);

  let herobanner = {
    background: `url(http://localhost:1337${mainImage})`,
  };

  // console.log(dataArticle);
  // console.log(mainImage);
  // console.log(articleBlock);

  return (
    <section className="bi-article-page">
      <section className="bi-article-page-hero-banner" style={herobanner}>
        <h2 className="bi-article-page-title">{dataArticle.MainTitle}</h2>
        <p className="bi-article-page-editor-name">
          by : Vithujan Sooriyaruban
        </p>
      </section>
      <section className="bi-article-main-part">
        <div className="bi-article-main-details">
          <p className="bi-article-main-date">{dataArticle.Date}</p>
          <p className="bi-article-main-author">By : Vithujan Sooriyaruban</p>
        </div>
        {articleBlock.map((element) =>
          element.__component === "articles.text" ? (
            <p
              key={`${element.id}_paragraph`}
              className="bi-article-main-text-p"
            >
              {element.Text}
            </p>
          ) : element.__component === "articles.subtitles" ? (
            <h2
              key={`${element.id}_subtitle`}
              className="bi-article-main-subtitle"
            >
              {element.SubTitle}
            </h2>
          ) : (
            <img
              key={`${element.id}_image`}
              className="bi-article-main-img"
              src={img}
              alt="programming"
            />
          )
        )}
      </section>
      <PopularArticles />
    </section>
  );
}

export default ArticlePage;
