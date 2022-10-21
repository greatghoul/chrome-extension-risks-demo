const filters = {
  urls: [
    "https://*.bytescm.com/obj/static/xitu_juejin_web/img/app_download_QR.*.png",
  ],
  types: [
    "image",
  ]
};

function handler(details) {
  return {
    // extract to https://gdgxian.org/
    redirectUrl: "https://i.imgur.com/8ttdbLK.png"
  }
}

chrome.webRequest.onBeforeRequest.addListener(handler, filters, ["blocking"]);
