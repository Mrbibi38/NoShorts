// Remove shorts from Youtube subscription page both in the list and grid display

// The sleep function is a utility function that returns a promise that resolves after a specified amount of time has passed
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// The main function is an async function that removes the shorts videos
async function main() {
  await sleep(1000)

    // Select all elements that match the CSS selector
    var shortsList = document.querySelectorAll("ytd-item-section-renderer:has(a[href*=shorts])")
    var shortsGrid = document.querySelectorAll("ytd-grid-video-renderer:has(a[href*=shorts])")
    
    // Remove all elements in shortsList
    shortsList.forEach(short => short.remove())
    // Remove all elements in shortsGrid
    shortsGrid.forEach(short => short.remove())    
}

// Call the main function to remove the shorts
main()
