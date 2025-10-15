import {NavLink} from "react-router-dom";
import "./Navigation.css";


function Navigation() {

    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
                    Home
                </NavLink></li>
                <li><NavLink to="/index" className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
                    Alle posts
                </NavLink></li>
                <li><NavLink to="/new-post" className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
                    Nieuw Post
                </NavLink></li>
            </ul>
        </nav>
    )
}


export default Navigation;