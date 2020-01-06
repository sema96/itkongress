function checkUser(){
    var name = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var branche = document.getElementById("branche").value;
    var settings = {

        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/login",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }
    $.ajax(settings).done(function (response) {
        var laenge = response.length;
        console.log(laenge);
        for(i=0;i<laenge;i++){
            if(response[i].user == name){
                alert("Dieser User ist bereits registriert.");
            } else{
                login();
            }
            console.log("Schlüssel: " +response[i].user+ "mit Wert"+ response[i].password);
        }


    });
}

function login(){
    var name = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var branche = document.getElementById("branche").value;
    var jsondata = {
        "user": name,
        "password": password,
        "Branche": branche
    };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/login",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

