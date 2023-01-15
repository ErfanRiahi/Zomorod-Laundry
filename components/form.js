class Form extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <form class="forms">
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
            <label for="questoin">Question / suggestion</label>
            <textarea name="quesion" class="question"></textarea>
            <input type="submit" value="Send">
        </form>
    `;
  }
}

customElements.define("form-component", Form);
