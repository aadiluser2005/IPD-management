import React from 'react'
import usePatientStore from '@/PatientStore/patientStore'

function Attachment2record() {
   const attachment=usePatientStore((state)=>state.attachment);
  return (
     <div class="attach2record">

      <div className='attachBox2'>
        {attachment.preview2&&<img src={attachment.preview2} alt="" />}
      </div>
    

</div>
  )
}

export default Attachment2record