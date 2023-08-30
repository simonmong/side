
console.log("I am background script!");

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   chrome.tabs.sendMessage(
//     tabs[0].id,
//     { msg: "example-send-to-content-script" },
//     (response) => {
//       if (response) {
//         console.log(response);
//       }
//     }
//   );
// });


// Allows users to open the side panel by clicking on the action toolbar icon

chrome.sidePanel

.setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {

  if (!tab.url) return;
  const url = new URL(tab.url);
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
   
});







