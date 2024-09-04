import "../Style/ArticleComponent.css";

function ArticleComponent({ imgProp, altProp, titleProp, descProp, dateProp }) {
  return (
    <div className="bi-article">
      <img className="bi-article-img" src={imgProp} alt={altProp} />
      <h3 className="bi-article-title"> {titleProp}</h3>
      <p className="bi-article-desc">{descProp}</p>
      <p className="bi-article-date">{dateProp}</p>
    </div>
  );
}

export default ArticleComponent;
