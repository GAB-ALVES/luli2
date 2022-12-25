import React, {useState} from 'react';
import './Request.css';


import Challenge
  from './Challenge/Challenge';
import Ask from './Ask/Ask';
  
function Request() {
    const link = 'https://drive.google.com/drive/folders/1c5H6hAFIKE5GtEWJxi_zNT_aeWRddxjf?usp=sharing';
    const [level3, setLevel3] = useState(false);

    const [page, setPage] = useState(0);
    const pages = [<Challenge setAsk={setPage} setLevel3={setLevel3}/>, <Ask/>]

  return (
    <div className="Request">
      {
        level3 ? 
        <a href={link} target='_blank' rel='noreferrer' className='stealthy'>be alert!!</a>:
        null
      }
      {pages[page]}
    </div>
  );
}

export default Request;
