//Header changes to sticky when scrolling past landing page
let header = document.getElementById("myheader");
let logo = document.getElementById("sandboxlogo");
window.onscroll = function() {scrollNav()};
function scrollNav() {
  if (window.pageYOffset > 330) {
    header.classList.add("sticky");
    header.style.color="black";
    header.style.backgroundColor="rgba(255, 255, 255, 0.95)";
    header.style.left="-50%";
    header.style.transform="translate(50%)";
    logo.src="images/logo-dark.png";
  }
   else {
    header.classList.remove("sticky");
    header.style.color="white";
    header.style.backgroundColor="";
    header.style.transform="translate(0)";
    logo.src="images/logo-light.png";
  }
}




