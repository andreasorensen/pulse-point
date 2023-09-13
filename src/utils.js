export const filterArticles = (articles) => {
  return articles.filter(article => {
    return article.author !== null &&
           article.content !== "[Removed]" &&
           article.description !== "[Removed]" &&
           article.title !== "[Removed]" &&
           article.url !== "https://removed.com" &&
           article.source.name !== '[Removed]' &&
           article.publishedAt !== "1970-01-01T00:00:00Z" &&
           article.urlToImage !== null;
  });
}
