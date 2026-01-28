document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("studentName");
  const prn = localStorage.getItem("studentPRN");
  const email = localStorage.getItem("studentEmail");
  const phone = localStorage.getItem("studentPhone");
  const dob = localStorage.getItem("studentDOB");
  const address = localStorage.getItem("studentAddress");

  if (!name || !prn) {
    window.location.href = "../index.html";
    return;
  }

  document.getElementById("studentName").textContent = name;
  document.getElementById("studentPRN").textContent = `Roll No: ${prn}`;

  document.getElementById("profileHeaderName").textContent = name;
  document.getElementById("profileName").textContent = name;

  if (email) {
    document.getElementById("profileEmail").textContent = email;
  }

  if (phone) {
    document.getElementById("profilePhone").textContent = phone;
  }

  if (dob) {
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

  // Navigation active state
  const navItems = document.querySelectorAll(".nav li");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // AI Chatbot Setup - ALL IN ONE PLACE
  const aiBtn = document.getElementById("ai-btn");
  const aiChat = document.getElementById("ai-chat");
  const closeAi = document.getElementById("close-ai");
  const aiInput = document.getElementById("ai-input");
  const aiMessages = document.getElementById("ai-messages");

  // Open AI Chat
  aiBtn.addEventListener("click", () => {
    aiChat.classList.toggle("hidden");
  });

  // Close AI Chat
  closeAi.addEventListener("click", () => {
    aiChat.classList.add("hidden");
  });

  // AI Responses
  const responses = {
    attendance: "Your attendance is currently 72%. Minimum required is 75%.",
    exam: "No active exam forms right now. Please check again later.",
    subjects:
      "You have 6 subjects this semester including C Programming and Web Development.",
    events: "Two events are live: AAGHAAZ 2.6 and E-LIBER 2026.",
    ticket: "You can raise a support ticket from the 'Raise Ticket' section.",
  };

  // AI Input Handler
  aiInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && aiInput.value.trim()) {
      const userText = aiInput.value.toLowerCase();
      aiMessages.innerHTML += `<div class="ai-user">${aiInput.value}</div>`;
      aiInput.value = "";

      setTimeout(() => {
        let reply =
          "I'm a demo assistant. Please ask about attendance, exams, subjects, or events.";

        for (let key in responses) {
          if (userText.includes(key)) {
            reply = responses[key];
            break; // Found a match, no need to continue
          }
        }

        aiMessages.innerHTML += `<div class="ai-bot">${reply}</div>`;
        aiMessages.scrollTop = aiMessages.scrollHeight;
      }, 600);
    }
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
