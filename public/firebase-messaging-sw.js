importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
  apiKey: "AIzaSyCCsspfBkF8S0ClgHXfFRQB1cWkXmVFXb4",
  authDomain: "wellsee-co.firebaseapp.com",
  projectId: "wellsee-co",
  storageBucket: "wellsee-co.firebasestorage.app",
  messagingSenderId: "654578111462",
  appId: "1:654578111462:web:2fdd7bd7bdbc21f8b63c27",
  measurementId: "G-EZCH0FMSV2"
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})