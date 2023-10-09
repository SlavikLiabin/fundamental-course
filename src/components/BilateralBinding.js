import React, {useState} from 'react'

export default function BilateralBinding() {
    const[value, setValue] = useState('some text')

  return (
    <div>
        <h1>{value}</h1>
        <input type='text' value={value} onChange={(event) => setValue(event.target.value)}/>
    </div>
  )
}
