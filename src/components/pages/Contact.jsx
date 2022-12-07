import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <a
        href='mailto:lujansolo@proton.me'
        className='email--link'>LujanSolo@proton.me</a>
      <p className='phone--number'>Phone: (773) 600-1785</p>
      <a
        href='https://www.linkedin.com/in/jamie-lujan-73a143221/'
        className='linkedin--link'>
        My LinkedIn
      </a>
      <a
        href='https://github.com/LujanSolo/'
        className='github--link'>
        My GitHub
      </a>
  
    </div>
  );
}