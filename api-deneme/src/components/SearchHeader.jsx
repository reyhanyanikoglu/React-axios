import React from "react";
import { useState } from "react";

const SearchHeader = ({search}) => {

  const [valueInput, setValue] = useState("")

  const handleFormSubmit = (e) => { // form tetiklendiğinde search'e değer gönderilcek
    e.preventDefault();  
    search(valueInput)
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}> 
        <label>Ne arıyorsunuz?</label>
        <input type="text" value={valueInput} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default SearchHeader;
