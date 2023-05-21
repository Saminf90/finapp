import { Link } from "react-router-dom";

const Navbar =  ({user}) => {

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <div className="navbar"> 
            <span className="logo"> 
            <Link className="link" to="/">Finntech App</Link> 
            </span> 
               { user ? (
            <ul className="list">
               <li className="list-item">
                 <img src="C:\Users\samin\OneDrive\Desktop\finapp.jpg" alt="" className="avatar" />
                </li>
                <li className="list-item">Pouya Sojoudi</li>
                <li className="list-item" onClick={logout}>Logout</li>
            </ul>
            ) : ( 
                <Link className="link" to="login"> 
                Login 
                </Link>
            )}
        </div>
    );
};

export default Navbar;