import React from 'react'
import {cwList} from './ContinueWatchingSlider'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const ContinueWatching = () => {
  const CWslideLeft = () => {
    var sliderCW = document.getElementById('sliderCW');
    sliderCW.scrollLeft = sliderCW.scrollLeft - 500;
  }
  const CWslideRight = () => {
    var sliderCW = document.getElementById('sliderCW');
    sliderCW.scrollLeft = sliderCW.scrollLeft + 500;
  }
  return (
    <div name='continue' className='w-full h-[450px] relative bg-black text-white'>
      <h1 className='text-4xl font-bold px-20 py-6 cursor-pointer'>Continue Watching</h1>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={CWslideLeft} size={40} />
        <div id='sliderCW' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {cwList.map((item) => (
            <img className='w-[220px] h-[300px] inline-block m-2 p-2 cursor-pointer hover:scale-110 ease-in-out duration-300' src={item.img} alt="/" />
            ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={CWslideRight} size={40} />
      </div>
    </div>
  )
}

export default ContinueWatching