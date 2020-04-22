var input_file = document.getElementById("upload");
var image = document.getElementById("view");
var base64Url = document.getElementById("base64");

input_file.onchange = function() {
    var fileData = input_file.files[0];
    var pettern = /^image/;

    if(!pettern.test(fileData.type)) {
        var fs = new FileReader();
        fs.readAsDataURL(fileData);
        fs.onload = function(e) {
            base64Url.value = this.result;
        }
        fs.onerror = function(e) {
            alert("处理失败");
            console.error(e);
        }
    } else {
        var fs = new FileReader();
        fs.readAsDataURL(fileData);
        fs.onload = function(e) {
            image.src = this.result;
            base64Url.value = this.result;
        }
        fs.onerror = function(e) {
            alert("处理失败");
            console.error(e);
        }
    }
}
