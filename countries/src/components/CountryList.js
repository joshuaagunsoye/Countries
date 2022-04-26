import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Country from "./Country";
import MultipleSelectPlaceholder from "./RegionFilter";


function CountryList() {


  const [countryList, setCountryList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [searchRegion, setSearchRegion] = useState([])

  

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchInput(e.target.value);
    let handleChange = countryList.filter((country) => {
      const name = `${country.name.common.toLowerCase()}`;
      return name.includes(searchValue);
    });
    setFilteredCountryList(handleChange);
  };

  const regionChange =(e)=>{
    const searchParam = e.target.value.toLowerCase()
    setSearchRegion(e.target.value);
    let regionChange = countryList.filter((country)=>{
      const region = `${country.region.toLowerCase()}`;
      return region.includes(searchParam)
    })
    console.log(regionChange)
    setFilteredCountryList(regionChange)
  }
  
 
  

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const countryList = response.data;
      setCountryList(countryList);
      setFilteredCountryList(countryList);
    });
  }, []);

  return (
    <>
      <input
        type="search"
        placeholder="Search for country"
        onChange={handleChange}
      ></input> 
       <MultipleSelectPlaceholder regionChange= {regionChange} /> 

      {filteredCountryList.map((country, index) => {
        return (
          <Fragment key={country.name.common}>
            <Country countries={filteredCountryList} num={index} />;
          </Fragment>
        );
      })}
    </>
  );
}

export default CountryList;
