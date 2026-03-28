import React from 'react'
import usePatientStore from '@/PatientStore/patientStore'

function Attachment1record() {
  const attachment = usePatientStore((state) => state.attachment);
  return (
     <div class="attach1record">

      <div className='attachBox'>
        {attachment.preview1&&<img src={attachment.preview1} alt="" />}
      </div>
    

</div>
  )
}

export default Attachment1record