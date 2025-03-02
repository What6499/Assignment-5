// getting dynamic date
const date = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = days[date.getDay()];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[date.getMonth()];

const dayOfMonth = date.getDate();

document.getElementById("day").textContent = `${today} ,`;
document.getElementById(
  "date"
).textContent = `${dayOfMonth} ${month} ${date.getFullYear()}`;
// activity log adding
const logButtons = document.querySelectorAll(".log-button");
let taskCount = document.getElementById("task-count").innerText;
let parsedCount = parseInt(taskCount);
let completedTasks = document.getElementById("completed-tasks").innerText;
let parsedTask = parseInt(completedTasks);
for (const logButton of logButtons){
  
  logButton.addEventListener("click", function (event) {
    if (parsedCount !== 1) {
      alert("Board Updated Successfully");
    } else {
      alert("Congrats!!!! You have completed all the current tasks");
    }
    const now = new Date();
    const btn = event.target;
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const activity = event.target
    .closest(".grid")
    .querySelector("h1").textContent;
    const logEntry = document.createElement("div");
    logEntry.classList = "bg-[#f4f7ff] p-3 rounded-md mb-4";
    logEntry.innerHTML = `You have Complete The Task ${activity} at ${time}`;
    document.getElementById("activity").appendChild(logEntry);
    btn.setAttribute("disabled", "true");
    btn.classList.add("opacity-20");
    parsedCount--;
    document.getElementById("task-count").innerText = parsedCount;
    parsedTask++;
    document.getElementById("completed-tasks").innerText = parsedTask;
  });
}

// activity clearing
const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  document.getElementById("activity").innerHTML = "";
});
// random background color

const randomButton = document.getElementById("random-button");
let rotate = 0;
randomButton.addEventListener("click", function () {
  const hexaCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexaCode[Math.floor(Math.random() * 16)];
  }
  const randomBackground = color;
  rotate += 10;

  const background = document.getElementById("body");

  background.style.backgroundColor = randomBackground;
  document.getElementById("random-button").style.rotate = `${rotate}deg`;
});

// switching
document.getElementById("switch").addEventListener("click", function () {
  window.location.href = "blog.html";
});
