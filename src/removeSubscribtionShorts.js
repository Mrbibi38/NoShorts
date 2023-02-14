// Remove shorts from Youtube subscription page both in the list and grid display

// The sleep function is a utility function that returns a promise that resolves after a specified amount of time has passed
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// The main function is an async function that removes the shorts videos
async function main() {
<<<<<<< HEAD
  await sleep(500)
=======
  await sleep(1000)
>>>>>>> b0033574ce0e03a6e23db73ac1340c1669032069

    // Select all elements that match the CSS selector
    var shortsList = document.querySelectorAll("ytd-item-section-renderer:has(a[href*=shorts])")
    var shortsGrid = document.querySelectorAll("ytd-grid-video-renderer:has(a[href*=shorts])")
    
    // Remove all elements in shortsList
    shortsList.forEach(short => short.remove())
    // Remove all elements in shortsGrid
<<<<<<< HEAD
    shortsGrid.forEach(short => short.remove())   
    
    let countRemovedShorts = shortsList.length + shortsGrid.length
    console.log(countRemovedShorts + " shorts removed!");

    browser.storage.local.get().then(result => {
      let totalRemoved = result.totalRemoved;
      console.log("totalRemovedAv : " + totalRemoved);

      totalRemoved += countRemovedShorts;

      console.log("totalRemovedAp : " + totalRemoved);

      browser.storage.local.set({ totalRemoved: totalRemoved });
      browser.storage.local.set({ currentRemoved: countRemovedShorts });
    });
=======
    shortsGrid.forEach(short => short.remove())    
>>>>>>> b0033574ce0e03a6e23db73ac1340c1669032069
}

// Call the main function to remove the shorts
main()
