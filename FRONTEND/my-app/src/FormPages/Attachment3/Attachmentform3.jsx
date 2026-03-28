import React from 'react'
import usePatientStore from '@/PatientStore/patientStore'

function Attachmentform3() {
    const attachment=usePatientStore((state)=>state.attachment);
  return (
     <div class="attach3">

      <div className='attachBox3'>
         {attachment.preview3&&<img src={attachment.preview3} alt="" />}
      </div>
    

</div>
  )
}

export default Attachmentform3