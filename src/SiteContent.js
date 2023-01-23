import { css, html, LitElement } from "lit";
import "./NavbarContent.js"
import "./central/CentralContent.js"


class SiteContent extends LitElement {

  render() {
    return html`
      <div class="container">
          <navbar-content></navbar-content>
          <main-content></main-content>
      </div>
    `
  }

  static styles = css`
    .container {
      width: 100%;
      min-height: 100vh;
      padding: 0 8px;
      box-sizing: border-box;
      overflow: hidden;
    }
  `;
}

customElements.define('site-content', SiteContent)