import 'regenerator-runtime'; /* for async await transpile */

// import lazysizes
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import CSS
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';

// import JS
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import { webSocketInitiator } from './utils/web-socket-initiator';

// import components
import './components/navbar';
import './components/jumbotron';
import './components/footer';

const app = new App({
    button: document.querySelector('#icon-mobile'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main-content'),
});

// hash change
window.addEventListener('hashchange', () => {
    app.renderPage();
});

// load
window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
