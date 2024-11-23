import Introduction from '@/components/Introduction'
import Mandatory_Information from '@/components/Mandatory_Information'
import Mission from '@/components/Mission'
import Principal_Madam_Section from '@/components/Principal_Madam_Section'
import React from 'react'

function page() {
  return (
    <div className='w-full bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500'>
       {/* INtroduction */}
       <Introduction/>
       {/* Our Mission And Vision */}
       <Mission/>
       {/* Mandatory Disclosure */}
       <Mandatory_Information/>
       {/* Principal Desk */}
      <Principal_Madam_Section/>
    </div>
  )
}

export default page
