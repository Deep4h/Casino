export default {
    template: `
        <div class="chat-container" :class="{ open: chatOpen }">
            <div class="chat" :class="{ collapsed: isCollapsed }">
                <button class="chat-toggle" @click="toggleChat">
                    <i :class="isCollapsed ? 'fa fa-chevron-right' : 'fa fa-chevron-left'"></i>
                </button>
                <h3>Chat</h3>
                <div class="chat-messages" ref="chatMessages">
                    <div v-for="(message, index) in messages" :key="index" class="message">
                        <p><strong>{{ message.sender }}:</strong> {{ message.text }}</p>
                    </div>
                </div>
                <form class="chat-form" @submit.prevent="sendMessage">
                    <input type="text" v-model="newMessage" placeholder="Type your message..." />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    `,
    data() {
        return {
            isCollapsed: false,
            chatOpen: true,
            newMessage: '',
            messages: [
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
                { sender: 'Admin', text: 'Welcome to the chat!' },
                { sender: 'User1', text: 'Hello everyone!' },
            ]
        };
    },
    methods: {
        toggleChat() {
            this.isCollapsed = !this.isCollapsed;
            this.chatOpen = !this.chatOpen;

            // Emit an event to notify the parent to resize the content
            this.$emit('resize-content', this.isCollapsed);
        },
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.messages.push({ sender: 'You', text: this.newMessage });
                this.newMessage = '';

                // Scroll to the bottom of the chat
                this.$nextTick(() => {
                    const chatMessages = this.$refs.chatMessages;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                });
            }
        }
    }
};