//ALL SLIDER FRONTEND JAVASCRIPT & jQUERY FUNCTIONS & EFFECTS LIVE HERE//
//EFFECTS ARE REFERRED TO AS "FX" FROM HERE ON//
//POWERED BY W3S//
//DO NOT EDIT THIS SECTION!!!//
///////////////////////////////////////////////////////////////////////////



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("bannerSlider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}