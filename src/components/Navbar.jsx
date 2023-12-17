import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import { AuthContext } from "../ProvidersForBrandShop/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import avatar from '../assets/avatar.jpeg'
import logan1 from '../assets/logan1.jpeg'
import { useState } from "react";
import { BsFillMoonFill, BsFillBrightnessHighFill } from "react-icons/bs";

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    console.log(user);
    const [theme, setTheme] = useState(true)
    const handleLogOut = () => {
        console.log('log Out');
        logOut()
            .then(() => {
                console.log('logged out');
                Swal.fire(
                    'Successfully Logged Out!',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleDark = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        setTheme(!theme)
    }
    const handleLight = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        setTheme(!theme)
    }
    const navLinks = <>
        <li><NavLink to={`/`}>Home</NavLink></li>
        <li><NavLink to={`/addproducts`}>Add Products</NavLink></li>
        <li><NavLink to={`/mycart`}>My Cart</NavLink></li>
        <li><NavLink to={`/register`}>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user ? <div className="flex gap-3">
                                <div>
                                    <h2 className="text-lg">Name</h2>
                                    {
                                        user &&
                                        <h2>{user.displayName ? user.displayName : `Name Not Found`}</h2>
                                    }
                                </div>
                                <div className="avatar w-12">
                                    <img className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={user.photoURL ? user.photoURL : avatar} alt="" />
                                </div>
                            </div> : ''
                        }
                        {
                            user ? <button onClick={handleLogOut} className="btn">Log Out</button> : <button className="btn"><Link to='/login'>Log In</Link></button>
                        }

                        {navLinks}
                    </ul>
                </div>

                <img className="w-12 rounded-full" src={logan1} alt="" />

                <a className="btn btn-ghost normal-case text-xl">BrandShop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2 ">

                {
                    user ? <div className="hidden lg:avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL ? user.photoURL : avatar} alt="" />
                        </div>
                    </div> : ''
                }
                {
                    user &&
                    <h2 className="hidden lg:block">{user.displayName ? user.displayName : `Name Not Found`}</h2>
                }
                <div className="hidden lg:block">
                    {
                        user ? <button onClick={handleLogOut} className="btn">Log Out</button> : <button className="btn"><Link to='/login'>Log In</Link></button>
                    }
                </div>
                {
                    theme ? <button className="btn" onClick={handleDark}><BsFillMoonFill></BsFillMoonFill></button> : <button className="btnb" onClick={handleLight}><BsFillBrightnessHighFill></BsFillBrightnessHighFill></button>
                }

            </div>
        </div>
    );
};

export default Navbar;