import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const TryNow = () => {

    const {removeBg} = useContext(AppContext)
  return (
    <div className='flex flex-col justify-center text-white px-4 items-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-7'>
            Remove Image Background.
        </h2>
        <p className='text-gray-500 mb-8 text-center'>
            Get a transparent background for any image.
        </p>
        <div className='bg-white rounded-2xl shadow-lg p-10 flex items-center space-y-4 flex-col'>
            <input type="file" id='upload2' hidden accept='image/*' onChange={(e) => removeBg(e.target.files[0])}/>
            <label htmlFor='upload2'
                   className='bg-indigo-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg'>
                Upload Image
            </label>
            <p className='text-gray-500 text-sm'>
                or drop a file, paste image or <a href="#" className='text-blue-500 underline'>URL</a>             
            </p>
        </div>
    </div>
  )
}

export default TryNow