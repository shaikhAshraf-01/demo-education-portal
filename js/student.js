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
const Subjects=document.getElementById('subjects');
const ExamForm=document.getElementById('examform');
const Events=document.getElementById('event');
const Ticket=document.getElementById('ticket');
const LogOut=document.querySelector('.logout');




function hideAll(){
     Dashboard.classList.add("hidden");
    Profile.classList.add("hidden");
    Subjects.classList.add("hidden");
    ExamForm.classList.add("hidden");
    Events.classList.add("hidden");
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
function openSubjects(){
    hideAll();
     Subjects.classList.remove("hidden");
}
function openExamform(){
    hideAll();
     ExamForm.classList.remove("hidden");
}
function openEvent(){
    hideAll();
     Events.classList.remove("hidden");
}
function openTicket(){
    hideAll();
     Ticket.classList.remove("hidden");
}
LogOut.addEventListener('click',()=>{
    window.location.href=`../index.html`
})




