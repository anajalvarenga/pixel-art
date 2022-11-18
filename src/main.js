import { createApp } from 'vue';

import App from './App.vue';
import BaseSquare from './components/UI/BaseSquare.vue';
import BaseGrid from './components/UI/BaseGrid.vue';

const app = createApp(App);

app.component('BaseSquare', BaseSquare);
app.component('BaseGrid', BaseGrid);

app.mount('#app');
