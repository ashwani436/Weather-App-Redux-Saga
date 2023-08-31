import React from "react";
const CitySelection = ({cities,selectedCity,onSelectCity}) => {
  
  return (
    <div id="main">
      <select name="select" value={selectedCity} onChange={(e)=> onSelectCity(e.target.value)} style={{width:'250px',padding:"10px",borderRadius:'10px',fontSize:"20px"}}>
              {cities.map((city, idx) => {
                  return (
                      <option key={idx} value={city}>{city}</option>
                  )
              })}
      </select>
    </div>
  );
}

export default CitySelection;