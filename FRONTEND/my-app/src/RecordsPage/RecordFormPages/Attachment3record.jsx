import React from 'react'
import usePatientStore from '@/PatientStore/patientStore'

function Attachment3record() {
  const attachment=usePatientStore((state)=>state.attachment);
  return (
     <div class="attach3record">

      <div className='attachBox3'>
         {attachment.preview3&&<img src={attachment.preview3} alt="" />}
      </div>
    

</div>
  )
}

export default Attachment3record