function executeScriptToCurrentTab(code) {
  getCurrentTabId((tabId) => {
    chrome.tabs.executeScript(tabId, { code: code });
  });
}

// 获取当前选项卡ID
function getCurrentTabId(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (callback) callback(tabs.length ? tabs[0].id : null);
  });
}

let isEnable = false;

document.getElementById('btn').addEventListener('click', function () {
  if (!isEnable) {
    isEnable = true;
    executeScriptToCurrentTab('document.body.style.opacity="0.8";document.body.style.filter="grayscale(1)"');
  } else {
    isEnable = false;
    executeScriptToCurrentTab('document.body.style.opacity="1";document.body.style.filter="grayscale(0)"');
  }
});