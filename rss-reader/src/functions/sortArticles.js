export default function sortArticles(articles, sortBy, sortOrder = "ascending") {
  return articles.slice().sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case "date":
        comparison = new Date(a.pubDate) - new Date(b.pubDate);
        break;
      case "title":
        comparison = a.title.localeCompare(b.title);
        break;
      case "author":
        comparison = a.author.localeCompare(b.author);
        break;
      default:
        return 0;
    }

    return sortOrder === "descending" ? -comparison : comparison;
  });
}
