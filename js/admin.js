document.addEventListener("DOMContentLoaded",()=>{
const navItems=document.querySelectorAll('.nav li');
navItems.forEach(item => {
    item.addEventListener('click',()=>{
    navItems.forEach(li=>li.classList.remove("active"));
item.classList.add("active");


})
})
})
const Dashboard=document.getElementById('dashboard');
const ManageSTD=document.getElementById('managestd');
const LogOut=document.querySelector('.logout');
function hideAll(){
     Dashboard.classList.add("hidden");
    ManageSTD.classList.add("hidden");
   
}
function openDashboard(){
    hideAll();
     Dashboard.classList.remove("hidden");
}

function openManagestd(){
    hideAll();
     ManageSTD.classList.remove("hidden");
}
LogOut.addEventListener('click',()=>{
    window.location.href=`../index.html`
})