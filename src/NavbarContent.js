import { LitElement, css, html } from 'lit'


export class NavbarContent extends LitElement {

  static properties = {
    navElements: {
      state: true,
      type: Array
    },
    show: {
      type: Boolean
    }
  };


  constructor() {
    super();
    this.navElements = [
      "Controller",
      "Cable",
      "SAT",
      "Console"
    ],
      this.show = false
  }

  toggleMenu() {
    this.show = !this.show
  }

  render() {

    const navItem = this.show
      ? html`
                <ul>
                    ${this.navElements.map((item) =>
                            html`
                                <li><a href="">${item}</a></li>`
                    )}
                </ul>
    ` :
      html``

    return html`
        <div class="navbar">
            <img src="./logo.png" class="logo">
            <nav>
                ${navItem}
            </nav>
            <img src="./menu.png" class="menu-icon" @click=${this.toggleMenu}>
        </div>
    `
  }

  static get styles() {
    return css`
      .navbar {
        width: 100%;
        display: flex;
        align-items: center;
      }
      .logo {
        width: 50px;
        cursor: pointer;
        margin: 30px 0;
      }
      .menu-icon {
        width: 25px;
        cursor: pointer;
        display: none;
      }
      nav {
        flex: 1;
        text-align: right;
      }
      nav ul li {
        list-style: none;
        display: inline-block;
        margin-right: 30px;
      }
      nav ul li a {
        text-decoration: none;
        color: #000;
        font-size: 14px;
      }
      nav ul li a:hover {
        color: #ff5ea2
      }

      @media only screen and (max-width: 700px) {
        nav ul {
          width: 100%;
          background: linear-gradient(#ff54a2, #ff577a);
          top: 75px;
          right: 0;
          z-index: 2;
        }
        nav ul li {
          display: block;
          margin: 10px 0;
        }
        nav ul li a {
          color: #fff;
        }
        .menu-icon {
          display: block;
        }
      }
    `
  }
}

window.customElements.define('navbar-content', NavbarContent)
