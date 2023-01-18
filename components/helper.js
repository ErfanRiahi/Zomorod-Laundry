export function myHeader() {
  const header = document.querySelector(".mainHeader");
  header.innerHTML = `
    <header>
        <nav>
            <ul>
                <li><a href="../index.html" class="links">Home</a></li>
                <li><a href="services.html" class="links">Services</a></li>
                <li><a href="order.html" class="links">Order</a></li>
                <li><a href="about.html" class="links">About</a></li>                                
                <li class="rightSide"><a href="sign-up.html" class="links signUpInHeader">Sign up</a><span> / </span><a href="login.html" class="links login">Login</a></li>                
            </ul>
        </nav>                
    </header>
    `;
}

export function myFooter() {
  const footer = document.querySelector(".mainFooter");
  footer.innerHTML = `
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
    `;
}

export function myForm() {
  const form = document.querySelector(".myForm");
  form.innerHTML = `
    <h1>We will contact you :)</h1>
    <div class="nameEmailTel">
        <div>
            <label for="name">Name<span class="redStar">*</span></label>
            <input type="text" name="name" id="name" required>
        </div>
        <div>
            <label for="email">Email<span class="redStar">*</span></label>
            <input type="email" name="email" id="email" required>
        </div>
        <div>
            <label for="telNum">Telephone / Mobile</label>
            <input type="tel" name="telNum" id="telNum">
        </div>
    </div>
    <label for="question">Question / suggestion</label>
    <textarea name="question" class="question"></textarea>
    <input type="submit" value="Send">
    `;
}
