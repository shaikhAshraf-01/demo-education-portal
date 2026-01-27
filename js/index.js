const roleBox = document.getElementById("roleBox");
const studentBox = document.getElementById("studentBox");
const teacherBox = document.getElementById("teacherBox");
const adminBox = document.getElementById("adminBox");
const mainHead = document.getElementById("mainhead");
const container = document.querySelector(".container");

function hideAll() {
  roleBox.classList.add("hidden");
  studentBox.classList.add("hidden");
  teacherBox.classList.add("hidden");
  adminBox.classList.add("hidden");
  mainHead.classList.add("hidden");
}

function openStudent() {
  hideAll();
  studentBox.classList.remove("hidden");
  container.style.width = "450px";
}

function openTeacher() {
  hideAll();
  teacherBox.classList.remove("hidden");
  container.style.width = "450px";
}

function openAdmin() {
  hideAll();
  adminBox.classList.remove("hidden");
  container.style.width = "450px";
}

function back() {
  hideAll();
  roleBox.classList.remove("hidden");
  container.style.width = "";
  mainHead.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const stdLoginBtn = document.getElementById("stdLogin");
  if (stdLoginBtn) {
    stdLoginBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const rollNo = document.getElementById("rollNo").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const dob = document.getElementById("dob").value.trim();
      const address = document.getElementById("address").value.trim();

      if (!name || !rollNo || !email || !phone || !dob || !address) {
        alert("Please fill in all fields");
        return;
      }

      localStorage.setItem("studentName", name);
      localStorage.setItem("studentPRN", rollNo);
      localStorage.setItem("studentEmail", email);
      localStorage.setItem("studentPhone", phone);
      localStorage.setItem("studentDOB", dob);
      localStorage.setItem("studentAddress", address);

      window.location.href = "./html/student.html";
    });
  }

  const teacherLoginBtn = document.getElementById("teacherLogin");
  if (teacherLoginBtn) {
    teacherLoginBtn.addEventListener("click", () => {
      window.location.href = "./html/teacher.html";
    });
  }

  const adminLoginBtn = document.getElementById("adminLogin");
  if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", () => {
      window.location.href = "./html/admin.html";
    });
  }
});
