import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { NoteText} from 'iconsax-react';
import FavoriteButton from './FavoriteButton';
import { motion } from 'framer-motion';

export default function Article ({article}) {

    const pubDate = new Date(article.pubDate);
    const formattedDate = format(pubDate, 'dd.MM.yyyy');

    const backgroundImage = {
        backgroundImage: `url(${article.image})`
    }
    
    return (
        <div className='w-[300px] h-[500px] flex flex-col'>
            <div style={backgroundImage} className='w-full h-[200px] bg-cover bg-center rounded-2xl'>
            </div>
            <div className='flex flex-col flex-1 p-3'>
                <div className='flex flex-row justify-between gap-2 text-sm hover:cursor-pointer'>
                    <div>
                        {article.category}
                    </div>
                    <div className='flex flex-row gap-3 items-center'>
                        <FavoriteButton article={article}/>
                        <div className='flex flex-row gap-1 items-center'>
                            <NoteText size={16}/>
                            <p>Add notes</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 overflow-hidden mb-3 mt-3'>
                    <a href={article.link} className='font-bold text-xl my-2'>{article.title}</a>
                    <p className='line-clamp-4 mt-2'>{article.description}</p>
                </div>
                <div className='flex flex-row gap-1'>
                    <motion.a 
                        href={article.link}
                        className='block mb-2'
                        whileHover={{scale: 1.1, color: 'blue'}}
                    > Read more</motion.a>
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
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        pubDate: PropTypes.string.isRequired,
        author: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    isFavorite: PropTypes.bool,
};
