'use client';

import { useEffect } from 'react';

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
    let observer: IntersectionObserver | undefined;

    if ('IntersectionObserver' in window && revealElements.length > 0) {
      document.documentElement.classList.add('has-scroll-motion');

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute('data-revealed', 'true');
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      observer = revealObserver;

      revealElements.forEach((element) => revealObserver.observe(element));
    }

    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollOffset = Math.min(window.scrollY, 520);
        parallaxElements.forEach((element) => {
          const speed = Number(element.dataset.parallax) || 0.06;
          element.style.setProperty('--parallax-offset', `${scrollOffset * speed}px`);
        });
      });
    };

    if (parallaxElements.length > 0) {
      updateParallax();
      window.addEventListener('scroll', updateParallax, { passive: true });
      window.addEventListener('resize', updateParallax);
    }

    return () => {
      observer?.disconnect();
      document.documentElement.classList.remove('has-scroll-motion');
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  return null;
}
