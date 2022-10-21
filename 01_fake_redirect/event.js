const filters = {
  urls: [
    "*://www.baidu.com/s*",
  ],
  types: [
    'main_frame',
    "sub_frame",
    "xmlhttprequest",
  ]
};

function handler(details) {
  const params = new URLSearchParams(new URL(details.url).search);
  const q = params.get("wd");
  return { redirectUrl: `https://www.google.com/search?q=${q}` }
}

chrome.webRequest.onBeforeRequest.addListener(handler, filters, ["blocking"]);
