import "./Navigation.css";
import NavItem from "../../components/nav-item/NavItem.jsx";
import logo from "../../assets/logo-medium.png";


function Navigation() {

    return (
        <nav>
            <ul>
                <li><img src={logo} alt="logo"/></li>
                <NavItem text="Home" linkTo="/" />
                <NavItem text="Alle posts" linkTo="/posts" />
                <NavItem text="Nieuwe post" linkTo="/new-post" />
            </ul>
        </nav>
    )
}


export default Navigation;