import { css, html, LitElement } from "lit";


class BottomContent extends LitElement {

  render() {
    return html`
      <div class="social-links">
          <img src="./fb.png">
          <img src="./tw.png">
          <img src="./ig.png">
      </div>
    `
  }

  static styles = css`
    .social-links img{
      height: 13px;
      margin: 20px;
      cursor: pointer;
    }
    .social-links {
      text-align: center;
    }
  `;
}

customElements.define('bottom-content', BottomContent)