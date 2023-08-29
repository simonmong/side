
console.log("I am background script!3s");

function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}



async function getApple() {

  await delay(1000);
  throw 'error';
  return 'appple';

 
  
}

async function getBanana() {

  await delay(1000);
  return 'banana';
  
}

async function pickFruits() { 

  try{

    
  const apple = await getApple();
  const banana = await getBanana() ;
  return  apple + banana + banana;

  }catch(e){

    console.log(e);

  }

    


  
}

pickFruits().then(console.log)






 




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







