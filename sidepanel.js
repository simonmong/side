
// chrome.identity 로 구글 이메일을 가져온다.

chrome.identity.getProfileUserInfo({ accountStatus: "ANY" }, function (info) {
  if (info.email.length < 10) {
    document.querySelector("notification").value = "구글계정에 로그인해주세요.";
    return;
  }
    email = info.email;
    document.getElementById("googleIdentity").value = JSON.stringify(info);
  
});
// 가져온 구글 이메일로 서버에 회원가입 페이지에 연결 


document.getElementById("signUpbtn").addEventListener("click", function() {
  chrome.tabs.create({
    url: "http://www.secondlearner.com/"
  });
});


// 로그인 버튼을 클릭하면 로그인 


document.getElementById("logInbtn").addEventListener("click", function() {
  


});


  




//1. 유튜브 페이지 로딩되면 비디오 id를 찾는다.

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    /// 현재 탭 가져와서 비디오 아이디 만들기

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0]

      if (tab.url.indexOf('youtube.com/watch') != -1) {
        const queryParameters = activeTab.url.split('?')[1]
        const urlParameters = new URLSearchParams(queryParameters)
        output = urlParameters.get('v')
        videoId.innerHTML = output
      } else {
        videoId.innerHTML = activeTab.url
      }
    })
  } //if
}) // addListener

