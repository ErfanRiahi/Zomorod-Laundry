class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
        <nav>
            <ul>
                <li><a href="index.html" class="links">Home</a></li>
                <li><a href="services.html" class="links">Services</a></li>
                <li><a href="order.html" class="links">Order</a></li>
                <li><a href="about.html" class="links">About</a></li>                                
                <li class="rightSide"><a href="sign-up.html" class="links signUpInHeader">Sign up</a><span> / </span><a href="login.html" class="links login">Login</a></li>                
            </ul>
        </nav>                
    </header>
    `;
  }
}

customElements.define("header-component", Header);
