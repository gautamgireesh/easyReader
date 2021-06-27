// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let doc = document.body;

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: highlightText,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
//   function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//       document.body.style.backgroundColor = color;
//     });
//   }

  function highlightText() {
      console.log("fef");
      if(element.hasChildNodes()){
        element.childNodes.forEach(highlightText(highlightText))
      }
      else if (element.nodeType === Text.TEXT_NODE){
        element.parentElement.style.color = 'black';
        element.parentElement.style.backgroundColor = 'black';
      }
  }ß