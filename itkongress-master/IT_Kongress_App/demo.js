var currentPage = 'login';
function showPage(page) {
    $('#'+currentPage).hide();
    $('#'+page).show();
    currentPage = page;
}

$(document).ready(function(){

    $('div[role=page]').hide();
    showPage(currentPage);
});
$(document).ready(function() {
    $('div[role = page]').hide();
    showPage(currentPage);
    console.log(currentPage);
});


function checkUser(){
    var name = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var studiengang = document.getElementById("studiengang").value;
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
            if(response[i].user == name && response[i].password == password){
                showPage('login');
            } else{
                showPage('registrieren');
            }
            console.log("Schlüssel: " +response[i].user+ "mit Wert"+ response[i].password);
        }


    });
    user=name;
}

function userAnlegen(){
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


//SEMA------------------------------------------------------------------------------------------------------------
function a(){
    var settingsvor = {
        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/vortraege",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }
    var settingslog = {
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
    var settingsmeinprog = {
        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/meinprogramm",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }



    var myArray = [];
    $.ajax(settingsmeinprog).done(function (response) {

        var laenge = response.length;
        for(i=0;i<laenge;i++){
            if(response[i].username == user){

                myArray.push(response[i].idV);
                console.log("testwif-user");

            }else{
                console.log("kein testwif-user");
            }

        }

    });

    $.ajax(settingsvor).done(function (response) {
        var laengev = response.length;
        var length = myArray.length;
        var table;
        for( j=0; j<laengev; j++){
            for(i=0;i<length;i++){
                if(response[j].IDVortrag == myArray[i]){
                    var was=response[j].Titel;

                    var wann=new Date(response[j].Uhrzeit);
                    var a= wann.getHours()-1;
                    var b= wann.getMinutes();
                    var zeit= a+ ":"+b;
                    var wo=response[j].Raum;


                    var tabellen_id = "t1";
                    table = document.getElementById( tabellen_id );
                    var bez = document.createElement( "td" );
                    var zt = document.createElement( "td" );
                    var ort = document.createElement( "td" );
                    var zb= document.createElement("tr");
                    bez.innerHTML = was; // content
                    zt.innerHTML = zeit;
                    ort.innerHTML = wo;

                    table.appendChild( bez );
                    table.appendChild( zt );
                    table.appendChild( ort );
                    table.appendChild(zb);

                    console.log(was + " "+ zeit+ " "+wo);


                }else{
                    console.log("geht ned");
                }
            }
        }
    });

}

function bew(){
    var settingsvor = {
        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/vortraege",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }

    $.ajax(settingsvor).done(function (response) {
        document.getElementById('content').innerHTML = "";
        var laenge = response.length;
        for(i=0;i<laenge;i++){

            var a=parseInt(response[i].IDVortrag);


            $('#content').append('<p id= a>'+ response[i].Titel +
                '     <img onclick="pbewerten(this.id)" id='+a+' src="bilder/psmiley.png"><em id=p'+
                a+'>   '+response[i].pBewertung+'</em>     <img onclick="nbewerten(this.id)" id='+a+' src="bilder/nsmiley.png"><em id=n'+a+'>   '+
                response[i].nBewertung+' </em></p>');

        }
    });
}

function pbewerten(clicked_id){
    var settingsvor = {
        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/vortraege",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }

    var b;
    var idd;

    $.ajax(settingsvor).done(function (response) {

        var laenge = response.length;

        for(i=0;i<laenge;i++){

            if (clicked_id == response[i].IDVortrag){
                b=parseInt(response[i].pBewertung+1);
                idd=response[i]._id;
                document.getElementById("p"+clicked_id).innerHTML = b;

            }
            else{

            }
        }


        var jsondata = {"pBewertung": b};

        var settings = {
            "async": true,
            "crossDomain": true,

            "url": "https://itkongress-c690.restdb.io/rest/vortraege/"+idd,
            "method": "PUT",
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

    });

}
function nbewerten(clicked_id){
    var settingsvor = {
        "async": true,
        "crossDomain": true,
        "url": "https://itkongress-c690.restdb.io/rest/vortraege",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5dfa1a08bf46220df655dc80",
            "cache-control": "no-cache"
        }
    }

    var b;
    var idd;

    $.ajax(settingsvor).done(function (response) {

        var laenge = response.length;

        for(i=0;i<laenge;i++){

            if (clicked_id == response[i].IDVortrag){
                b=parseInt(response[i].nBewertung+1);
                idd=response[i]._id;
                document.getElementById("n"+clicked_id).innerHTML = b;

            }
            else{

            }
        }


        var jsondata = {"nBewertung": b};

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://itkongress-c690.restdb.io/rest/vortraege/"+idd,
            "method": "PUT",
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

    });

}

