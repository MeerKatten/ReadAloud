const addTextBtn = document.getElementById('add-text-btn');
const textArea = document.getElementById('text');
const textOutput = document.getElementById('text-output');

addTextBtn.addEventListener('click', () => {
  const text = textArea.value;
  textOutput.innerHTML += `<p>${text}</p>`;
});
