export default function Article ({article}) {
    return (
        <div>
                <h1 >{article.title}</h1>
                <div>
                {article.category.map((category, index) => {
                    return <p key={index}>{category}</p>
                })}
                </div>
                <p>{article.description}</p>
                <a href={article.link}>Read more</a>
                <p>{article.pubDate}</p>
        </div>
    )
}