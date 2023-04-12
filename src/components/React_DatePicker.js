import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function React_DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd/mm/yyyy' isClearable showYearDropdown scrollableYearDropdown maxDate={new Date()} />
    </div>
  )
}

export default React_DatePicker
