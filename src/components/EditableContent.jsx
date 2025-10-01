import { useState, useRef, useEffect } from "react";
import './EditableContent.css';

export default function EditableContent({ placeholder = '', handleSubmit = (value) => console.log(value)}) {
  const [text, setText] = useState("");
  const divRef = useRef(null);

  const handleInput = () => {
    setText(divRef.current.innerText);
  };

  // Optional: set placeholder text on mount
  useEffect(() => {
    if (divRef.current && !text) {
      divRef.current.innerText = '';
    }
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <div
        ref={divRef}
        contentEditable
        suppressContentEditableWarning={true}
        onInput={handleInput}
        style={{
          minHeight: "100px",
          textAlign: 'left',
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "16px",
          outline: "none",
          whiteSpace: "pre-wrap", // keeps line breaks
        }}
        data-placeholder="Click here to edit..."
      />

      {/* <p style={{ marginTop: "1rem" }}>
        <strong>Preview:</strong> {text}
      </p> */}
      <button disabled={ text.length == 0} className="editable-submit" onClick={() => handleSubmit(text)}>Submit Review</button>
    </div>
  );
}
