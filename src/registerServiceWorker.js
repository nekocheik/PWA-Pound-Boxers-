/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}sw.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          // Quelque soit la réponse de l'utilisateur, nous nous assurons de stocker cette information
          if (!('permission' in Notification)) {
            Notification.permission = permission
          }

          console.log(localStorage.getItem('firstNotification'))
          if (permission === 'granted' && localStorage.getItem('firstNotification') !== 'yes') {
            new Notification('Les notification sont maintenant activé 😃')
            localStorage.setItem('firstNotification', 'yes')
          }
        })
      }
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
