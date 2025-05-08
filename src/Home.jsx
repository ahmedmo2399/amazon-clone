import React from 'react'
import './Home.css'
import Product from './Product'

function Home  ()  {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' alt='' />

            <div className='home__row'>
               <Product id={324} title='The lean startUp' price={20.99} image='https://m.media-amazon.com/images/I/615P8pHurYL._AC_SL1500_.jpg' rating={5}/>
               <Product id={89} title='Apple iPhone 16 Pro Max (256 GB) - Black Titanium' price={1099.99} image='https://m.media-amazon.com/images/I/61veAtnXzWL._AC_SL1500_.jpg' rating={4}/>
            </div>
            <div className='home__row'>
                <Product id={123} title='Samsung Galaxy S23 Ultra (512 GB) - Phantom Black' price={1199.99} image='https://m.media-amazon.com/images/I/61NUR7kNpZL._AC_SL1500_.jpg' rating={4}/>
                <Product id={456} title='Sony WH-1000XM5 Wireless Noise Cancelling Headphones' price={348.99} image='https://m.media-amazon.com/images/I/71jmT3tj+OL._AC_SL1500_.jpg' rating={5}/>
                <Product id={789} title='Apple MacBook Pro 16-inch (2023) - M2 Pro' price={2499.99} image='https://m.media-amazon.com/images/I/61-oTP1X4rL._AC_SL1500_.jpg' rating={5}/>
            </div>
            <div className='home__row'>
                <Product id={101} title='Samsung 55-Inch 4K Smart TV' price={799.99} image='https://m.media-amazon.com/images/I/61tOjWVRaKL._AC_SL1500_.jpg' rating={4}/>
            </div>
            
             
        </div>
    </div>
  )
}

export default Home