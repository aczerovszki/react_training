import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDWi-MctfJSQMObxxEKMNVAsmHdtIaWhKM",
    authDomain: "react-project-71152.firebaseapp.com",
    projectId: "react-project-71152",
    storageBucket: "react-project-71152.appspot.com",
    messagingSenderId: "274792196881",
    appId: "1:274792196881:web:b5343cab6d43bfa567fab0"
})

export const auth = app.auth()
export default app