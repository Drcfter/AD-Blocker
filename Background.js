// List of common ad URL patterns to block
const adUrlPatterns = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.adservice.google.com/*",
    "*://*.amazon-adsystem.com/*",
    "*://*.adsafeprotected.com/*",
    "*://*.taboola.com/*",
    "*://*.outbrain.com/*"
  ];
  
  // Listen to web requests and block those that match ad URL patterns
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: true }; // Cancel (block) the request
    },
    { urls: adUrlPatterns },
    ["blocking"]
  );
  