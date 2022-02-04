import { createApp } from 'vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import LockIcon from 'vue-material-design-icons/Lock.vue';
import App from './App.vue'

createApp(App)
    .component('lock-icon',LockIcon)
    .component('phone-icon',PhoneIcon)
    .component('menu-icon',MenuIcon)
    .mount('#app')
