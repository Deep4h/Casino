import popup from './components/popup.vue';

const PopupComponent = {
  props: {
    menuItems: {
      type: Array,
      required: true,
      default: () => [],
    },
    iframes: {
      type: Array,
      required: true,
      default: () => [],
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedPage: this.menuItems.length > 0 ? this.menuItems[0].page : null, // Default to the first page
    };
  },
  methods: {
    selectPage(page) {
      this.selectedPage = page;
    },
    closePopup() {
      this.$emit("close"); // Emit an event to notify the parent to close the popup
    },
  },
  template: `
    <div class="menu-popup-content" v-if="visible">
      <div class="menu-sidebar">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <a href="#" @click.prevent="selectPage(item.page)">{{ item.label }}</a>
          </li>
        </ul>
      </div>
      <div class="menu-iframe-container">
        <iframe
          v-for="(iframe, index) in iframes"
          :key="index"
          :id="iframe.id"
          :src="iframe.src"
          frameborder="0"
          v-show="selectedPage === iframe.page"
        ></iframe>
      </div>
    </div>
  `,
};

const NotificationDropdown = {
    props: {
      notifications: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isOpen: false // Tracks whether the dropdown is open
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen; // Toggles the dropdown visibility
      },
      closeDropdown() {
        this.isOpen = false; // Closes the dropdown
      }
    },
    template: `
      <div class="notification-container">
        <button class="notification-button" @click="toggleDropdown">
          <i class="fas fa-bell"></i>
        </button>
        <div class="notification-box" v-if="isOpen">
          <ul class="notification-list">
            <li v-for="(notification, index) in notifications" :key="index">
              {{ notification }}
            </li>
            <li v-if="notifications.length === 0">No notifications</li>
          </ul>
        </div>
      </div>
    `
  };

const globalState = Vue.reactive({
    chatOpen: false // Shared state
});

const mainApp = Vue.createApp({
    components: {
      NotificationDropdown,
      PopupComponent,
      popup
    },
    data() {
      return {
        notifications: ["Notification 1", "Notification 2", "Notification 3"],
        menuItems: [
        { label: "Deposit", page: "deposit" },
        { label: "Withdraw", page: "withdraw" },
        { label: "Profile", page: "profile" },
        { label: "About", page: "about" },
        { label: "Services", page: "services" },
        { label: "Contacts", page: "contacts" },
      ],
      iframes: [
        { id: "deposit-page", src: "deposit/deposit.html", page: "deposit" },
        { id: "withdraw-page", src: "withdraw.html", page: "withdraw" },
        { id: "profile-page", src: "profile/profile.html", page: "profile" },
        { id: "about-page", src: "about.html", page: "about" },
        { id: "services-page", src: "services.html", page: "services" },
        { id: "contacts-page", src: "contact.html", page: "contacts" },
      ],
      popupVisible: false, // Controls the visibility of the popup
      };
    },
  methods: {
    openPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
  },
  });
  
  mainApp.mount('#main-app');

const chatApp = Vue.createApp({
    data() {
      return {
        isCollapsed: false,
        newMessage: '',
        messages: []
      };
    },
    computed: {
        chatOpen: {
            get() {
                return globalState.chatOpen; // Access shared state
            },
            set(value) {
                globalState.chatOpen = value; // Update shared state
            }
        }
    },
    methods: {
        toggleChat() {
            this.isCollapsed = !this.isCollapsed;
            this.chatOpen = !this.chatOpen;
            
          },
      sendMessage() {
        if (this.newMessage.trim() !== "") {
            this.messages.push({ sender: "You", text: this.newMessage });
            this.newMessage = "";
        }
      }
    },
    provide() {
        return {
            chatOpen: Vue.computed(() => this.chatOpen) // Provide reactive chatOpen state
        };
    }
  }).mount('#chat-app');