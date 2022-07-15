
document.getElementById("mobile-x").addEventListener("click", ()=>{closeMenu()});
document.getElementById("hamburger").addEventListener("click", ()=>{openMenu()});
document.getElementById("mobileDemos").addEventListener("click", ()=>{toggleDropdown("mobileDemosDropdown")});
document.getElementById("mobilePages").addEventListener("click", ()=>{toggleDropdown("mobilePagesDropdown")});
document.getElementById("mobileProjects").addEventListener("click", ()=>{toggleDropdown("mobileProjectsDropdown")});
document.getElementById("mobileBlog").addEventListener("click", ()=>{toggleDropdown("mobileBlogDropdown")});
document.getElementById("mobileBlocks").addEventListener("click", ()=>{toggleDropdown("mobileBlocksDropdown")});
document.getElementById("mobileDocumentation").addEventListener("click", ()=>{toggleDropdown("mobileDocumentationDropdown")});
let myEle = '';
function toggleDropdown(elementId){
    myEle = document.getElementById(elementId);
    let idAry = ['mobileDemosDropdown', 'mobilePagesDropdown', 'mobileProjectsDropdown', 'mobileBlogDropdown', 'mobileBlocksDropdown', 'mobileDocumentationDropdown'];

    (myEle.style.display == 'block') ? myEle.style.display = 'none' : myEle.style.display = "block";

    idAry.forEach(closeDropdowns)
    
};
function closeDropdowns(elementId){
    if(elementId == myEle.id){
        return
    } 
    else{
        document.getElementById(elementId).style.display = 'none';
    } 
};

function closeMenu(){
    document.getElementById('blacked-out').style.display = 'none';
    document.getElementById('mobile-menu').style.display = 'none';
};

function openMenu(){
    document.getElementById('blacked-out').style.display = 'block';
    document.getElementById('mobile-menu').style.display = 'flex';
    console.log('a')
};

window.addEventListener('click', function(e){   
    if (document.getElementById('mobile-menu').contains(e.target) || document.getElementById('hamburger').contains(e.target)){
      return
    } else{
      closeMenu();
    }
  });

window.addEventListener('resize', function(){
   if(window.innerWidth > 991){
        closeMenu();
   }
});