import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developer ⚛️",
          "MCA Student 🎓",
          "Building Real-World Web Apps 🚀",
          "Focused on Clean UI & UX ✨",
          "Future Full-Stack Engineer 🌍",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;