document.onkeydown = function(e) {
    var event = window.event || e;
    var code = event.keyCode || event.which || event.charCode;
    if(code == 13) {
        var search = document.getElementById("s").value;
        window.location.href = "https://baidu.com/s?wd="+ search;
    }
}
document.addEventListener('visibilitychange',function(){
    var isHidden = document.hidden;   
    if(isHidden){
        chrome.browserAction.setBadgeText({text: "off"});
        chrome.browserAction.setBadgeBackgroundColor({color: [192, 0, 0, 111]});
    } else {
        chrome.browserAction.setBadgeText({text: "on"});
        chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]});
    }
});
window.onbeforeunload = function() {
    chrome.browserAction.setBadgeText({text: "off"});
    chrome.browserAction.setBadgeBackgroundColor({color: [192, 0, 0, 111]});
}
chrome.browserAction.setBadgeText({text: "on"});
chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]});
