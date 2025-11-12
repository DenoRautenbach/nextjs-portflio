'use client';
import { useState } from 'react';
import StaggeredMenu from './StaggeredMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Places', ariaLabel: 'Explore our destinations', link: '/destinations' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
  ];

  return (
    <header>
      {/* Header can have normal content like logo or top bar */}
      <div className="relative z-50  [&_span]:font-bold [&_span]:bg-black [&_span]:text-white-500 [&_span]:px-2 [&_span]:rounded-xl ">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#0000000"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#0D1B2A', '#D4AF37']}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#B02E0C"
          onMenuOpen={() => setMenuOpen(true)}
          onMenuClose={() => setMenuOpen(false)}
        />
      </div>

      {/* Overlay background, only visible when menu is open */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)', // semi-transparent overlay
            zIndex: 40, // below the menu
            pointerEvents: 'none', // allows clicks to pass through menu
          }}
        />
      )}
    </header>
  );
};

export default Header;
