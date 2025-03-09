import React from 'react'

interface inputProps{
  name:string;
  label?:string;
  placeholder?:string;
  rows?:number;

}

export default function Textarea({name, label,placeholder, rows=4}:inputProps) {

  return (
    <div >
      {
        label && <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900 mb-2">{label}</label>
      }
      <textarea name={name} placeholder={placeholder} rows={rows} className="block w-full rounded-md border-0 py-4 px-4 text-gray-900 bg-bgMenuColor placeholder:text-gray-400  focus:ring-1 focus:ring-inset focus:ring-[#cf181f] sm:text-sm " />
  
  </div>
  )
}
