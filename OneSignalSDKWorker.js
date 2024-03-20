// OneSignal Initialisierung
var OneSignal = self.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "72fd64b0-067e-4b77-9203-14ff9b484770", // Deine OneSignal-App-ID
        notifyButton: {
            enable: true, // Aktiviere die Benachrichtigungsschaltfläche
        },
    });
});

// Service Worker-Registrierung
if ('serviceWorker' in navigator) {
    self.addEventListener('install', function(event) {
        console.log('[Service Worker] Installing Service Worker...', event);
    });

    self.addEventListener('activate', function(event) {
        console.log('[Service Worker] Activating Service Worker...', event);
    });

    self.addEventListener('fetch', function(event) {
        console.log('[Service Worker] Fetching something...', event);
    });

    self.addEventListener('push', function(event) {
        console.log('[Service Worker] Push Notification received', event);
    });

    self.addEventListener('notificationclick', function(event) {
        console.log('[Service Worker] Notification clicked', event);
        event.notification.close();
    });

    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/OneSignalSDKWorker.js')
            .then(function(registration) {
                console.log('Service Worker registered:', registration);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    });
}

