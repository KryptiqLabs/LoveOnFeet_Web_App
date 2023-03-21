//ALL NAV-BAR FRONTEND JAVASCRIPT & jQUERY FUNCTIONS & EFFECTS LIVE HERE//
//EFFECTS ARE REFERRED TO AS "FX" FROM HERE ON//
//POWERED BY W3S//
//DO NOT EDIT THIS SECTION!!!//
///////////////////////////////////////////////////////////////////////////


var mySidebar = document.getElementById("mySidebar");



//FX FOR OPENING NAV-BAR
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}



//FX FOR CLOSING NAV-BAR
function w3_close() {
  mySidebar.style.display = "none";
}

  

