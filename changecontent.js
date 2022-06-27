//Changing content
let displayedimg = document.getElementById("threeimages");
let buttoncolor = document.getElementById("changingbtn");
let changeicons1 = document.getElementById("iconcolor1");
let changeicons2 = document.getElementById("iconcolor2");
let changeicons3 = document.getElementById("iconcolor3");
let display1 = document.querySelector("#boxone")
display1.addEventListener("click", () => {
    document.getElementById("changingclass").className ="col-sm-12 col-lg-6 order-1";
    displayedimg.src="images/se5.jpg";
    buttoncolor.style.backgroundColor=("#e668b3")
    changeicons1.style.color=("#fbe4f1");changeicons2.style.color=("#fbe4f1");changeicons3.style.color=("#fbe4f1");
    changeicons1.style.backgroundColor=("#e668b3");changeicons2.style.backgroundColor=("#e668b3");changeicons3.style.backgroundColor=("#e668b3");
    document.getElementById("boxone").style.boxShadow=("0 1px 20px 1px rgba(0, 0, 0, 0.1)");
    document.getElementById("boxtwo").style.boxShadow=("");
    document.getElementById("boxthree").style.boxShadow=("");
    document.getElementById("changeheader").innerHTML="Collect Ideas";
});
let display2 = document.querySelector("#boxtwo")
display2.addEventListener("click", () => {
    document.getElementById("changingclass").className ="col-sm-12 col-lg-6 order-3";
    displayedimg.src="images/se6.jpg";
    buttoncolor.style.backgroundColor=("#a17cc5")
    changeicons1.style.color=("#e3d8ee");changeicons2.style.color=("#e3d8ee");changeicons3.style.color=("#e3d8ee");
    changeicons1.style.backgroundColor=("#a17cc5");changeicons2.style.backgroundColor=("#a17cc5");changeicons3.style.backgroundColor=("#a17cc5");
    document.getElementById("boxone").style.boxShadow=("");
    document.getElementById("boxtwo").style.boxShadow=("0 1px 20px 1px rgba(0, 0, 0, 0.1)");
    document.getElementById("boxthree").style.boxShadow=("");
    document.getElementById("changeheader").innerHTML="Data Analysis";

});
let display3 = document.querySelector("#boxthree")
display3.addEventListener("click", () => {
    document.getElementById("changingclass").className ="col-sm-12 col-lg-6 order-1";
    displayedimg.src="images/se7.jpg";
    buttoncolor.style.backgroundColor=("#46c4a0")
    changeicons1.style.color=("#c7ede3");changeicons2.style.color=("#c7ede3");changeicons3.style.color=("#c7ede3");
    changeicons1.style.backgroundColor=("#46c4a0");changeicons2.style.backgroundColor=("#46c4a0");changeicons3.style.backgroundColor=("#46c4a0");
    document.getElementById("boxone").style.boxShadow=("");
    document.getElementById("boxtwo").style.boxShadow=("");
    document.getElementById("boxthree").style.boxShadow=("0 1px 20px 1px rgba(0, 0, 0, 0.1)")
    document.getElementById("changeheader").innerHTML="Finalize Product";
});

 

