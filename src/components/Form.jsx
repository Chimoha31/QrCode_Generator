import React from 'react'
import InputColor from './InputColor'
import InputForm from './InputForm'

const Form = () => {
  return (
    <div className="grid gap-4 col-span-2 p-6"> 
      <InputForm />
      <InputColor />
    </div>
  )
}

export default Form
