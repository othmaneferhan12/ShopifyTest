/**
 * Shop the Look — web component
 * Handles optional prev/next navigation for the look cards grid.
 */
class ShopTheLook extends HTMLElement {
  connectedCallback() {
    this.cards = this.querySelectorAll('.shop-the-look__card');
  }
}

if (!customElements.get('shop-the-look-component')) {
  customElements.define('shop-the-look-component', ShopTheLook);
}
