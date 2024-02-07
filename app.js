document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");
    const text = document.querySelector("#text");
    const languages = document.querySelector("#languages");
  
    btn.addEventListener("click", () => {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = languages.value; // Set language (optional)
      speech.text = text.value;
      window.speechSynthesis.speak(speech);
      console.log(text.value);
    });
  });
  