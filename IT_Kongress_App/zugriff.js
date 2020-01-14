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


var name = document.getElementById("name").innerHTML;
console.log(name);
var myArray = [];
$.ajax(settingsmeinprog).done(function (response) {

    var laenge = response.length;
    for(i=0;i<laenge;i++){
        if(response[i].username == name){

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
    var laenge = response.length;
    for(i=0;i<laenge;i++){

      var a=parseInt(response[i].IDVortrag);
      var p=a;
      var n=a;
      var g=a;
      var s=a;

      $('#content').append('<p>'+ response[i].Titel +
      ' <button onclick="pbewerten(this.id)" id=' +p+'></button> <em id='+
      g+'>'+response[i].pBewertung+' </em><button onclick="nbewerten()" id='+n+'> ☹ </button> <em id='+s+'>'+
      response[i].nBewertung+'</em></p>');

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

  $.ajax(settingsvor).done(function (response) {

    var laenge = response.length;

    for(i=0;i<laenge;i++){

      if (clicked_id == response[i].IDVortrag){
       b=parseInt(response[i].pBewertung+1);

      }
      else{

      }
}

    var jsondata = {"pBewertung": b,};

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://itkongress-c690.restdb.io/rest/vortraege/(ObjectID)",
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
