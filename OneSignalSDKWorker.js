// OneSignal Initialisierung
var OneSignal = OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "72fd64b0-067e-4b77-9203-14ff9b484770",
        notifyButton: {
            enable: true,
        },
    });
});

// Service Worker-Registrierung
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('OneSignalSDKWorker.js')
            .then(function(registration) {
                console.log('Service Worker registered:', registration);
            })
            .catch(function(error) {
                console.error('Service Worker registration failed:', error);
            });
    });
}
