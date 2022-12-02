import  { Link } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/">Home</Link>
  <Link to="about">About</Link>
  <div className="dropdown">
    <button className="dropbtn">Users
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <Link to="users">Users</Link>
      <Link to="users/new">New User</Link>
      <Link to="profile">Profile</Link>
    </div>
  </div>
</nav>
    )

}

export default Nav