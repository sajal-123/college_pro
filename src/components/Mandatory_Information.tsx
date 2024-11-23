import React from 'react'
import Table from './Table'
import {dataList} from '@/Data/Tabledata'
  

export default function Mandatory_Information() {
  return (
    <div className='w-full  pt-8 p-4 pb-8'>
       <div className="space-y-6">
      {dataList.map((data, index) => (
        <Table key={index} data={data} />
      ))}
    </div>
    </div>
  )
}
