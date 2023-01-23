import { css, html, LitElement } from "lit";
import "./LeftContent"
import "./RightContent"
import "./BottomContent"


class CentralContent extends LitElement {

  render() {
    return html`
        <div class="row">
            <left-content></left-content>
            <right-content></right-content>
        </div>
        <bottom-content></bottom-content>
    `
  }

  static styles = css`
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 100px 0;
    }

    @media only screen and (max-width: 700px) {
      .row {
        flex-direction: column-reverse;
        margin: 50px 0;
      }
    }
  `;
}

customElements.define('main-content', CentralContent)