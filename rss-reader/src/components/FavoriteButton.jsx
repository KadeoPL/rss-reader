
import { Heart } from "iconsax-react";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlices";
import { toggleFavorite } from "../redux/slices/articlesSlices";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

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
        <div onClick={handleClick}
        className='flex flex-row gap-1 items-center cursor-pointer'>
            <p>{article.isFavorite ? <Heart size={16} variant="Bold" color="red"/> : <Heart size={16}/>}</p>
        </div>
    )
}

FavoriteButton.propTypes = {
    article: PropTypes.object.isRequired,
}