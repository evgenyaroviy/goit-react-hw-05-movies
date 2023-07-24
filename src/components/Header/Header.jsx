import { NavLink } from "react-router-dom";
import css from "./header.module.css";

export const Header = () => {
    return (
        <div className={css.header}>
            <NavLink style={({ isActive }) => { return { color: isActive ? 'orange': 'black'}}} className={css.link} to='/'>Home</NavLink>
            <NavLink style={({ isActive }) => { return { color: isActive ? 'orange': 'black'}}} className={css.link} to='/movies'>Movies</NavLink>
        </div>
    )
}