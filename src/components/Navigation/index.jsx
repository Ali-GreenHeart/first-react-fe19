import { NavLink } from "react-router-dom"

function NavigationLink({ to, title, color }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'test' : 'test1'}
            style={({ isActive }) => ({ color: isActive ? (color || 'red') : 'initial' })}
        >
            {title}
        </NavLink>
    )
}

const Navigation = () => {
    return (
        <>
            <NavigationLink to="/" title="Home" color="blue" />
            <NavigationLink to="/about" title="About" />
            <NavigationLink to="/users-with-reducer" title="Users WR" />
            <NavigationLink to="/contacts" title="Contacts" />
            <NavLink
                to={'/test'}
                className={({ isActive }) => isActive ? 'test' : 'test1'}
                style={({ isActive }) => ({ color: isActive ? (color || 'red') : 'initial' })}
            >
                test
            </NavLink>
        </>
    )
}
export default Navigation
