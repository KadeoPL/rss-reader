import PropTypes from 'prop-types';
import { format } from 'date-fns';

export default function Article ({article}) {
    
    const pubDate = new Date(article.pubDate);
    const formattedDate = format(pubDate, 'dd/MM/yyyy');

    const backgroundImage = {
        backgroundImage: `url(${article.image})`
    }
    
    return (
        <div className='w-[300px] min-h-[300px] flex flex-col'>
                <div style={backgroundImage} className='w-full h-[200px] bg-cover bg-center rounded-2xl'>
                </div>
                <div>
                    <h1 >{article.title}</h1>
                    <div>
                    {article.category.map((category, index) => {
                        return <p key={index}>{category}</p>
                    })}
                    </div>
                    <p>{article.description}</p>
                    <a href={article.link}>Read more</a>
                    <p>{formattedDate}</p>
                    <p>{article.author}</p>
                </div>
                
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        pubDate: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string
    }).isRequired,
};