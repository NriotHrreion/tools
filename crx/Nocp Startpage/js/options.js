function selectImg(id) {
    chrome.storage.local.set({image: id}, function() {
        document.getElementById("stat").innerHTML = "已设置";
    });
}
