import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default defineNuxtPlugin(nuxtApp => {
	config.autoAddCss = false;
	library.add(fas);
	library.add(faArrowUpRightFromSquare);
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
