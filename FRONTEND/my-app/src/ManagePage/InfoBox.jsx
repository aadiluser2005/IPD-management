import React from 'react'
import "./manage.css"

function InfoBox({fileNumber,name,contact,date,fileYear,manage}) {

   
  return (
    <div className='infoBox my-2'>
        
         <div>File Number :{fileNumber}</div>

        <div >Patient Name :{name}</div>
       
        <div>Patient Contact :+91-{contact}</div>
        <div>Admission Date :{date} </div>
         
         <i class="fa-regular fa-pen-to-square" onClick={()=>manage(fileYear,fileNumber)}></i>
        </div>
  )
}

export default InfoBox;