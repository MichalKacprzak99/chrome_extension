
const openConfigureCommands = () => {
  chrome.tabs.create({
    url: 'chrome://extensions/configureCommands'
  });
}
