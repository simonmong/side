// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request && request.msg == "example-send-to-content-script") {
//     console.log("got message from background script!");
//     sendResponse({ sender: "content.js", data: ":thumbsup:" });
//   }
// });