
import { Heart } from "iconsax-react";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlices";
import { toggleFavorite } from "../redux/slices/articlesSlices";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

export default function FavoriteButton ({article}){
    const dispatch = useDispatch();

    const handleClick = () => {
        const updatedArticle = { ...article, isFavorite: !article.isFavorite };
        
        if (article.isFavorite) {
            dispatch(toggleFavorite(article.id));
            dispatch(removeFavorite(updatedArticle))
        } else {
            dispatch(toggleFavorite(article.id));
            dispatch(addFavorite(updatedArticle))
        }
    }

    return (
        <div onClick={handleClick} className='flex flex-row gap-1 items-center cursor-pointer'>
            <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <p className="">{article.isFavorite ? <Heart size={16} variant="Bold" color="red"/> : <Heart size={16}/>}</p>
            </motion.div>
        </div>
    )
}

FavoriteButton.propTypes = {
    article: PropTypes.object.isRequired,
}