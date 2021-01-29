function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  const jsonText = JSON.stringify(value, null, 1);
  result.textContent = jsonText;
}

function addHandler() {
  console.log("addHandler");
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  form.addEventListener('submit', handleSubmit);
}

console.log("Script Loaded");
