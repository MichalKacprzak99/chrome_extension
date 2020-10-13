var query = { highlighted: true, currentWindow: true };
function callback(tabs) {
    var text = ""
    for( const tab of tabs){
        text += tab.url +"\n"
    }
    document.getElementById('info').textContent = text;
    var target = document.getElementById('info');

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
chrome.tabs.query(query, callback);
// newDiv = document.createElement("div");
// newDiv.id = 'test';
// newDiv.innerHTML = '<span class="msg">Hello world.</span>';
