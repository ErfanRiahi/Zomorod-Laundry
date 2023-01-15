class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div id="contactUs">
            <div>
                <h2>Contact us</h2>
                <p>Isfahan, Varposhti Alley, No. 77</p>
                <a href="tel:03136274473" class="links">Phone: 031-3627-4473</a>

            </div>
            <div>
                <!--<iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13440.800737324296!2d51.6566032!3d32.6274921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6edb7a59ae4bd12d!2z2K7YtNqp2LTZiNuM24wg2LLZhdix2K8!5e0!3m2!1sen!2skr!4v1673720681435!5m2!1sen!2skr"
                    width="80%" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>-->
            </div>
            <div>
                <h2>Opening hours</h2>
                <div id="hours">
                    <div>
                        <span>Saturday to Thursday</span>

                        <span>Friday</span>
                    </div>
                    <div>
                        <span>8-13, 15:30-20:30</span>
                        <span>Closed</span>

                    </div>
                </div>

            </div>
        </div>
        <div id="copyright">
            <span>&copy 2023 Zomorod Laundry</span>
        </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
