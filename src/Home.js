import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=''
            />

            <div className='home__row'>
                <Product 
                id='1'
                title='The Product Discription goes here'
                price={99.59}
                image='https://m.media-amazon.com/images/I/71QSJJG-60L._AC_SY200_.jpg'
                rating={2}/>

                <Product 
                id='2'
                title='The Product Discription goes here'
                price={39.45}
                image='https://m.media-amazon.com/images/I/61XR0cKpWEL._AC_UL320_.jpg'
                rating={3}/>

                <Product 
                id='3'
                title='The Product Discription goes here'
                price={90.51}
                image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
                rating={4}/>
                   
            </div>

            <div className='home__row'>
                <Product 
                id='4'
                title='The Product Discription goes here'
                price={99.59}
                image='https://m.media-amazon.com/images/I/91uOGK5bQ5L._AC_UL320_.jpg'
                rating={5}/>

                <Product 
                id='5'
                title='The Product Discription goes here'
                price={39.45}
                image='https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_SY200_.jpg'
                rating={3}/>

                <Product 
                id='6'
                title='The Product Discription goes here'
                price={99.59}
                image='https://m.media-amazon.com/images/I/61q1Cq1IYCL._AC_SY200_.jpg'
                rating={5}/>

                <Product 
                id='7'
                title='The Product Discription goes here'
                price={39.45}
                image='https://m.media-amazon.com/images/I/717LGeSXa+L._AC_SY200_.jpg'
                rating={1}/>
            </div>

            <div className='home__row'>
                <Product 
                id='8'
                title='The Product Discription goes here'
                price={39.45}
                image='https://m.media-amazon.com/images/I/81A8CTc6icL._AC_SY200_.jpg'
                rating={5}/>

                <Product 
                id='9'
                title='The Product Discription goes here'
                price={39.45}
                image='https://m.media-amazon.com/images/I/81EN5QOijFL._AC_SY200_.jpg'
                rating={3}/>
            </div>
        </div>
    </div>
  )
}

export default Home;