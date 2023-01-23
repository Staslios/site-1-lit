import { css, html, LitElement } from "lit";

class LeftContent extends LitElement {

  render() {
    return html`
        <div class="col-1">
            <h2>PS4<br>Dualshock 4</h2>
            <h3>Wirelessc controller</h3>
            <p>(Compatible/Generic)</p>
            <h4>$32.50</h4>
            <button type="button">
                Buy now
                <img src="./arrow.png"/>
            </button>
        </div>
    `
  }

  static styles = css`
    .col-1 {
      flex-basis: 40%;
      position: relative;
      margin-left: 50px;
    }
    .col-1 h2 {
      font-size: 54px;
    }
    .col-1 h3 {
      font-size: 30px;
      color: #707070;
      font-weight: 100;
      margin: 20px 0 10px;
    }
    .col-1 p {
      font-size: 16px;
      color: #b7b7b7;
      font-weight: 100;
    }
    .col-1 h4 {
      margin: 30px 0;
      font-size: 20px;
    }
    button {
      width: 140px;
      border: 0;
      padding: 12px 10px;
      outline: none;
      color: #fff;
      background: linear-gradient(to right, #fb5283, #ff3527);
      transition: width 0.4s;
    }
    button img {
      width: 30px;
      display: none;
    }
    button:hover img {
      display: block;
    }
    button:hover {
      width: 160px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .col-1::after {
      content: '';
      width: 10px;
      height: 57%;
      background: linear-gradient(#ff469f, #ff6062);
      position: absolute;
      left: -40px;
      top: 8px;
    }
  `;
}

customElements.define('left-content', LeftContent)