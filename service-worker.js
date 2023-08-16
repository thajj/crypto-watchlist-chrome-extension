const SITE_TO_WATCH = "https://coinmarketcap.com/";

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })   
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on coinmarketcap.com
  debugger
  console.log(url.origin)
  if (url.origin === SITE_TO_WATCH) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: "options/options.html",
      enabled: true,
    });
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false,
    });
  }
});

// chrome.action.setBadgeText({text: 'ON'});
// chrome.action.setBadgeBackgroundColor({color: '#ffffff'});

// function showStayHydratedNotification() {
//     chrome.notifications.create({
//       type: 'progress',
//       iconUrl: '../icons/32.png',
//       title: 'Time to Hydrate',
//       message: 'Everyday I\'m Guzzlin\'!',
//       // buttons: [
//       //   { title: 'Keep it Flowing.' }
//       // ],
//       // priority: 10
//     });
//   }


//   showStayHydratedNotification();


//   // background script
// chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
//   if (message.type === "image") {
//     fetch('<https://api.tinify.com/shrink>', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Basic ${btoa('api:xxxxxx')}`,
//         'Content-Type': 'application/json'
//       },

//       body: JSON.stringify({source: {url: message.url}})
//     }).then(res => {
//       return res.json();
//     }).then(res => {
//       senderResponse(res);
//     })
//   }
//   return true
// });