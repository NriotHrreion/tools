var ctu = document.getElementById("ctu");
var utc = document.getElementById("utc");
var reset = document.getElementById("reset");

ctu.onclick = function() {
    var textbox = document.getElementById("textbox");
    var res = [];
    for(var i = 0; i < textbox.value.length; i++) {
        res[i] = ("00" + textbox.value.charCodeAt(i).toString(16)).slice(-4);
    }
    textbox.value = "\\u" + res.join("\\u");
}

utc.onclick = function() {
    var textbox = document.getElementById("textbox");
    textbox.value = textbox.value.replace(/\\/g, "%");
    textbox.value = unescape(textbox.value);
    textbox.value = textbox.value.replace(/%/g, "\\");
    textbox.value = textbox.value.replace(/\\/g, "");
}

reset.onclick = function() {
    var textbox = document.getElementById("textbox");
    textbox.value = "";
}