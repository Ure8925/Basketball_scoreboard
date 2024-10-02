let homeBtn = document.getElementById("home-btn")
let guestBtn = document.getElementById("guest-btn")
let homeCount = 0
let guestCount = 0



function homeFreethrow() {
    homeCount +=1;
    homeBtn.textContent = homeCount;
    
}

function homeSecondthrow() {
  homeCount += 2;
  homeBtn.textContent = homeCount;
}

function homeLastthrow() {
  homeCount += 3;
  homeBtn.textContent = homeCount;
}


function guestFreethrow() {
    guestCount +=1;
    guestBtn.textContent = guestCount;
}


function guestSecondthrow() {
  guestCount += 2;
  guestBtn.textContent = guestCount;
}

function guestLastthrow() {
  guestCount += 3;
  guestBtn.textContent = guestCount;
}



 