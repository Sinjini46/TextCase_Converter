import React from "react";

export default function About(props) {
  return (
    <>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>ABOUT</h1>
      <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
        Welcome to Text Converter, the ultimate web application that transforms
        your text in a snap! Whether you need to convert your content from one
        format to another or simply enhance its readability and style, our
        powerful tool is here to make your life easier. With Text Converter, you
        can seamlessly switch between various text formats, saving you time and
        effort. Say goodbye to manual conversions and tedious formatting tasks;
        our intuitive interface ensures a smooth experience, even for those
        unfamiliar with complex text manipulation techniques.
      </p>
    </>
  );
}
