import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyCSwD1idrOA_eMaDjeW0Mx4VLolXr-6nHg',
		libraries: 'places',
	},
});
