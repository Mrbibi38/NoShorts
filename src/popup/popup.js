let currentTextDiv = document.querySelector(".currentText")
let totalTextDiv = document.querySelector(".totalText")


window.onload = function() {
  browser.storage.local.get().then(result => {
    console.log(result);
    currentTextDiv.innerText = "Shorts removed : " + result.currentRemoved
    totalTextDiv.innerText = "Total removed : " + result.totalRemoved
  })
}