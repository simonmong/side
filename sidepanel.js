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

document.getElementById("logInbtn").addEventListener("click", function () {
  infoVal = document.getElementById("googleIdentity").value;
  chrome.tabs.create({
    url:
      "http://www.secondlearner.com/gchrome/gLogin.php?data=" +
      encodeURIComponent(infoVal),
    active: false,
  });
});

async function fetchData() {
  infoVal = document.getElementById("googleIdentity").value;

  const response = await fetch(
    "http://www.secondlearner.com/gchrome/itemCaption.php?it_id=1693798169"
  );

  const data = await response.json();
  
  document.getElementById("captionFrom").value = JSON.stringify(data);
  
  buildTable(data);
}



fetch("names.json")
.then(res => res.json())
.then(json => {

    let mountains = json;
    let table = document.querySelector("table");
    let data = Object.keys(mountains[0]);
    generateTable(table, mountains); // generate the table first
    generateTableHead(table, data); // then the head

})



function buildTable(data) {
  let table = document.getElementById("myTable");

  document.getElementById("notification").innerHTML = JSON.stringify(
    Object.keys(data)
  );

  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
          <td>${data}</td>
          <td>${data[i].age}</td>
          <td>${data[i].birthdate}</td>
        </tr>`;
    table.innerHTML += row;
  }
}

document
  .getElementById("fetchCaptionbtnGET")
  .addEventListener("click", fetchData);

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
