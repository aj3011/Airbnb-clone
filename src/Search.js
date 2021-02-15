import React, { useState } from 'react';
import './Search.css';
// the css files mentioned below are recommended to de imported
// by the developers of the date picker.

//main style file
import "react-date-range/dist/styles.css";
//theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import {Button} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from 'react-router-dom';
//Date picker component
//https://www.npmjs.com/package/react-date-range
//we will do this through react date picker 
//using npm i react-date-range
// and then write npm i date-fns
function Search()
{
    //state variables for start and end date
     
    const[startDate,setStartDate]=useState(new Date());
    const[endDate,setEndDate]=useState(new Date());
    const history=useHistory();
    // all these selectionRange and handleSelect are required to be implemented
    // as instructed by its developers if we want to use the
    // select dates feature
    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key:"selection",
    }

    function handleSelect(ranges)
    {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
     return(
         <div className='search'>
          {/* selectionRange picks up our start and end date selection from the website and onChange sends it as 
           argument to the handleSelect function which then updates the state of the variables*/}
             <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
             {/* input for number of guests */}
             <h2>
             Number of guests 
             <PeopleIcon />
             </h2>
             
                 <input min={0}
                 defaultValue={2}
                 type="number" />
                 <Button onClick ={()=> history.push('/search')}>Search Airbnb</Button>

    
         </div>
    )
}

export default Search;