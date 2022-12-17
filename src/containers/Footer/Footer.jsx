import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='footer--nav'>
        <h3>Liens de Page</h3>
        <nav>
          <div className="footer--nav--link">
            <a href="#mission">Mission</a>
            <em>Mission</em>
          </div>
          <div className="footer--nav--link">
            <a href="#specs">Spécialités</a>
            <em>Specialities</em>
          </div>
          <div className="footer--nav--link">
            <a href="#products">Produits</a>
            <em>Products</em>
          </div>
        </nav>
      </section>
      <section className='footer--logo'>
        <img src="favicon.png" alt="" />
      </section>
      <section className='footer--infos'>
        <h3>Infos</h3>
        <ul>
          <li>téléphone</li>
          <li>whatsapp</li>
          <li>email</li>
          <li>localisation</li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer