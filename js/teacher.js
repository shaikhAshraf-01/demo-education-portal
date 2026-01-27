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
const Profile=document.getElementById('profile');
const TimeTable=document.getElementById('timetable');
const Classes=document.getElementById('classes');
const Ticket=document.getElementById('ticket');
LogOut=document.querySelector('.logout');







function hideAll(){
     Dashboard.classList.add("hidden");
    Profile.classList.add("hidden");
    TimeTable.classList.add("hidden");
    Classes.classList.add("hidden");
    Ticket.classList.add("hidden");
}
function openDashboard(){
    hideAll();
     Dashboard.classList.remove("hidden");
}

function openProfile(){
    hideAll();
     Profile.classList.remove("hidden");
}
function openTimeTable(){
    hideAll();
     TimeTable.classList.remove("hidden");
}
function openClasses(){
    hideAll();
     Classes.classList.remove("hidden");
}
function openTickets(){
    hideAll();
     Ticket.classList.remove("hidden");
}

LogOut.addEventListener('click',()=>{
    window.location.href=`../index.html`
})




