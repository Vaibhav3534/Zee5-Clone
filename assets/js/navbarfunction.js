checkLoginStatus();

function checkLoginStatus() {
  let keyU = JSON.parse(localStorage.getItem("KeyOfLogin"));
  if (keyU == undefined || keyU[0] == "") {
    document.getElementById("log").style.display = "block";
    document.getElementById("profileIMG").style.display = "none";
  } else {
    document.getElementById("log").style.display = "none";
    document.getElementById("profileIMG").style.display = "block";
  }
}
function DisplayPrfileDiv() {
  document.getElementById("profilePopDiv").style.display = "block";
  setTimeout(() => {
    document.getElementById("profilePopDiv").style.display = "none";
  }, 3000);
}
function LogOutUserFromProfile() {
  localStorage.clear();
  document.getElementById("profilePopDiv").style.display = "none";
  window.open("./index.html", "_self");
  checkLoginStatus();
}
function redirecttoProfilePage() {
  document.getElementById("profilePopDiv").style.display = "none";
  window.open("./profilepage.html", "_self");
}
