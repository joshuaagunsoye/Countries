import * as React from "react";

const MultipleSelectPlaceholder = ({regionChange}) => {

  
  return (
    <>
      <label for="cars">Choose a Region:</label>
      <select name="Region" id="Region" onChange={regionChange}>
        {/* <option value="All">All</option> */}
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
};

export default MultipleSelectPlaceholder;
