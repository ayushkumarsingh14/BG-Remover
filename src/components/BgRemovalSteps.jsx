import React from 'react'
import { steps } from '../assets/assets'

const BgRemovalSteps = () => {
  return (
    <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-gray-900'>
            How to remove background in seconds?
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {steps.map((step, index) => ( 
                <div key={index} className='bg-gray-50 p-8 rounded-2xl shadow-sm'>
                    <span className='inline-block bg-gray-200 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full mb-4'>
                        {step.step}
                    </span>
                    <h3 className='text-gray-900 text-xl font-bold mb-4'>
                        {step.title}
                    </h3>
                    <p className='text-gray-600 text-base leading-relaxed'>
                        {step.description}
                    </p>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default BgRemovalSteps