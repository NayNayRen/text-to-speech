
const voiceSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const clear = document.getElementById('clear');

// init speech synthesis
const message = new SpeechSynthesisUtterance();

// store voices
let voices = [];

function getVoices(){
  voices = speechSynthesis.getVoices();
  voices.forEach(voice => {
    const option = document.createElement('option');
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(option);
  });
}

// set text
function setTextMessage(text){
  message.text = text;
}

// speak text
function speakText(){
  speechSynthesis.speak(message);
}

// set voice
function setVoice(e){
  message.voice = voices.find(voice => voice.name === e.target.value);
}

// voice change
speechSynthesis.addEventListener('voiceschanged', getVoices);

// change voices
voiceSelect.addEventListener('change', setVoice);

// read typed text
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
});

// clear text box
clear.addEventListener('click', () => {
  textarea.value = '';
});


getVoices();
