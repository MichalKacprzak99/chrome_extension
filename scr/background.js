


const copyToClipBoard = (text) => {

    const target = document.getElementById('info');
    target.innerText = text;
    const range, select;
    if (document.createRange) {
        range = document.createRange();
        range.selectNode(target)
        select = window.getSelection();
        select.removeAllRanges();
        select.addRange(range);
        document.execCommand('copy');
        select.removeAllRanges();
    } else {
        range = document.body.createTextRange();
        range.moveToElementText(target);
        range.select();
        document.execCommand('copy');
    }
}

const copyUrlOfSelectedTabs = (tabs) => {
    let text = ""
    for( const tab of tabs){
        text += tab.url +"\n"
    }
    copyToClipBoard(text)
  }

chrome.commands.onCommand.addListener((command) => {
    const query = { highlighted: true, currentWindow: true };
    if(command == "copy_url"){
        chrome.tabs.query(query, copySelectedTabsUrl);
    }
    
  });