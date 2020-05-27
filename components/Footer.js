import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <Link href='/'>
          <a>
            <div>
              <img className='footer-logo' src='/logo-1.svg' alt='logo' />
            </div>
          </a>
        </Link>
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
