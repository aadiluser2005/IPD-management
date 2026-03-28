import React from 'react'
import usePatientStore from '@/PatientStore/patientStore'

function Attachmentform1() {
     const attachment = usePatientStore((state) => state.attachment);
  return (
     <div class="attach1">

      <div className='attachBox'>
        {attachment.preview1&&<img src={attachment.preview1} alt="" />}
      </div>
    

</div>
  )
}

export default Attachmentform1