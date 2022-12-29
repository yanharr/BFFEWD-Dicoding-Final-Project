class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <nav class="navbar navbar-dark bg-dark">
                  <span class="navbar-brand mb-0 h1">Daftar Olahraga</span>
              </nav>
            `;
  }
}

customElements.define("nav-bar", NavBar);
