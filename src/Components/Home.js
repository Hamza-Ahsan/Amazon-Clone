import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />

            {/* Product id, title, image, rating, price */}
            <div className='home__row'>
                <Product
                    id='123445'
                    title='The lean Book is very good for reading Purpose hsgdasjhdsa hjshdfjknhsjadf khkhfckhkshfsa'
                    rating={5}
                    price={11.5}
                    image='https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg'
                />
                <Product
                    id='123345'
                    title='The lean Book is very good for reading Purpose'
                    rating={5}
                    price={11.5}
                    image='https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg'
                />
            </div>

            <div className='home__row'>
                <Product
                    id='1233345'
                    title='The lean Book is very good for reading Purpose'
                    rating={5}
                    price={11.5}
                    image='https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg'
                />
                <Product
                    id='1232145'
                    title='The lean Book is very good for reading Purpose'
                    rating={3}
                    price={11.5}
                    image='https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg'
                />
                <Product
                    id='12345'
                    title='The lean Book is very good for reading Purpose'
                    rating={4}
                    price={11.5}
                    image='https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg'
                />
            </div>
            <div className='home__row'>
                <Product
                    id='12323245'
                    title='The lean Book is very good for reading Purpose hsgdasjhdsa hjshdfjknhsjadf khkhfckhkshfsa'
                    rating={2}
                    price={11.5}
                    image='https://m.media-amazon.com/images/I/41TdHR0IG2L.jpg'
                />
            </div>
        </div>
    )
}

export default Home
