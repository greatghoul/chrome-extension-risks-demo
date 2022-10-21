const CONFIG = { credentials: "include" };

const fetchHTML = url => fetch(url, CONFIG).then(resp => resp.text())
const parseDoc = html => new DOMParser().parseFromString(html, "text/html")
const fetchDoc = url => fetchHTML(url).then(parseDoc)

function fetchUsername() {
  return fetchHTML("https://github.com/").then(html => {
    const result = html.match(/<meta name="octolytics-actor-login" content="(.*?)"/im);
    console.log(result);
    return result[1];
  })
}

function fetchFirstSecretGist(username) {
  return fetchDoc(`https://gist.github.com/${username}/secret`).then(doc => {
    const url = doc.querySelector(".gist-snippet .file-box .link-overlay").getAttribute("href");
    console.log(url);
    return url;
  });
}

function fetchGistContent(gistUrl) {
  return fetchDoc(gistUrl).then(doc => {
    const file = doc.querySelector(".file textarea");
    console.log(file.textContent);
  });
}

fetchUsername()
  .then(fetchFirstSecretGist)
  .then(fetchGistContent);