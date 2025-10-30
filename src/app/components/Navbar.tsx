import React from 'react';
import logo from '../assets/logo.png';
import PillNav from './Header';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center mx-auto fixed md:top-5 top-0 right-0 left-0 z-50">
      <PillNav
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '#about' },
          { label: 'Testimonials', href: '#testimonials' },
          { label: 'Contact', href: '#contact' },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="rgba(255,255,255,0.1)"
        pillColor="rgba(255,255,255,0.2)"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
        borderColor="rgba(255,255,255,0.2)"
        onMobileMenuClick={undefined}
      />
    </div>
  );
};

export default Navbar;
