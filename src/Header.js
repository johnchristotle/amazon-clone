import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


export default function Header() {
   const [{ basket, user }] = useStateValue(); 

   const handleAuthentication = () => {
    if (user) {
        auth.signOut();
    }
   }

  return (
    <div className='header'>
        <a href='/'>
        <img 
        className='header__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='amazon logo'
        />
        </a>

        <div className='header__serach'>
            <input 
            className='header__searchInput'
            type='text'
            />
            <SearchIcon 
            className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'>
                
                <span className='header__optionLineOne'>
                    Hello {!user ? 'Guest' : user.email}
                </span>
                
                <span className='header__optionLineTwo'>
                    {user ? 'Sign Out' : 'Sign In'}
                </span>
            </div>
            </Link>

           <Link to='/orders'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineTwo'>
                    and Orders
                </span>
            </div> 
            </Link>      

            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div> 

            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingCartIcon />
                <span className='header__optionLineTwo header__basketCount'>
                    {basket?.length}
                </span>
            </div>
            </Link>

        </div>
    </div>
  )
}
