import React from 'react'
import './header.css';

export const Header = () => {
  return (
    <div className='gpt4__header section_padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Build with GPT-4</h1>
        <div className='gpt4__header_content_input'>
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
        </div>
      </div>
      
    </div>
  )
}

export default Header
