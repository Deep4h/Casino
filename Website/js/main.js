import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import LiveWinsCarouselComponent from './components/LiveWinsCarouselComponent.js';
import NewsCarouselComponent from './components/NewsCarouselComponent.js';
import ChatComponent from './components/ChatComponent.js';

// Check which page is being loaded
const page = document.body.dataset.page;

const mainApp = Vue.createApp({
    data() {
        return {
            chatOpen: true
        };
    },
    methods: {
        handleResize(isCollapsed) {
            this.chatOpen = !isCollapsed;
        }
    }
});

    mainApp.component('header-component', HeaderComponent);
    mainApp.component('live-wins-carousel', LiveWinsCarouselComponent);
    mainApp.component('news-carousel', NewsCarouselComponent);
    mainApp.component('footer-component', FooterComponent);
    mainApp.component('chat-component', ChatComponent);
    mainApp.mount('#main-app');