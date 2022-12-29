class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
                <p>Project akhir kelas Belajar Fundamental Front-End bersama Dicoding bersama di coding</p>
              `;
  }
}

customElements.define("foot-bar", FootBar);
