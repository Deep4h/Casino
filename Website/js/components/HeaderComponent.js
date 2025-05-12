import DropdownComponent from './DropdownComponent.js';

export default {
    components: {
        'dropdown-component': DropdownComponent
    },
    template: `
        <header>
            <div class="header-container">
                <div class="header-left">
                    <img src="logo.png" alt="Logo" class="header-logo">
                    <dropdown-component
                        label="GAMES"
                        :items="gamesDropdownItems"
                        buttonClass="header-button"
                        imgClass="fa-solid fa-gamepad"
                    ></dropdown-component>
                    <button class="header-button"><i class="fa-solid fa-trophy"></i> CHALLENGES</button>
                    <button class="header-button"><i class="fa-solid fa-circle-question"></i> HELP</button>
                </div>
                <div class="header-right">
                    <div class="coin-wallet-container">
                        <span class="coin-value">0.00</span>
                        <dropdown-component
                            label="Wallet"
                            :items="coinDropdownItems"
                            buttonClass="coin-button"
                            :open-on-hover="false"
                            imgClass="fa-solid fa-wallet"
                        ></dropdown-component>
                    </div>
                    <dropdown-component
                        label="User ▼"
                        :items="userDropdownItems"
                        buttonClass="user-button"
                        :open-on-hover="false"
                    ></dropdown-component>
                </div>
            </div>
        </header>
    `,
    data() {
        return {
            gamesDropdownItems: [
                { label: 'Option 1', action: () => alert('Option 1 clicked') },
                { label: 'Option 2', action: () => alert('Option 2 clicked') },
                { label: 'Option 3', action: () => alert('Option 3 clicked') },
                { label: 'TESTETSTETSTETSTETSTWT', action: () => alert('Option 1 clicked') },
            ],
            coinDropdownItems: [
                { label: 'Deposit', action: () => alert('Option 1 clicked') },
                { label: 'Withdraw', action: () => alert('Option 2 clicked') },
            ],
            userDropdownItems: [
                { label: 'Account', action: () => alert('Option 1 clicked') },
                { label: 'TESTETSTETSTETSTETSTWT', action: () => alert('Option 1 clicked') },
            ]
        };
    }
};