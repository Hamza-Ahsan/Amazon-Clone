import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };


    return (
        <nav className='header'>

            {/* logo  */}
            <Link to='/'>
                <img className='header__logo' src='https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png' />
            </Link>

            {/* search box */}
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* 3 links */}
            <div className='header__nav'>
                {/* 1st link */}
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={login} className='header__option'>
                        <span className='header__optionlineOne'>Hello {user?.email}</span>
                        <span className='header__optionlineTwo'>{user ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link  */}
                <Link className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionlineOne'>Your</span>
                        <span className='header__optionlineTwo'>Prime</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionlineOne'>Returns</span>
                        <span className='header__optionlineTwo'> & Orders</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className='header__link'>
                    <div className='header__basket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionlineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

            {/* basket */}

        </nav>

    )
}

export default Header
