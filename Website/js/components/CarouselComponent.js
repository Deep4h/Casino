export default {
    props: {
        items: {
            type: Array,
            required: true // Array of items to display in the carousel
        },
        autoScroll: {
            type: Boolean,
            default: true // Enable or disable auto-scrolling
        },
        scrollInterval: {
            type: Number,
            default: 3000 // Time in milliseconds for auto-scroll
        }
    },
    template: `
        <div class="carousel">
            <div 
                class="carousel-inner" 
                :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }"
            >
                <div
                    class="carousel-item"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <slot :item="item">{{ item }}</slot>
                </div>
            </div>
            <button class="carousel-control-prev" @click="prevSlide">‹</button>
            <button class="carousel-control-next" @click="nextSlide">›</button>
        </div>
    `,
    data() {
        return {
            currentIndex: 0, // Tracks the current slide
            intervalId: null // Stores the interval ID for auto-scroll
        };
    },
    methods: {
        nextSlide() {
            // Move to the next slide, looping back to the first if at the end
            this.currentIndex = (this.currentIndex + 1) % this.items.length;
            this.resetAutoScroll();
        },
        prevSlide() {
            // Move to the previous slide, looping back to the last if at the beginning
            this.currentIndex =
                (this.currentIndex - 1 + this.items.length) % this.items.length;
            this.resetAutoScroll();
        },
        startAutoScroll() {
            // Start auto-scrolling if enabled
            if (this.autoScroll) {
                this.intervalId = setInterval(() => {
                    this.currentIndex = (this.currentIndex + 1) % this.items.length;
                }, this.scrollInterval);
            }
        },
        stopAutoScroll() {
            // Stop auto-scrolling if it’s running
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },
        resetAutoScroll() {
            // Reset the auto-scroll timer after a manual navigation
            this.stopAutoScroll();
            this.startAutoScroll();
        }
    },
    mounted() {
        // Start auto-scrolling when the component is mounted
        this.startAutoScroll();
    },
    beforeUnmount() {
        // Stop auto-scrolling when the component is destroyed
        this.stopAutoScroll();
    }
};