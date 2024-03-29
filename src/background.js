// Background code

let gettingStoredStats = browser.storage.local.get();

gettingStoredStats.then(results => {

    // Initialize the saved stats if not yet initialized.
    if (Object.keys(results).length === 0) {
      results = { total: 0, current: 0 }
      } else {
        results.current = 0
      }
        console.log(results);
        browser.storage.local.set(results)
})

// This function listens for completed web requests and checks if they are of type "xmlhttprequest" and method "POST"
function listener(request) {

  // If the request is an XMLHttpRequest of type POST
  if (request.type === "xmlhttprequest" && request.method === "POST") {

    // Execute the removeSubscribtionShorts script within the current tab
    browser.tabs.executeScript({
      file: "/src/removeSubscribtionShorts.js"
    })
  }
}

// Add the listener function to listen for completed web requests with a URL pattern of https://www.youtube.com/*
browser.webRequest.onCompleted.addListener(
  listener,
  {urls: ['https://www.youtube.com/*']}
)
