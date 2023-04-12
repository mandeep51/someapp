import './App.css';
import React_ColorPicker from './components/React_ColorPicker';
import React_Countup from './components/React_Countup';
import React_CreditCard from './components/React_CreditCard';
import React_DatePicker from './components/React_DatePicker';
import React_Indicators from './components/React_Indicators';
/* import React_LineChart from './components/React_LineChart'; */
import React_Modal from './components/React_Modal';
import React_Toastify from './components/React_Toastify';

function App() {
  return (
    <div className="App">
     <React_DatePicker></React_DatePicker>
     <React_ColorPicker></React_ColorPicker>
     <React_CreditCard></React_CreditCard>
     <React_Countup></React_Countup>
     <React_Toastify></React_Toastify>
     <React_Modal></React_Modal>
     <React_Indicators></React_Indicators>
    {/*  <React_LineChart></React_LineChart> */}
    </div>
  );
}

export default App;
