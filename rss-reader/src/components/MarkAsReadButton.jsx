import { markAsRead, unMarkAsRead } from "../redux/slices/readSlices";
import { toggleRead } from "../redux/slices/articlesSlices";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

export default function MarkAsReadButton({article}) {
    const dispatch = useDispatch();

    const handleChange = () => {
        const updatedArticle = { ...article, isRead: !article.isRead };
        
        if (article.isRead) {
            dispatch(toggleRead(article.link));
            dispatch(unMarkAsRead(updatedArticle))
        } else {
            dispatch(toggleRead(article.link));
            dispatch(markAsRead(updatedArticle))
        }
    }

    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <div>{article.isRead ? <input className='cursor-pointer' type="checkbox" checked onChange={handleChange} /> : <input className='cursor-pointer' type="checkbox" onChange={handleChange} />}</div>
            </motion.div>
        </div>
    )
}

MarkAsReadButton.propTypes = {
    article: PropTypes.object.isRequired,
}