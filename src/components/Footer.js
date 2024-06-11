import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
      <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>
                Little Lemon in Delhi, owned by three brothers, is a popular restaurant renowned for its vibrant ambiance and delicious cuisine. The brothers' commitment to quality and excellent service has made it a favorite among locals and visitors.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li> Address: <br/> Little Lemon
                                        123 Flavor Street
                                        Connaught Place
                                        New Delh.</li>
                    <li> Phone: <br/>+91 98765 43210</li>
                    <li> Email: <br/> little@lemon.com</li>                    
                </ul>
            </div>

            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href="/">Twitter</a></li>                    
                </ul>
            </div>

        </section>
      </footer>
  )
}

export default Footer