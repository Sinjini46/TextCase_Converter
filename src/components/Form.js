import React,{useState} from "react";
export default function Form(props) {
  const handleupclick=()=>{
   /*  console.log("uppercase was clicked"+ text); */
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handledownclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleclearclick=()=>{
    let newText=' ';
    setText(newText);
  }
  const handlecopyclick=()=>{
    let text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  const handleonchange=(event)=>{
    /* console.log("on change"); */
    setText(event.target.value);
  }
  const [text,setText]=useState("Enter Text here");
  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to Lowerrcase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>Your text summary</h1>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{0.08*text.split(" ").length} Minutes read</p>
      <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
    </div>
    </>
  );
}
