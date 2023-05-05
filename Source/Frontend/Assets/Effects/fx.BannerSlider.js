//ALL SLIDER FRONTEND JAVASCRIPT & jQUERY FUNCTIONS & EFFECTS LIVE HERE//
//EFFECTS ARE REFERRED TO AS "FX" FROM HERE ON//
//POWERED BY W3S//
//DO NOT EDIT THIS SECTION!!!//
///////////////////////////////////////////////////////////////////////////



var myIndex1 = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("bannerSlider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex1++;
  if (myIndex1 > x.length) {myIndex1 = 1}    
  x[myIndex1-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}



carousel();







var myIndex2 = 0;

function carouselMobile() {
  var i;
  var x = document.getElementsByClassName("bannerSliderMobile");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carouselMobile, 5000); // Change image every 5 seconds
}



carouselMobile();


