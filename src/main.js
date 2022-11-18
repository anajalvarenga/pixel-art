import { createApp } from 'vue';

import App from './App.vue';
import BaseSquare from './components/UI/BaseSquare.vue';
import BaseGrid from './components/UI/BaseGrid.vue';

const app = createApp(App);

app.component('base-square', BaseSquare);
app.component('base-grid', BaseGrid);

app.mount('#app');
