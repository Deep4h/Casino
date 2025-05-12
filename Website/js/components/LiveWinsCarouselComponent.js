export default {
    template: `
        <div class="live-wins-carousel">
            <div class="live-wins-container">
                <div 
                    v-for="item in items" 
                    :key="item.uniqueId" 
                    class="live-win-item" 
                    :style="{ transform: 'translateX(' + item.position + '%)', transition: 'transform 0.5s ease-in-out' }"
                >
                    <p>{{ item.username }} won {{ item.amount }} coins!</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            liveWins: [
                { id: 1, username: 'Player1', amount: 100 },
                { id: 2, username: 'Player2', amount: 200 },
                { id: 3, username: 'Player3', amount: 300 },
                { id: 4, username: 'Player4', amount: 400 },
                { id: 5, username: 'Player5', amount: 500 },
                { id: 6, username: 'Player6', amount: 600 },
                { id: 7, username: 'Player7', amount: 700 },
                { id: 8, username: 'Player8', amount: 800 },
                { id: 9, username: 'Player9', amount: 900 }
            ],
            items: [], // Items currently visible in the carousel
            maxVisible: 9, // Number of items to show at once
            uniqueIdCounter: 10, // Counter to generate unique IDs for new items
            intervalId: null // Interval ID for auto-scrolling
        };
    },
    mounted() {
        // Initialize visible items with positions
        this.items = this.liveWins.slice(0, this.maxVisible).map((item, index) => ({
            ...item,
            uniqueId: item.id, // Use the existing ID as the unique ID
            position: index * (100 / this.maxVisible) // Calculate initial position
        }));

        // Start the interval to scroll items
        this.intervalId = setInterval(this.scrollItems, 2000);
    },
    beforeUnmount() {
        // Clear the interval when the component is destroyed
        clearInterval(this.intervalId);
    },
    methods: {
        scrollItems() {
            // Move all items to the right
            this.items.forEach(item => {
                item.position += 100 / this.maxVisible;
            });

            // After the animation, remove the last item and add a new one at the beginning
            setTimeout(() => {
                // Remove the last item (it has left the screen)
                this.items.pop();

                // Add a new item to the beginning
                const newItem = this.liveWins.pop(); // Get the last item from liveWins
                this.liveWins.unshift(newItem); // Add the removed item back to the beginning of liveWins
                this.items.unshift({
                    ...newItem,
                    uniqueId: this.uniqueIdCounter++, // Assign a unique ID to the new item
                    position: -100 / this.maxVisible // Start the new item off-screen to the left
                });
            }, 500); // Match the CSS transition duration
        }
    }
};