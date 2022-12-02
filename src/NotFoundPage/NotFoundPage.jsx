import "./NotFoundPage.css"
import { Link } from "react-router-dom"
const NotFoundPage = () => {

    return (
        <div>
            <h2>This is NotFoundPage page</h2>
            <Link to="/">Home</Link>
        </div>
    )

}

export default NotFoundPage