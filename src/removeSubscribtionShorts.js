// // Remove shorts from Youtube subscription page

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  for(let i = 0; i < 5; i++) {
    await sleep(1000)
    var shelf = document.querySelectorAll("ytd-item-section-renderer.style-scope.ytd-section-list-renderer")

    var shortsNode = []
  
    for (let i = 0; i < shelf.length; i++) {
      let text = shelf[i].querySelector("a#video-title").href
      if (text.includes("shorts")) {
        shortsNode.push(shelf[i])
      }
    }
    
    for (const node in shortsNode) {
      shortsNode[node].parentNode.removeChild(shortsNode[node])
    }
  
    console.log(shortsNode.length + " Shorts removed!");
  }
}

main()
startObserver()

async function startObserver() {
  await sleep(5000)

  // Select the node that will be observed for mutations
  const targetNode = document.getElementById('contents');

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              console.log('A child node has been added or removed.');
          }
          else if (mutation.type === 'attributes') {
              console.log('The ' + mutation.attributeName + ' attribute was modified.');
          }
      }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}

// while(document.querySelector("#contents") == null) {
//   contents = document.querySelector("#contents")
// }
// contents.childElementCount
// console.log(contents.childElementCount)


// // .style-scope.ytd-video-renderer span[aria-label="Shorts"]

// // .style-scope.ytd-thumbnail[overlay-style="SHORTS"]

// // ytd-item-section-renderer.style-scope.ytd-section-list-renderer:has(.style-scope.ytd-thumbnail[overlay-style="SHORTS"]) {
// //   border: 2px solid red;
// //   display: none;
// // }

// // ytd-item-section-renderer:has(.style-scope.ytd-video-renderer span[aria-label="Shorts"]){
// //   display: none !important;
// // }


// var shorts = document.querySelectorAll("ytd-item-section-renderer:has(.style-scope.ytd-video-renderer span[aria-label='Shorts'])")
