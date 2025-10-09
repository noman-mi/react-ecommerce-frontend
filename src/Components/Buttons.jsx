import React from "react";

function Button({ text, styling, onClick }) {
  return (
    <button onClick={onClick} className={`rounded-lg ${styling}`}>
      {text}
    </button>
  );
}

export default Button;
