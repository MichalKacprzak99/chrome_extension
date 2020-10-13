var query = { highlighted: true, currentWindow: true };

function callback(tabs) {
    var text = ""
    for( const tab of tabs){
        text += tab.url +"\n"
    }
    var target = document.getElementById('info');
    target.innerText = text;
    var range, select;
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

chrome.commands.onCommand.addListener(() => {
    chrome.tabs.query(query, callback);
  });