import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const [search, setSearch] = React.useState("");

  const onSearch = () => {
    window.open(`https://www.google.com/search?q=${search}`, "_blank");
  };

  const onListening = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      recognition.lang = "en-US";
      recognition.continuous = true;

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;

        document.getElementById("btn_listen").disabled = false;
      };

      recognition.onend = () => {
        document.getElementById("btn_listen").disabled = false;
      };

      document.getElementById("btn_listen").disabled = true;

      document.getElementById("btn_listen").addEventListener("click", () => {
        recognition.start();
      });
    } else {
      toast.error("Your browser does not support SpeechRecognition");
    }
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container-index">
      <div className="logo" style={{ marginTop: "10px" }}>
        <h1>𝖂𝖎𝖑𝖑𝖎𝖆𝖒</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleInputChange}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <button onClick={onSearch}>Search</button>
          <button onClick={onListening} id="btn_listen">
            Start Listening
          </button>
          <Link
            to="/calendar"
            id="btn"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
