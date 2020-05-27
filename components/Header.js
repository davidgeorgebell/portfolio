import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <a>
          <div>
            <img className='footer-logo' src='/logo-1.svg' alt='logo' />
          </div>
        </a>
      </Link>
    </header>
  );
};
export default Header;
