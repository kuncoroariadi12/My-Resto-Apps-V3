class jumbotronContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <!-- jumbotron -->
        <div class="jumbotron-container">
          <div class="jumbotron-title">
            <h1>Welcome to MyResto!</h1>
            <p>Your satisfaction is our pride</p>
          </div>
        </div>
        `;
    }
}

customElements.define('jumbotron-content', jumbotronContent);
