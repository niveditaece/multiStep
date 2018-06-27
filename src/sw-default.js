// Let's have it locally. Run "workbox copyLibraries dist"
importScripts('workbox-v3.0.0/workbox-sw.js')

// SETTINGS

// Verbose logging even for the production
workbox.setConfig({ debug: true })
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug)

// Modify SW update cycle
workbox.skipWaiting()
workbox.clientsClaim()

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([])

// RUNTIME CACHING





// BACKGROUND SYNC

// Registering a route for retries
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)post/,
  workbox.strategies.networkOnly({
    plugins: [
      new workbox.backgroundSync.Plugin('userDataQueue', {
        maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
      })
    ]
  }),
  'POST'
)

// GOOGLE ANALYTICS

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    dimension1: 'offline'
  }
})