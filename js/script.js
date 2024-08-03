function fadeInBody() {
  document.body.classList.add('fade-in');
}


window.onload = function () {
  fadeInBody();
};


document.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  // const btn = document.getElementById("scrolled-headerbtn");

  if (window.scrollY > 50) {

    header.classList.add('scrolled-header');
    // btn.classList.add('scrolled-headerbtn');
    header.classList.remove('bg-transparent');
    btn.classList.remove('btn');
    btn.classList.remove('btn-light');
  } else {
    header.classList.remove('scrolled-header');
    // btn.classList.remove('scrolled-headerbtn');
    header.classList.add('bg-transparent');
    btn.classList.add('btn');
    btn.classList.add('btn-light');
  }
});

function rotateDivs() {
  const container = document.querySelector('.imgslider');
  const firstDiv = container.firstElementChild;
  container.appendChild(firstDiv);
}

// Rotate divs every 5 seconds
setInterval(rotateDivs, 5000);
function contactus() {

  var email = document.getElementById("client_email");
  var mobile = document.getElementById("client_mobile");
  var req = document.getElementById("client_req");
  var name = document.getElementById("client_name");

  var form = new FormData();

  form.append("client_email", email.value);
  form.append("client_mobile", mobile.value);
  form.append("client_req", req.value);
  form.append("client_name", name.value);

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {

    if (request.readyState == 4 && request.status == 200) {

      var response = request.responseText;

      if (response == "success") {

        document.getElementById("contactusmsg").innerHTML = "Thank you for contacting us. We will get back to you shortly.";
        document.getElementById("contactusmsg").className = "alert alert-success"
        document.getElementById("contactusmsgdiv").className = "d-block";

      } else {

        document.getElementById("contactusmsg").innerHTML = response;
        document.getElementById("contactusmsgdiv").className = "d-block";

      }
    }
  }

  request.open("POST", "contactusProcess.php", true);
  request.send(form);
}


function gotowhatsapp() {

  window.location = "https://wa.me/767803753";

}


function gotofb() {

  window.location = "https://www.facebook.com/share/rQ3Krg4FhhxuBWAK/?mibextid=qi2Omg";

}


