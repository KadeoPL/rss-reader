import { Link } from "react-router-dom"

export default function Navigation (){
    return (
        <div className="flex flex-row gap-5 justify-center p-5">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    )
}