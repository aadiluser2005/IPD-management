

import "./records.css";
import Page1record from './RecordFormPages/Page1record'
import Page2record from './RecordFormPages/Page2record'
import Page3record from './RecordFormPages/Page3record'
import Page4record from './RecordFormPages/Page4record'
import Page5record from './RecordFormPages/Page5record'
import Page6record from './RecordFormPages/Page6record' 
import Attachment1record from './RecordFormPages/Attachment1record'     
import Attachment2record from './RecordFormPages/Attachment2record'
import Attachment3record from './RecordFormPages/Attachment3record'



function RecordPage() {


 

  const handlePrint = () => {
   
   window.print();
  };

  return (
    <>
      <h2 className='ms-2'>Record file is shown below</h2>

      <div className='print-area'>

        <div className='page-break'><Page1record></Page1record></div>
        <div className='page-break'><Page2record></Page2record></div>
        <div className='page-break'><Page3record></Page3record></div>
            <div className='page-break'><Page4record></Page4record></div>
            <div className='page-break'><Page5record></Page5record></div>
            <div className='page-break'><Page6record></Page6record></div>
            <div className='page-break'><Attachment1record></Attachment1record></div>
        <div className='page-break'><Attachment2record></Attachment2record></div>
        <div><Attachment3record></Attachment3record></div>  

       
        <button className="print-record-btn" onClick={handlePrint}>Print</button>
      </div>
    </>
  )
}

export default RecordPage



