import Article from "../components/Article";
import Navigation from "../components/Navigation";
import {useSelector } from "react-redux";

export default function Favorites(){
    const favoriteArticles = useSelector((state) => state.favorites.items);
    return (
        <div className="w-full mx-auto">
            <Navigation />
            <h1>Favorites</h1>
            <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
            {favoriteArticles.map((article, index) => {
                return (
                    <Article article={article} key={index} />
                )
            })}
            </div>
        </div>
    )
}