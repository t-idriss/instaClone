import React, {useContext} from 'react'
import "./aside.css"
import { NavLink } from 'react-router-dom'
import {FaSearch, FaUser, FaRegCompass, FaRegHeart} from "react-icons/fa"
import { TiHome,  } from "react-icons/ti";
import { BiMoviePlay,  } from "react-icons/bi";
import { BsSend, BsPlusSquare } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { logout } from '../../services/ApiRequest';
import Auth from '../../context/Auth';
import UserContext from '../../context/UserContext';

const Aside = () => {
  const {  setIsAuthenticated } = useContext(Auth);
  const {  setIsUser } = useContext(UserContext);

  const deconnect = ()=>{
    logout();
    setIsAuthenticated(false);
    setIsUser({})
  }

  return (
    <div className='aside'>
        <h2>Instagram</h2>
        <NavLink to="/" className="links"><TiHome className='icon'/>Acceuil</NavLink>
        <NavLink to="/" className="links"><FaSearch className='icon'/>Recherche</NavLink>
        <NavLink to="/" className="links"><FaRegCompass className='icon'/>Découvrir</NavLink>
        <NavLink to="/" className="links"><BiMoviePlay className='icon'/>Reels</NavLink>
        <NavLink to="/" className="links"><BsSend className='icon'/>Messages</NavLink>
        <NavLink to="/" className="links"><FaRegHeart className='icon'/>Notification</NavLink>
        <NavLink to="/" className="links"><BsPlusSquare className='icon'/>Créer</NavLink>
        <NavLink to="/profile" className="links"><FaUser className='icon'/>Profil</NavLink>
        <button to="/" className="links btn_aside"><GiHamburgerMenu className='icon'/>Plus</button>
        <button onClick={deconnect} className="links btn_aside"><GiHamburgerMenu className='icon'/>Logout</button>
    </div>
  )
}

export default Aside