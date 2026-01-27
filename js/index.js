const roleBox=document.getElementById('roleBox');
const studentBox=document.getElementById('studentBox');
const teacherBox=document.getElementById('teacherBox');
const adminBox=document.getElementById('adminBox');
const mainHead=document.getElementById('mainhead');
const container=document.querySelector('.container');


function hideAll(){
    roleBox.classList.add("hidden");
    studentBox.classList.add("hidden");
    teacherBox.classList.add("hidden");
    adminBox.classList.add("hidden");
    mainHead.classList.add("hidden");
}

function openStudent(){
    hideAll();

    studentBox.classList.remove("hidden");
    container.style.width="450px"
      const Login=document.getElementById('stdLogin');
     

    
    Login.addEventListener('click',()=>{
         let RollNo=document.getElementById("rollNo").value;
let password=document.getElementById("password").value;
let Name=document.getElementById('name').value;
        if(RollNo==='283' && Name==="Ashraf" && password==='@12345'){
    window.location.href="html/student.html"
}
else{
    alert("Fill correct details to log in")
}
})
}

function openTeacher(){
    hideAll();
    
    teacherBox.classList.remove("hidden");
    container.style.width="450px"
      const login=document.getElementById('teacherLogin');
    
    login.addEventListener('click',()=>
    window.location.href="html/teacher.html"
    )
}

function openAdmin(){
    hideAll();
    
    adminBox.classList.remove("hidden");
    container.style.width="450px"

    const login=document.getElementById('adminLogin');
    
    login.addEventListener('click',()=>
    window.location.href="html/admin.html"
    )
    
}

function back(){
    hideAll();
    roleBox.classList.remove("hidden");
     container.style.width="";
    
}
