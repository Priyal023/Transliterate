import React, { useState } from "react";
import axios from "axios";

const LanguageConverter = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleInputChange = async (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if(text.trim() === "") {
      setConvertedText(""); 
      return;
    }

    try {
      const response = await axios.get(
        "https://www.google.com/inputtools/request?text=" +
          encodeURIComponent(inputText) +
          "&ime=transliteration_en_hi"
      );

      const transliteration = response.data[1]?.[0]?.[1]?.[0];
      if (transliteration) {
        setConvertedText(transliteration);
      } else {
        setConvertedText(inputText); 
      }
    } catch (error) {
      console.error("Error fetching transliteration:", error);
      setConvertedText("Error in transliteration");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ marginBottom: "10px" }}>Type in English, see Hindi</h3>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleInputChange}
        placeholder="Type in English here"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      ></textarea>
      <div>
        <h4 style={{ marginBottom: "10px" }}>Hindi Output:</h4>
        <textarea
          rows="4"
          cols="50"
          value={convertedText}
          
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#f4f4f4",
            color: "#333",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default LanguageConverter;
