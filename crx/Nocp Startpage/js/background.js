chrome.browserAction.setBadgeText({text: "off"});
chrome.browserAction.setBadgeBackgroundColor({color: [192, 0, 0, 111]});
chrome.contextMenus.create({
    title: "打开新的标签页",
    onclick: function() {window.open("nstart.html");}
});
