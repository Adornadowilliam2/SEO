import React from "react";
import notfound from "../assets/notfound.png";
export default function NotFound() {
  return (
    <>
      <div className="grid-container">
        <div>
          <h1>404</h1>
          <h2>Not Found</h2>
        </div>
        <img src={notfound} alt="404" />
      </div>
    </>
  );
}
