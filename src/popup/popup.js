let currentTextDiv = document.querySelector(".current-text")
let totalTextDiv = document.querySelector(".total-text")


window.onload = function() {
  browser.storage.local.get().then(result => {
    console.log(result);
    currentTextDiv.innerText = "Current page : " + result.current
    totalTextDiv.innerText = "Total : " + result.total
  })
}