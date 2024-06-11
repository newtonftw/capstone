import React from 'react';
import {Link} from 'react-router-dom';
import BannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
               <h2>Little Lemon</h2>
               <h3>Delhi</h3>
               <p>Little Lemon has grown from a modest restaurant to a community hub, celebrated for its warm atmosphere and exceptional food. Today, it stands as a testament to the brothers' dedication and passion for culinary excellence.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>

            <div className='banner-img'>
                <img src={BannerImg} alt='' />
            </div>
        </section>
    </header>
  )
}

export default Header