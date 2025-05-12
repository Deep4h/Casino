export default {
    props: {
        label: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        buttonClass: {
            type: String,
            default: '' // Default to an empty string if no class is provided
        },
        openOnHover: {
            type: Boolean,
            default: true // Default to opening on click
        },
        imgClass: {
            type: String,
            default: '' // Default to an empty string if no class is provided
        },
    },
    template: `
    <div
            class="dropdown"
            :class="{ 'dropdown-hover': openOnHover }"
            @mouseenter="openOnHover ? toggleDropdown(true) : null"
            @mouseleave="toggleDropdown(false)"
    >
        <button
                :class="[buttonClass]"
                @click="!openOnHover ? toggleDropdown() : null"
        ><i :class="[imgClass]"></i>
                {{ label }}
        </button>
        <ul class="dropdown-menu" v-show="isOpen">
            <li v-for="(item, index) in items" :key="index">
                <a href="#" @click="handleClick(item)">{{ item.label }}</a>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            isOpen: false // Tracks whether the dropdown is open
        };
    },
    methods: {
        toggleDropdown(state = null) {
            console.log('Item clicked:', this.isOpen);
            this.isOpen = state !== null ? state : !this.isOpen;
            console.log('Item after clicked:', this.isOpen);
        },
        handleClick(item) {
            if (item.action) {
                item.action(); // Call the action if provided
            }
        }
    }
};