export default function sortArticles(articles, sortBy) {
  switch (sortBy) {
    case "date":
      return articles
        .slice()
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    case "title":
      return articles.slice().sort((a, b) => a.title.localeCompare(b.title));
    case "author":
      return articles.slice().sort((a, b) => a.author.localeCompare(b.author));
    default:
      return articles;
  }
}
