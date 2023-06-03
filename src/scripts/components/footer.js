class footerContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer id="contact">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-text">
                        <p>Submission Menjadi Front-End Web Developer Expert &#169; 2023, Kuncoro Ariadi</p>
                    </div>

                    <div class="footer-social-media">
                        <ul>
                            <li><a href="https://wa.me/085336043745" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                            <li><a href="https://www.instagram.com/kuncoroariadii_" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/kuncoro-ariadi/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/kuncoroariadi12" target="_blank"><i class="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-content', footerContent);
