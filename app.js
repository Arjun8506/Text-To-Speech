let btn = document.querySelector("#btn")
let text = document.querySelector("#text")
let copy = document.querySelector("#copy")
let languages = document.querySelector("#languages")

console.log(languages);


btn.addEventListener("click", ()=>{
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
})

// copy.addEventListener("click", ()=>{
//    let selected = text.select();
//   document.execCommand('copy');
// })