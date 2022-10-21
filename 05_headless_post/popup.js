function handleAClick() {
  const bg = chrome.extension.getBackgroundPage();
  bg.postActively();
}

function handleBClick() {
  const bg = chrome.extension.getBackgroundPage();
  bg.postInactively();
}

document.querySelector("#post-a").addEventListener("click", handleAClick, false);
document.querySelector("#post-b").addEventListener("click", handleBClick, false);
