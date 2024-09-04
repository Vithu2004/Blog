export function changeNavbarStyle(dummyState, setDummyState) {
  let page = window.location.pathname;
  if (page !== dummyState) {
    setDummyState(page);
  }
  if (page === "/About-Me" || page === "/Best-Programming-Language") {
    return "bi-navbar-article-about";
  } else {
    return "bi-navbar";
  }
}
