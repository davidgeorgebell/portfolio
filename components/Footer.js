import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div>
          <img className='footer-logo' src='/logo-1.svg' alt='logo' />
        </div>
        <div className='footer-links'>
          <a className='styled-link' href='https://github.com/davidgeorgebell'>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
