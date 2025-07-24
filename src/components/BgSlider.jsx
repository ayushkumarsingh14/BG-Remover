import React, { useState } from 'react'
import { assets, categories } from '../assets/assets';

const BgSlider = () => {

    const [sliderPostion, setSliderPosition] = useState(50);
    const [activeCategory, setActiveCategory] = useState("People");

    const handleSliderChange = ((e) => {
        setSliderPosition(e.target.value);
    })

  return (
    <div className='mb-16 relative'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
            Stunning Qualities
        </h2>

        <div className='flex justify-center mb-10 flex-wrap'>
            <div className='inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center'>
                {categories.map((category, index) => (
                    <button key={category} 
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium ${activeCategory === category ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600 hover:text-gray-200' }`}>
                        {category}
                    </button>
                ))}
            </div>
        </div>

        <div className='relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg'>
            <img src={assets.people_org} 
                 alt="Original image"
                 style={{clipPath: `inset(0 ${100.2 - sliderPostion}% 0 0)`}} />

            <img src={assets.people} 
                 alt="Removed background image"
                 style={{clipPath: `inset(0 0 0 ${sliderPostion}%)`}}
                 className='top-0 left-0 absolute w-full h-full' />

            <input type="range" 
                   className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider'
                   min={0}
                   max={100}
                   onChange={handleSliderChange}
                   value={sliderPostion}/>
                   
        </div>        
    </div>
  )
}

export default BgSlider