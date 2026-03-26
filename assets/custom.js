/* =============================================================
   Mason's Clone — Custom JavaScript
   Source: us.masons.it (extracted Phase 6.2)

   No external JS libraries needed (source uses 100% custom code).
   All animations are CSS-native / native JS (no GSAP, AOS, Swiper, etc.)

   Theme JS modules (loaded separately by theme):
   - critical.js, component.js, scrolling.js, section-renderer.js
   - morph.js, dialog.js, events.js, focus.js, performance.js
   - utilities.js, paginated-list.js, product-form.js
   - media-gallery.js, quick-add.js, recently-viewed-products.js
   - custom-variant-picker.js

   Third-party app scripts (loaded by their respective apps):
   - Klaviyo (email/SMS)
   - Trustpilot/Trusted Shops (reviews/trust badges)
   - Triple Whale (analytics pixel)
   - Pandectes (GDPR cookie consent)
   - WishlistKing (wishlist functionality)
   - PayPal messaging
   - Klarna messaging
   ============================================================= */

/* UTM parameter capture for cart attributes */
(function () {
  const cartAttributes = {};

  function getUTMFromUrl() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmParams.forEach(function(param) {
      const value = url.searchParams.get(param);
      if (value) {
        cartAttributes[param] = value;
      }
    });
  }

  function setCartAttributes() {
    if (Object.keys(cartAttributes).length === 0) return;
    fetch('/cart/update.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attributes: cartAttributes })
    });
  }

  getUTMFromUrl();
  setCartAttributes();
})();
