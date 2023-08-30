
// chrome.identity 로 구글 이메일을 가져온다.

chrome.identity.getProfileUserInfo({ accountStatus: "ANY" }, function (info) {
  if (info.email.length < 10) {
    document.querySelector("notification").value = "구글계정에 로그인해주세요.";
    return;
  }
    document.getElementById("googleIdentity").value = JSON.stringify(info);
  
});
// 가져온 구글 이메일로 서버에 회원가입 페이지로 이동 


document.getElementById("signUpbtn").addEventListener("click", async function() {
  chrome.tabs.create({
    url: "http://www.secondlearner.com/"
  });
});


// 로그인 버튼을 클릭하면 서버에 로그인 


document.getElementById("logInbtn").addEventListener("click", async function() {
  


});





//1. 유튜브 페이지 로딩되면 비디오 id를 찾는다.

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {  
    /// 현재 탭 가져와서 비디오 아이디 만들기
      if (tab.url.indexOf('youtube.com/watch') != -1) {
        const queryParameters = tab[0].url.split('?')[1]
        const urlParameters = new URLSearchParams(queryParameters)
        videoId.innerHTML = urlParameters.get('v')
      } else {
        videoId.innerHTML = tab.url
      }
  } //if
}) // addListener

