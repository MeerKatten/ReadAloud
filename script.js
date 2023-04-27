const addButton = document.getElementById('add-text-btn');
const clearTextButton = document.getElementById('clear-text-btn');
const clearFormButton = document.getElementById('clear-form-btn');
const pasteButton = document.getElementById('paste-btn');
const textArea = document.getElementById('text');
const textOutput = document.getElementById('text-output');

addButton.addEventListener('click', () => {
  const text = textArea.value;
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  textOutput.appendChild(paragraph);
});

clearTextButton.addEventListener('click', () => {
  const paragraphs = textOutput.querySelectorAll('p');
  paragraphs.forEach(paragraph => paragraph.remove());
});

clearFormButton.addEventListener('click', () => {
  textArea.value = "";
});

pasteButton.addEventListener('click', () => {
  navigator.clipboard.readText()
    .then((text) => {
      textArea.value = text;
    })
    .catch((err) => {
      console.error('Failed to read clipboard contents: ', err);
    });
});
