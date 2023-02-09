// Remove shorts from Youtube subscription page

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  await sleep(250)
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

main()

// contents = document.querySelector("#contents")
// contents.childElementCount

// var wait = (ms) => {
//   const start = Date.now();
//   let now = start;
//   while (now - start < ms) {
//     now = Date.now();
//   }
// }

// while(document.getElementById("contents") === null) {
//   sleep(1000)
//   console.log("Wait...");
// }

// var targetNode = document.getElementById("contents")
// var config = { childList: true }

// var callback = function(mutationsList) {
//   for (var mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       console.log("The content of the div has changed.")
//     }
//   }
// };

// var observer = new MutationObserver(callback);
// observer.observe(targetNode, config);