import usePatientStore from '@/PatientStore/patientStore'
import React from 'react'

function Attachmentform2() {
  const attachment=usePatientStore((state)=>state.attachment);
  return (
     <div class="attach2">

      <div className='attachBox2'>
        {attachment.preview2&&<img src={attachment.preview2} alt="" />}
      </div>
    

</div>
  )
}

export default Attachmentform2