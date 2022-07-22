import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


export default function Header() {
   const [{ basket }] = useStateValue(); 

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
            
            <div className='header__option'>
                
                <span className='header__optionLineOne'>
                    Hello Guest!
                </span>
                <a className='a-link' href='/login'>
                <span className='header__optionLineTwo'>
                    Sign In!
                </span>
                </a>
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

            <a href='/checkout'>
            <div className='header__optionBasket'>
                <ShoppingCartIcon />
                <span className='header__optionLineTwo header__basketCount'>
                    {basket?.length}
                </span>
            </div>
            </a>

        </div>
    </div>
  )
}
