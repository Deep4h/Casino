import CarouselComponent from './CarouselComponent.js';

export default {
    components: {
        'carousel-component': CarouselComponent
    },
    template: `
        <carousel-component :items="newsImages" :auto-scroll="true" :scroll-interval="5000">
            <template #default="{ item }">
                <div class="news-carousel-item">
                    <img :src="item.src" :alt="item.alt" class="news-carousel-image" />
                </div>
            </template>
        </carousel-component>
    `,
    data() {
        return {
            newsImages: [
                { src: 'https://placehold.co/1000x300/000000/00FFFF.png', alt: 'News 1' },
                { src: 'https://placehold.co/1000x300/000000/FF00FF.png', alt: 'News 2' },
                { src: 'https://placehold.co/1000x300/000000/FFFF00.png', alt: 'News 3' }
            ]
        };
    }
};