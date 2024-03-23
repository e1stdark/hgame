var url = "127.0.0.1:80/buy";
var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', url, true);
httpRequest.setRequestHeader("Content-type", "application/json");
var obj = {
    "id":0
};

httpRequest.send(JSON.stringify(obj));

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        console.log(json);
    }
};
