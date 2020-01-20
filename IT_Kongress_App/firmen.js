function getFirmen(){
    var settings = {

        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/firmen",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }
    $.ajax(settings).done(function (response) {
        var laenge = response.length;

        for(i=0;i<laenge;i++){
            var name = response[i].getElementById("firmenname").value;

            document.getElementById("firmenname1").append(name);
            $(".firmenname").append(name);

            console.log("test");
        }


    });
}
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://itkongress-c690.restdb.io/rest/firmen",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "5dfa1a08bf46220df655dc80",
        "cache-control": "no-cache"
    }
}

$.ajax(settings).done(function (response) {
    var name = response.
    console.log(response);
});
