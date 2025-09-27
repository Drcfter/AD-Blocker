// List of common CSS selectors for ad elements
const adSelectors = [
    "iframe[src*='ad']",
    "div[class*='ad']",
    "div[id*='ad']",
    ".ad-banner",
    ".banner-ad",
    ".ad-box",
    ".sponsored",
    "img[alt*='sponsored']",
    "a[href*='ad']"
  ];
  
  // Function to remove ad elements based on selectors
  function removeAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
  }
  
  // Run the ad removal function initially and on page changes
  removeAds();
  new MutationObserver(removeAds).observe(document.body, { childList: true, subtree: true });
  