const code = `
  const title = document.querySelector('#js-discussion-title');
  title.dispatchEvent(new Event('focus', { bubbles: true, cancelable: true }));
  title.value = 'Hi there. ' + new Date().toString();
  title.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  title.dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));
  
  const desc = document.querySelector('#discussion_body');
  desc.dispatchEvent(new Event('focus', { bubbles: true, cancelable: true }));
  desc.value = '## test';
  desc.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
  desc.dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));

  setTimeout(() => {
    const submit = document.querySelector("#new_discussion button[type=submit]");
    submit.click();  
  }, 1000);
`;

function postActively() {
  chrome.tabs.create({
    url: "https://github.com/GDG-Xian/Campfire/discussions/new?category=04-test",
    active: true
  }, tab => {
    chrome.tabs.executeScript(tab.id, { code })
  });
}

function postInactively() {
  setTimeout(() => {
    chrome.tabs.create({
      url: "https://github.com/GDG-Xian/Campfire/discussions/new?category=04-test",
      active: false
    }, tab => {
      chrome.tabs.executeScript(tab.id, { code }, function() {
        setTimeout(() => {
          chrome.tabs.remove(tab.id);
        }, 3000);
      });
    });  
  }, 3000);
}
