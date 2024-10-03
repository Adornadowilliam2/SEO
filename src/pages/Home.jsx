import React from "react";
import { toast } from "react-toastify";

export default function Home() {
  const onSearch = () => {
    const value = document.querySelector("input").value;
    window.open(`https://www.google.com/search?q=${value}`, "_blank");
  };

  const onListening = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      recognition.lang = "en-US";
      recognition.continuous = true;

      recognition.onresult = (event) => {
        const result = event.results[event.result.length - 1][0].transcript;
        document.querySelector("input").value = result;
        document.getElementById("btn_listen").disabled = false;
      };

      recognition.onend = () => {
        document.getElementById("btn_listen").disabled = false;
      };

      document.getElementById("btn_listen").disabled = true;

      btn_listen.addEventListener("click", () => {
        recognition.start();
      });
    } else {
      toast.error("Your browser does not support SpeechRecognition");
    }
  };

  return (
    <div className="container-index">
      <div className="logo">
        <h1>𝖂𝖎𝖑𝖑𝖎𝖆𝖒</h1>
        <input type="text" placeholder="Seach..." />
        <div>
          <button onClick={onSearch}>Search</button>
          <button onClick={onListening} id="btn_listen">
            Start Listening
          </button>
        </div>
      </div>
    </div>
  );
}
