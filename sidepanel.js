// chrome.identity 로 구글 이메일을 가져온다.
//
chrome.identity.getProfileUserInfo({ accountStatus: "ANY" }, function (info) {
  if (info.email.length < 10) {
    document.querySelector("notification").value = "구글계정에 로그인해주세요.";
    return;
  }
  email = info.email;
  document.getElementById("googleIdentity").value = JSON.stringify(info);
});
// 가져온 구글 이메일로 서버에 회원가입 페이지에 연결

document.getElementById("signUpbtn").addEventListener("click", function () {
  chrome.tabs.create({
    url: "http://secondlearner.com/bbs/login.php",
    active: false,
  });
});
//
//

document.getElementById("logInbtn").addEventListener("click", function () {
  infoVal = document.getElementById("googleIdentity").value;
  chrome.tabs.create({
    url:
      "http://www.secondlearner.com/gchrome/gLogin.php?data=" +
      encodeURIComponent(infoVal),
    active: false,
  });
});

// json GET 방식
async function fetchDataGET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      "x-rapidapi-key": "your_api_key",
    },
  });

  const data = await response.json();
  captionFromServer.innerHTML = JSON.stringify(data);
}

// json post 방식
async function fetchDataPOST() {
  const newProduct = {
    id: 1017,
    description: "New Phone Z",
    price: 433,
  };

  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newProduct),
  });
  captionFromServer.innerHTML = response.status;
}

document
  .getElementById("fetchCaptionbtnGET")
  .addEventListener("click", fetchDataGET);
document
  .getElementById("fetchCaptionbtnPOST")
  .addEventListener("click", fetchDataPOST);

//1. 유튜브 페이지 로딩되면 비디오 id를 찾는다.

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    /// 현재 탭 가져와서 비디오 아이디 만들기

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];

      if (tab.url.indexOf("youtube.com/watch") != -1) {
        const queryParameters = activeTab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
        output = urlParameters.get("v");
        videoId.innerHTML = output;
      } else {
        videoId.innerHTML = activeTab.url;
      }
    });
  } //if
}); // addListener
