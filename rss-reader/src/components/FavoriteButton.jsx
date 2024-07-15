
import { Heart } from "iconsax-react";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlices";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

export default function FavoriteButton ({article, isFavorite}){
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(article))
        } else {
            dispatch(addFavorite(article))
        }
    }

    return (
        <div onClick={handleClick}
        className='flex flex-row gap-1 items-center cursor-pointer'>
            <Heart size={16}/>
            <p>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
        </div>
    )
}

FavoriteButton.propTypes = {
    article: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool,
}