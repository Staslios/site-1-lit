import { css, html, LitElement } from "lit";


class RightContent extends LitElement {

  render() {
    return html`
        <div class="col-2">
            <img src="./controller.png" class="controller"/>
            <div class="color-box"></div>
            <div class="add-btn">
                <img src="./add.png"/>
                <p><small>Add to cart</small></p>
            </div>
        </div>
    `
  }

  static styles = css`
    .col-2 {
      position: relative;
      display: flex;
      align-items: center;
      flex-basis: 60%;
    }
    .col-2 .controller {
      width: 90%;
    }
    
    .color-box {
      position: absolute;
      right: 0;
      top: 0;
      background: linear-gradient(#ff469f, #ff6062);
      border-radius: 20px 0 0 20px;
      height: 100%;
      width: 80%;
      z-index: -1;
      transform: translateX(150px);
    }
    
    .add-btn img {
      width: 35px;
      margin-bottom: 5px;
    }
    .add-btn {
      text-align: center;
      cursor: pointer;
      color: white;
    }

    @media only screen and (max-width: 700px) {
      .col-2 {
        flex-basis: 100%;
        margin-bottom: 50px;
      }
      .col-2 .controller {
        width: 80%;
      }
    }
  `;
}

customElements.define('right-content', RightContent)