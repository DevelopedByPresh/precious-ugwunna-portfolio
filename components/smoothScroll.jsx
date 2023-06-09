"use client"
import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const { href } = e.currentTarget;
      const targetElement = document.querySelector(href);

      if (targetElement) {
        scroll.scrollTo(targetElement.offsetTop, {
          duration: 500, // Adjust the duration to your preference
          smooth: true, // Enable smooth scrolling
        });
      }
    };

    const smoothScrollLinks = document.querySelectorAll('a[data-smooth-scroll]');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      smoothScrollLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
