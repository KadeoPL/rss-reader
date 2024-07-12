import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ArrowRight } from 'iconsax-react'

export default function Article ({article}) {
    
    const pubDate = new Date(article.pubDate);
    const formattedDate = format(pubDate, 'dd.MM.yyyy');

    const backgroundImage = {
        backgroundImage: `url(${article.image})`
    }
    
    return (
        <div className='w-[300px] min-h-[300px] flex flex-col'>
                <div style={backgroundImage} className='w-full h-[200px] bg-cover bg-center rounded-2xl'>
                </div>
                <div>
                <div className='flex flex-row gap-2 mt-3 text-sm hover:cursor-pointer'>
                    {/* {article.category.map((category, index) => {
                        return <p key={index}>{category}</p>
                    })} */}
                    {article.category}
                    </div>
                    <h1 className='font-bold text-xl leading-7 my-2'>{article.title}</h1>
                    <p className='mb-2'>{article.description}</p>
                    <div className='flex flex-row gap-1'>
                        <a href={article.link} className='block mb-2'>Read more</a>
                        <ArrowRight />
                    </div>
                    <div className='flex flex-row justify-between gap-3 text-sm'>
                        <p>{article.author}</p>  
                        <p>{formattedDate}</p>  
                    </div>
                    
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