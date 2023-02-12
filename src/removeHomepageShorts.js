// Remove shorts from Youtube home page

// Select elements that match the CSS selector
var shortsSection = document.querySelector('ytd-rich-section-renderer.style-scope:has(span[id="title"])')

// Remove element
shortsSection.remove()
