
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
        <div onClick={handleClick} className='cursor-pointer'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <div>{article.isFavorite ?
                <div className="flex gap-1 items-center">
                    <Heart size={16} variant="Bold" color="red"/>
                    <p>Remove</p>
                </div> 
                : 
                <div className="flex gap-1 items-center">
                    <Heart size={16}/>
                    <p>Add favorite</p>
                </div>   
            }</div>
            </motion.div>
        </div>
    )
}

FavoriteButton.propTypes = {
    article: PropTypes.object.isRequired,
}