import "./Header.css"
// import useTheme from "../../hooks/useTheme";
// import useTheme from "../../hooks/useTheme";
import { NavLink } from "react-router-dom";
import home from "../../assets/images/home.png"
import explore from "../../assets/images/explore.png"
import not from "../../assets/images/not.png"
import massages from "../../assets/images/messages.png"
import bookmarks from "../../assets/images/bookmarks.png"
import lists from "../../assets/images/lists.png"
import profile from "../../assets/images/profile fill.png"
import more from "../../assets/images/more.png"

const Header = () => {
    // const [theme, setTheme] = useTheme;


    return(
        <>
        <header className="light">
            <h2>Header</h2>
            <ul className="header-list">
                <li>
                    <img src={home} alt="" />
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <img src={explore} alt="" />
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <img src={not} alt="" />
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <img src={massages} alt="" />
                    <NavLink to="/massages">Massages</NavLink>
                </li>
                <li>
                    <img src={bookmarks} alt="" />
                    <NavLink to="/bookmarks">Bookmarks</NavLink>
                </li>
                <li>
                    <img src={lists} alt="" />
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <img src={profile} alt="" />
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <img src={more} alt="" />
                    <NavLink to="more">More</NavLink>
                </li>
            </ul>
            {/* <select className="header-select" defaultValue = {theme} onChange = {(e)=>{setTheme(e.target.value)}}> */}
            <select className="header-select" >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </header>
        </>
    );
}
export default Header;