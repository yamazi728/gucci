import fire from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyB8Jduvv2Hxtu_h2FV5Io8gNuzAXydqMbE',
	authDomain: 'last-hackathon.firebaseapp.com',
	projectId: 'last-hackathon',
	storageBucket: 'last-hackathon.appspot.com',
	messagingSenderId: '655230915699',
	appId: '1:655230915699:web:2197bd9f8e8168b5514606',
}

export default fire.initializeApp(firebaseConfig)
