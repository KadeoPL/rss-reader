import Article from "../components/Article";
import Navigation from "../components/Navigation";
import {useSelector } from "react-redux";

export default function Favorites(){
    const favoriteArticles = useSelector((state) => state.favorites.items);
    console.log(favoriteArticles);
    return (
        <>
            <Navigation />
            <h1>Favorites</h1>
            {favoriteArticles.map((article, index) => {
                return (
                    <Article article={article} key={index} />
                )
            })}
        </>
    )
}