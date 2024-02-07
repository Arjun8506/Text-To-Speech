document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");
    const text = document.querySelector("#text");
  
    btn.addEventListener("click", () => {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = 'en-US'; // Set language (optional)
      speech.text = text.value;
      window.speechSynthesis.speak(speech);
      console.log(text.value);
    });
  });
  