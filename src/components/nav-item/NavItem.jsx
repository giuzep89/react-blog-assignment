import {NavLink} from "react-router-dom";
import "./NavItem.css";

export default function NavItem({text, linkTo}) {
    return (
        <li className="nav-item"><NavLink to={linkTo} className={({isActive}) => isActive === true ? "active-link" : "default-link"}>
            {text}
        </NavLink></li>
    )
}