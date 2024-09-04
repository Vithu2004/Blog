import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
import bbg from "../../Assets/hero-banner-buble-background.png";
import ArticleComponent from "../../Component/ArticleComponent";

function Home() {
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
      `${process.env.REACT_APP_BACKEND}api/articles?populate=ArticleImage`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data.slice(0, 7)))
      .catch((error) => console.log("error", error));
  }, []);

  console.log(dataArticle);

  dataArticle.map(({ id, attributes }) =>
    attributes.ArticleImage.data === null
      ? articlesImages.push(bbg)
      : articlesImages.push(attributes.ArticleImage.data.attributes.url)
  );

  return (
    <section className="bi-home">
      <section className="bi-hero-banner">
        <div className="bi-banner-flex">
          <p className="bi-banner-presentation">
            Vithujan <br />
            SOORIYARUBAN <br />
            Web developer
          </p>
          <h1 className="bi-banner-slogan">
            Just C<scan className="bi-banner-slogan-white">ode</scan>
          </h1>
        </div>
        <Link to="/Blog_Post/6" className="bi-banner-read-article">
          READ LATEST ARTICLE
        </Link>
      </section>
      <section className="bi-section-article latest">
        <h2 className="bi-section-article-title latest">Latest Article</h2>
        <section className="bi-article-section latest">
          {dataArticle.map(({ id, attributes }) => (
            <Link to={`/Blog_Post/${id}`}>
              <ArticleComponent
                key={id}
                imgProp={`${process.env.REACT_APP_BACKEND}${
                  articlesImages[id - 1]
                }`}
                titleProp={attributes.MainTitle}
                descProp={attributes.Description}
                dateProp={attributes.Date}
              />
            </Link>
          ))}
        </section>
        <Link to="./Latest-Article" className="bi-l-article-sm">
          See more
        </Link>
      </section>
      <section className="bi-section-article editor">
        <h2 className="bi-section-article-title editor">Editor's pick</h2>
        <section className="bi-article-section editor">
          <ArticleComponent
            imgProp={bbg}
            titleProp="VV"
            descProp="fcfdgfdd"
            dateProp="12/06/2001"
          />
          <ArticleComponent
            imgProp={bbg}
            titleProp="VV"
            descProp="fcfdgfdd"
            dateProp="12/06/2001"
          />
          <ArticleComponent
            imgProp={bbg}
            titleProp="VV"
            descProp="fcfdgfdd"
            dateProp="12/06/2001"
          />
        </section>
      </section>
    </section>
  );
}

export default Home;
