import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
//import { useStateValue } from './StateProvider';


export default function Header() {
//   const [{ basket }] = useStateValue(); 

  return (
    <div className='header'>
        <Link to='/'>
        <img 
        className='header__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='amazon logo'
        />
        </Link>

        <div className='header__serach'>
            <input 
            className='header__searchInput'
            type='text'
            />
            <SearchIcon 
            className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
            
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Hello Guest!
                </span>
                <span className='header__optionLineTwo'>
                    Sign In!
                </span>
            </div>
            

           
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineTwo'>
                    0 Orders
                </span>
            </div> 
                   

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
                    0
                </span>
            </div>
            </Link>

        </div>
    </div>
  )
}
