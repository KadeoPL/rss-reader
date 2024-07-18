import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { NoteText} from 'iconsax-react';
import FavoriteButton from './FavoriteButton';
import MarkAsReadButton from './MarkAsReadButton.jsx';
import { motion } from 'framer-motion';
import categoryColor from '../functions/categoryColor.js';
import { useEffect, useState } from 'react';

export default function Article ({article, onData}) {
    const [categoryBgColor, setCategoryBgColor] = useState('');
    const pubDate = new Date(article.pubDate);
    const formattedDate = format(pubDate, 'dd.MM.yyyy');

    const setCategory = () => {
        const category = article.category;
        onData(category);
      };
    
    const backgroundImage = {
        backgroundImage: `url(${article.image})`
    }

    useEffect(() => {
        setCategoryBgColor(categoryColor(article.category))
    }, [article.category])
    
    
    return (
        <div className='w-[300px] h-[500px] flex flex-col bg-white rounded-2xl shadow-md'>
            <div style={backgroundImage} className='w-full h-[200px] bg-cover bg-center rounded-2xl'>
            </div>
            <div className='flex flex-col flex-1 p-6'>
                <div className='flex flex-row justify-between items-center text-sm hover:cursor-pointer'>
                    <div onClick={setCategory} className={`${categoryBgColor} py-1 px-3 text-sm rounded-md text-white`}>
                        {article.category}
                    </div>
                    <div className='flex flex-row flex-wrap text-xs ml-2'>
                        <p>{article.author}, </p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                <div className='flex-1 overflow-hidden mb-3 mt-3'>
                    <a href={article.link} className='font-bold text-lg leading-3 my-2'>{article.title}</a>
                    <p className='line-clamp-3 text-sm mt-2'>{article.description}</p>
                </div>
                <div className='w-full'>
                    <motion.a 
                        href={article.link}
                        className='block mb-2 border-2 py-2 px-4 rounded-md text-sm text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white'
                        whileHover={{scale: 1.1}}
                    >Read more</motion.a>
                </div>
                <div>
                    <div className='flex flex-row justify-between text-sm items-center'>
                        <FavoriteButton article={article}/>
                        <MarkAsReadButton article={article} />
                        <div className='flex flex-row gap-1 items-center'>
                            <NoteText size={16}/>
                            <p>Add notes</p>
                        </div>
                    </div>
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
