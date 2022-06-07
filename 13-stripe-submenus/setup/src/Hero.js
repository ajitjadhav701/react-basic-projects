import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const{closeSubmenu}=useGlobalContext();
  return <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed molestiae deserunt distinctio. Officiis quod obcaecati atque esse cupiditate voluptate.</p>
          <button className="btn">start now</button>
        </article>
        <article className='hero-images'>
            <img src={phoneImg} alt="phone image" className='phone-img' />
        </article>
      </div>
  </section>
}

export default Hero
