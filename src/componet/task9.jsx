
import React, { useState } from "react";
const ShowHideParagraph = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Paragraph
      </button>
      {isVisible && (
        <p>This is a paragraph of text that can be shown or hidden.</p>
      )}
    </div>
  );
};

export default ShowHideParagraph;
