function downloadpdf(that) {
    if (that.value == "Alle") {

      document.getElementById("ber").style.display = "block";
        document.getElementById("abs").style.display = "block";
      document.getElementById("pr").style.display = "block";
         document.getElementById("wkstd").style.display = "block";



       }
 if (that.value=="Praktikum") {
   document.getElementById("ber").style.display = "none";
     document.getElementById("abs").style.display = "none";
   document.getElementById("pr").style.display = "block";
      document.getElementById("wkstd").style.display = "none";
}

if (that.value=="Berufseinstieg/Trainee") {
  document.getElementById("ber").style.display = "block";
    document.getElementById("abs").style.display = "none";
  document.getElementById("pr").style.display = "none";
     document.getElementById("wkstd").style.display = "none";
}

if (that.value=="Werkstudent") {
  document.getElementById("ber").style.display = "none";
    document.getElementById("abs").style.display = "none";
  document.getElementById("pr").style.display = "none";
     document.getElementById("wkstd").style.display = "block";
}

if (that.value=="BaMa") {
  document.getElementById("ber").style.display = "none";
    document.getElementById("abs").style.display = "block";
  document.getElementById("pr").style.display = "none";
     document.getElementById("wkstd").style.display = "none";
}



}
