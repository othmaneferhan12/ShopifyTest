/*  Barcoop Bevy – GSAP ScrollTrigger animations
    Matches the Webflow interactions on barcoopbevy.com  */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* ── Helper: default scroll-trigger config ── */
  function st(trigger, start) {
    return { trigger: trigger, start: start || 'top 85%', toggleActions: 'play none none none' };
  }

  /* ── Product Showcase: heading + cards fade-up with stagger ── */
  var showcaseHeading = document.querySelector('.barcoop-showcase__heading');
  if (showcaseHeading) {
    gsap.from('.barcoop-showcase__header', {
      y: 40, opacity: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: st('.barcoop-showcase__header')
    });
  }

  var showcaseCards = document.querySelectorAll('.barcoop-showcase__card');
  if (showcaseCards.length) {
    gsap.from(showcaseCards, {
      y: 60, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: st('.barcoop-showcase__grid')
    });
  }

  /* ── Recipe Carousel: heading + slider fade-up ── */
  var recipesSection = document.querySelector('.barcoop-recipes');
  if (recipesSection) {
    gsap.from('.barcoop-recipes__header', {
      y: 30, opacity: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: st('.barcoop-recipes__header')
    });
    gsap.from('.barcoop-recipes__swiper', {
      y: 50, opacity: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: st('.barcoop-recipes__swiper')
    });
  }

  /* ── Newsletter: fade-up ── */
  var newsletter = document.querySelector('.barcoop-newsletter');
  if (newsletter) {
    gsap.from('.barcoop-newsletter__inner', {
      y: 40, opacity: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: st('.barcoop-newsletter__inner')
    });
  }

  /* ── About page: alternating content blocks slide in from sides ── */
  var aboutSections = document.querySelectorAll('.barcoop-about__section');
  aboutSections.forEach(function (section, i) {
    var img = section.querySelector('.barcoop-about__image');
    var text = section.querySelector('.barcoop-about__content');
    var fromLeft = i % 2 === 0;

    if (img) {
      gsap.from(img, {
        x: fromLeft ? -60 : 60, opacity: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: st(section)
      });
    }
    if (text) {
      gsap.from(text, {
        x: fromLeft ? 60 : -60, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power2.out',
        scrollTrigger: st(section)
      });
    }
  });

  /* ── About page: awards grid stagger ── */
  var awards = document.querySelectorAll('.barcoop-about__award');
  if (awards.length) {
    gsap.from(awards, {
      scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)',
      scrollTrigger: st('.barcoop-about__awards')
    });
  }

  /* ── Press page: cards stagger ── */
  var pressCards = document.querySelectorAll('.barcoop-press__card');
  if (pressCards.length) {
    gsap.from(pressCards, {
      y: 50, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: st('.barcoop-press__grid')
    });
  }

  /* ── Recipes page: filter buttons + grid cards ── */
  var recipeFilters = document.querySelector('.barcoop-recipes-page__filters');
  if (recipeFilters) {
    gsap.from('.barcoop-recipes-page__filters', {
      y: 20, opacity: 0, duration: 0.5, ease: 'power2.out',
      scrollTrigger: st('.barcoop-recipes-page__filters')
    });
    gsap.from('.barcoop-recipes-page__card', {
      y: 40, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: st('.barcoop-recipes-page__grid')
    });
  }

  /* ── Contact page: form fade-up ── */
  var contactForm = document.querySelector('.barcoop-contact__form');
  if (contactForm) {
    gsap.from('.barcoop-contact__form', {
      y: 40, opacity: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: st('.barcoop-contact__form')
    });
  }

  /* ── Generic page headings (about, press, recipes, contact) ── */
  var pageHeadings = document.querySelectorAll(
    '.barcoop-about__heading, .barcoop-press__heading, .barcoop-recipes-page__heading, .barcoop-contact__heading'
  );
  pageHeadings.forEach(function (el) {
    gsap.from(el, {
      y: 30, opacity: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: st(el, 'top 90%')
    });
  });
});
