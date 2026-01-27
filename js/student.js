// Load student data from localStorage when page loads
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("studentName");
  const prn = localStorage.getItem("studentPRN");
  const email = localStorage.getItem("studentEmail");
  const phone = localStorage.getItem("studentPhone");
  const dob = localStorage.getItem("studentDOB");
  const address = localStorage.getItem("studentAddress");

  // Redirect to login if no data
  if (!name || !prn) {
    window.location.href = "../index.html";
    return;
  }

  // Update sidebar information
  document.getElementById("studentName").textContent = name;
  document.getElementById("studentPRN").textContent = `Roll No: ${prn}`;

  // Update profile section
  document.getElementById("profileHeaderName").textContent = name;
  document.getElementById("profileName").textContent = name;

  if (email) {
    document.getElementById("profileEmail").textContent = email;
  }

  if (phone) {
    document.getElementById("profilePhone").textContent = phone;
  }

  if (dob) {
    // Format the date nicely
    const dateObj = new Date(dob);
    const formattedDate = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    document.getElementById("profileDOB").textContent = formattedDate;
  }

  if (address) {
    document.getElementById("profileAddress").textContent = address;
  }

  // Handle navigation item clicks for active state
  const navItems = document.querySelectorAll(".nav li");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

// Get all content sections
const Dashboard = document.getElementById("dashboard");
const Profile = document.getElementById("profile");
const Subjects = document.getElementById("subjects");
const ExamForm = document.getElementById("examform");
const Events = document.getElementById("event");
const Ticket = document.getElementById("ticket");
const LogOut = document.querySelector(".logout");

// Hide all sections
function hideAll() {
  Dashboard.classList.add("hidden");
  Profile.classList.add("hidden");
  Subjects.classList.add("hidden");
  ExamForm.classList.add("hidden");
  Events.classList.add("hidden");
  Ticket.classList.add("hidden");
}

// Navigation functions
function openDashboard() {
  hideAll();
  Dashboard.classList.remove("hidden");
}

function openProfile() {
  hideAll();
  Profile.classList.remove("hidden");
}

function openSubjects() {
  hideAll();
  Subjects.classList.remove("hidden");
}

function openExamform() {
  hideAll();
  ExamForm.classList.remove("hidden");
}

function openEvent() {
  hideAll();
  Events.classList.remove("hidden");
}
function openTicket() {
  hideAll();
  Ticket.classList.remove("hidden");
}

// Logout functionality
LogOut.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "../index.html";
});
