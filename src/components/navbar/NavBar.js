import React,{useContext} from 'react';
import { Link } from '@reach/router';
import { MdHome,MdFavoriteBorder,MdPeopleOutline } from 'react-icons/md';
import { AppContext } from '../../AppContext';

const ICON_SIZE = "32px";

const NavBar = () => {
    const { isAuth  } = useContext(AppContext);
    const pathUser = isAuth ? "/myprofile" : "/";
    return(
        <nav className="navBar">
            {isAuth && <Link to="/home" className="LinkNavBar"> <MdHome size={ICON_SIZE}/> </Link>}
            {isAuth && <Link to="/favs" className="LinkNavBar"> <MdFavoriteBorder size={ICON_SIZE}/> </Link>}
            <Link to={pathUser} className="LinkNavBar"> <MdPeopleOutline size={ICON_SIZE}/> </Link>
        </nav>
    )
};

export default NavBar;
