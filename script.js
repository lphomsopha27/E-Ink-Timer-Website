const API = "172.20.10.7";

async function startTimer() {
  const seconds = document.getElementById("seconds").value;
  document.getElementById("status").innerText = "Running...";

  await fetch(`${API}/start_timer`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({seconds})
  });
}

async function clearDisplay() {
  document.getElementById("status").innerText = "Clearing...";
  await fetch(`${API}/clear_display`, {method:"POST"});
  document.getElementById("status").innerText = "Ready";
}
