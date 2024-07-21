export default function sortByCategory(articles, selectedCategory, hideRead) {
  return articles
    .filter((article) => !hideRead || !article.isRead)
    .filter(
      (article) =>
        selectedCategory === "all" || article.category === selectedCategory
    );
}
